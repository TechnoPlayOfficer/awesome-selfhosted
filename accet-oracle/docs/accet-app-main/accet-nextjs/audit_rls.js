const { Client } = require('pg');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8');
let connectionString = '';
env.split('\n').forEach(line => {
  if (line.startsWith('DATABASE_URL=')) {
    connectionString = line.substring('DATABASE_URL='.length).trim();
    // Sometimes Prisma/Supabase adds URL params, make sure they are clean
    if (connectionString.startsWith('"') && connectionString.endsWith('"')) {
      connectionString = connectionString.slice(1, -1);
    }
  }
});

const client = new Client({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false } // Required by Supabase hosted databases
});

async function auditRLS() {
  try {
    await client.connect();
    console.log("🔗 Connected to Supabase PostgreSQL.");

    const tablesQuery = `
      SELECT 
          nspname AS schema_name,
          relname AS table_name, 
          relrowsecurity AS rls_enabled, 
          relforcerowsecurity AS rls_forced
      FROM pg_class
      JOIN pg_namespace ON pg_namespace.oid = pg_class.relnamespace
      WHERE relkind = 'r' AND nspname NOT IN ('pg_catalog', 'information_schema', 'pg_toast')
      ORDER BY schema_name, table_name;
    `;
    
    const tablesRes = await client.query(tablesQuery);
    console.log(`\n📊 Found ${tablesRes.rowCount} tables in all user/system schemas.`);
    
    const policiesQuery = `
      SELECT tablename, policyname, cmd, roles, qual, with_check
      FROM pg_policies
      WHERE schemaname = 'public';
    `;
    const policiesRes = await client.query(policiesQuery);

    tablesRes.rows.forEach(table => {
      console.log(`\n[TABLE] ${table.schema_name}.${table.table_name.toUpperCase()}`);
      console.log(`  RLS Enabled: ${table.rls_enabled ? '✅ YES' : '❌ NO'}`);
      
      const tablePolicies = policiesRes.rows.filter(p => p.tablename === table.table_name);
      if (tablePolicies.length > 0) {
        console.log(`  Policies (${tablePolicies.length}):`);
        tablePolicies.forEach(p => {
          console.log(`    - [${p.cmd}] ${p.policyname} -> Roles: ${p.roles}`);
        });
      } else {
        console.log(`  Policies: ⚠️ NONE`);
      }
    });

  } catch (err) {
    console.error("Database error:", err.message);
  } finally {
    await client.end();
  }
}

auditRLS();
