// ==UserScript==
// @name         Remove Reddit Ads
// @namespace    http://tampermonkey.net/
// @version      0.01
// @description  Remove the stupid reddit adds that bypass pihole
// @author       Trasiva
// @match        https://www.reddit.com/
// @match        https://www.reddit.com/*
// ==/UserScript==
let nodes = document.querySelectorAll('div[data-before-content="advertisement"]');
console.log(`Removing ${nodes.length} nodes.`)
for (let iter = nodes.length - 1; iter >= 0; iter--) {
    nodes[iter].remove();
}
