// ==UserScript==
// @name         Remove Thingiverse Ads
// @namespace    http://tampermonkey.net/
// @version      0.02
// @description  Remove the stupid reddit adds that bypass pihole
// @author       Trasiva
// @match        https://www.thingiverse.com/*
// ==/UserScript==

window.addEventListener('load', function() {
	let nodes = document.querySelectorAll('div[class*="AdCard__leaderboard"]');
  console.log(`Removing ${nodes.length} nodes.`)
  for (let iter = nodes.length - 1; iter >= 0; iter--) {
      nodes[iter].remove();
  }
}, false);
