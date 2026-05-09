const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env.local', 'utf8');
let supabaseUrl = '';
let supabaseServiceKey = '';

env.split('\n').forEach(line => {
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) supabaseUrl = line.substring('NEXT_PUBLIC_SUPABASE_URL='.length).trim();
  if (line.startsWith('SUPABASE_SERVICE_ROLE_KEY=')) supabaseServiceKey = line.substring('SUPABASE_SERVICE_ROLE_KEY='.length).trim();
});

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createUser() {
  console.log("Creating user accet.project@gmail.com...");
  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email: 'accet.project@gmail.com',
    password: 'Always.accet26',
    email_confirm: true // Force confirmation since it's a confidential mockup
  });
  
  if (error) {
    console.error("❌ Error creating user:", error.message);
  } else {
    console.log("✅ User created successfully!");
    console.log("Email:", data.user.email);
    console.log("Password: Always.accet26");
  }
}

createUser();
