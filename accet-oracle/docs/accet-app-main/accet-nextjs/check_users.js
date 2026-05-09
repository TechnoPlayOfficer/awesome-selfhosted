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

async function checkUser() {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();
  
  if (error) {
    console.error("Error fetching users:", error.message);
    return;
  }
  
  const users = data.users;
  const targetUser = users.find(u => u.email === 'accet.project@gmail.com');
  
  if (targetUser) {
    console.log("✅ User exists!");
    console.log(`- ID: ${targetUser.id}`);
  } else {
    console.log("❌ USER DOES NOT EXIST in Supabase Auth.");
  }
}

checkUser();
