const core = require("@actions/core");
const fetch = require('node-fetch');

if (!core.getInput('PTE_PANEL_URL')) {
    core.error('No pterodactyl URL was supplied');
    process.exit(1);
}
if (!core.getInput('PTE_BEARER_TOKEN')) {
    core.error('No pterodactyl bearer token was supplied');
    process.exit(1);
}
if (!core.getInput('PTE_PANEL_ID')) {
    core.error('No pterodactyl panel ID was supplied');
    process.exit(1);
}

const headers = {
    'Authorization': `Bearer ${core.getInput('PTE_BEARER_TOKEN')}`,
    'Content-Type': 'application/json'
};

const body = {
    "signal": "restart"
}

const url = `${core.getInput('PTE_PANEL_URL')}/api/client/servers/${core.getInput('PTE_PANEL_ID')}/power`;
fetch(url, { method: 'POST', headers, body: JSON.stringify(body) })
.then(async (res) => {
    if (res.ok) process.exit(0)
    else {
        core.error(`Invalid response! GOT ${res.status}. Message: ${await res.text()}`);
        process.exit(1);
    }
})

