const wait = ms => new Promise(res => setTimeout(res, ms));

async function check() {
  console.log("Monitoring Render deployment status...");
  while (true) {
    try {
      const res = await fetch("https://api.render.com/v1/services/srv-d6uvsfvkijhs73chnh1g/deploys?limit=1", { 
        headers: { "Authorization": "Bearer rnd_BBJHyhq9KKRhpt98KPGJvG240gma" }
      });
      const data = await res.json();
      const status = data[0].deploy.status;
      const id = data[0].deploy.id;
      
      console.log(`[${new Date().toISOString()}] Deploy ${id} status: ${status}`);
      
      if (status !== 'created' && status !== 'build_in_progress' && status !== 'update_in_progress') {
        console.log(`\nDeployment finished with status: ${status.toUpperCase()}`);
        break;
      }
    } catch (e) {
      console.error("Error fetching status:", e.message);
    }
    await wait(20000);
  }
}
check();
