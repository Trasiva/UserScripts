// ==UserScript==
// @name         Imgur: Check albums
// @namespace    http://tampermonkey.net/
// @version      0.07
// @description  View user albums from their profile
// @author       Trasiva
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match        http://imgur.com/user/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */1

const oldURL = 'http://imgur.com/user/corndogmaddy';
const userName = window.location.href.replace(/.+\/user\//g, '');
//const userName = oldURL.replace(/.+\/user\//g, '');

const submitButton = document.getElementById('pm-button');

if (submitButton) {
    const newURL = `http://www.${userName}.imgur.com`;
    let profileLink = document.createElement('a');
    profileLink.setAttribute('href', newURL);
	
    let profileButton = document.createElement('div');
    profileButton.setAttribute('class','button-css');
    profileButton.innerText = `Check ${userName}'s Profile`;

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
