// ==UserScript==
// @name         Imgur: Check albums
// @namespace    http://tampermonkey.net/
// @version      0.21
// @description  View user albums from their profile
// @author       Trasiva
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match        https://imgur.com/user/*
// ==/UserScript==

window.addEventListener('load', function() {
    'use strict';

    const userName = window.location.href.replace(/.+\/user\/([a-zA-Z0-1]+)(\/\w+)?/, '$1');
    const tabDiv = document.querySelector('div[class*="Tabs"]');

    console.log(tabDiv);

    if (tabDiv) {
        const profileName = userName.length > 25 ? userName.substring(0,25) : userName;
        const newURL = `http://${userName}.imgur.com`;

        let storeDiv = document.createElement('div');
        storeDiv.setAttribute('class', 'TabItem TabItem-strip');

        let profileLink = document.createElement('a');
        profileLink.setAttribute('href', newURL);
        profileLink.setAttribute('style', 'text-decoration: none;color:inherit');
        profileLink.innerText = `Check ${profileName}'s Profile`;
        console.log('adding222...');
        if (tabDiv != null) {
            console.log('adding...');
            storeDiv.appendChild(profileLink);
            tabDiv.appendChild(storeDiv);
        }
    }
}, false);
