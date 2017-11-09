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

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */1

const userName = window.location.href.replace(/.+\/user\/([a-zA-Z0-1]+)(\/\w+)?/, '$1');
const submitButton = document.getElementById('pm-button');

if (submitButton) {
    const newURL = `http://${userName}.imgur.com`;

    let profileLink = document.createElement('a');
    profileLink.setAttribute('href', newURL);
    profileLink.setAttribute('style', 'text-decoration: none;color:inherit');
    
    const profileName = userName.length > 25 ? userName.substring(0,25) : userName;
    let profileButton = document.createElement('div');
    profileButton.setAttribute('class','button-css');
    profileButton.setAttribute('style', 'margin-top:5px');
    profileButton.setAttribute('target', '_blank');
    profileButton.innerText = `Check ${profileName}'s Profile`;

    profileLink.appendChild(profileButton);
    let parentDiv = submitButton.parentElement;
    if (parentDiv) {
        parentDiv.appendChild(profileLink);
    }
}

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
