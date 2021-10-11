/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 396:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(396);

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
fetch(url, { headers, body: JSON.stringify(body) })
.then(async (res) => {
    if (res.ok) process.exit(0)
    else core.error(`Invalid response! GOT ${res.status}. Message: ${await res.json()}`)
})


})();

module.exports = __webpack_exports__;
/******/ })()
;