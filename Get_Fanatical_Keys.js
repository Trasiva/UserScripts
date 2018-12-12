// ==UserScript==
// @name         Fanatical - Get Keys
// @namespace    http://tampermonkey.net/
// @version      0.01
// @description  View user albums from their post
// @author       Trasiva
// @match        https://www.fanatical.com/en/orders/*
// ==/UserScript==

window.addEventListener('load', function() {

	for (const row of document.querySelectorAll('dl')) {
		const game = row.getElementsByClassName('game-name')[0].innerText;
		const key = row.querySelector('input').value;
		console.log(`${game} - ${key}`);
	}
}, false);
