const { Client } = require('pg');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
let connectionString = '';
env.split('\n').forEach(line => {
  if (line.startsWith('DATABASE_URL=')) {
    connectionString = line.substring('DATABASE_URL='.length).trim();
    if (connectionString.startsWith('"') && connectionString.endsWith('"')) {
      connectionString = connectionString.slice(1, -1);
    }
  }
});

const client = new Client({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
});

const ddlScript = `
-- Drop existing trigger and function to ensure idempotency
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- 1. Create foundational profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    role TEXT NOT NULL DEFAULT 'investor' CHECK (role IN ('investor', 'owner', 'admin')),
    full_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Strictly Enforce Row Level Security (Q25 Compliance)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Define RLS Policies
DROP POLICY IF EXISTS "Users can view their own profile." ON public.profiles;
CREATE POLICY "Users can view their own profile."
    ON public.profiles FOR SELECT
    USING ( auth.uid() = id );

DROP POLICY IF EXISTS "Users can update their own profile." ON public.profiles;
CREATE POLICY "Users can update their own profile."
    ON public.profiles FOR UPDATE
    USING ( auth.uid() = id );

-- 4. Supabase Trigger: Auto-create profile on auth signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', COALESCE(new.raw_user_meta_data->>'role', 'investor'))
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 5. Data Migration: Seed existing admin user
INSERT INTO public.profiles (id, role, full_name)
SELECT id, 'owner', 'ACCET Project Admin' FROM auth.users WHERE email = 'accet.project@gmail.com'
ON CONFLICT (id) DO UPDATE SET role = 'owner', full_name = 'ACCET Project Admin';
`;

async function executeMigration() {
  try {
    await client.connect();
    console.log("🔗 Established secure connection to Supabase DB.");
    
    console.log("🚀 Executing DDL Migrations (Tables, RLS, Triggers)...");
    await client.query("BEGIN");
    await client.query(ddlScript);
    await client.query("COMMIT");
    
    console.log("✅ Migration completed successfully!");
    console.log("✅ Q25 COMPLIANT: 'public.profiles' table created with strict RLS enabled.");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("❌ Migration failed:", err.message);
  } finally {
    await client.end();
  }
}

executeMigration();
