const core = require("@actions/core");
const fetch = require('node-fetch');

let token    = core.getInput('PTE_BEARER_TOKEN');
let panelUrl = core.getInput('PTE_PANEL_URL');
let panelId  = core.getInput('PTE_PANEL_ID');

//  Checking if any variable is not set

switch('') {
    case panelUrl:
        core.error('No pterodactyl URL was supplied');
        process.exit(1);
        break;
    
    case token:
        core.error('No pterodactyl bearer token was supplied');
        process.exit(1);
        break;

    case panelId:
        core.error('No pterodactyl panel ID was supplied');
        process.exit(1);
        break;
}

//  Parsing panel URL

let url;

try {
    url = new URL(`${panelUrl}/api/client/servers/${encodeURIComponent(panelId)}/power`);
} catch(e) {
    core.error('Misformed URL');
}

//  Preparing 

const headers = {
    'Authorization': `Bearer ${core.getInput('PTE_BEARER_TOKEN')}`,
    'Content-Type': 'application/json'
};

const body = {
    "signal": "restart"
}

fetch(url.toString(), { method: 'POST', headers, body: JSON.stringify(body) })
    .then(async (res) => {
        if (res.ok) process.exit(0)
        else {
            core.error(`Invalid response! GOT ${res.status}. Message: ${await res.text()}`);
            process.exit(1);
        }
    })

