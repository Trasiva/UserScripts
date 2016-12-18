// ==UserScript==
// @name         Imgur: Check albums
// @namespace    http://tampermonkey.net/
// @version      0.01
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
//const newURL = window.location.href.replace(/.+\/user\//g, '');
const userName = oldURL.replace(/.+\/user\//g, '');

const submitButton = document.getElementById('pm-button');

if (submitButton) {
	let profileButton = document.createElement('div');
  profileButton.setAttribute('class','button-css');
  profileButton.value = `Check ${userName}'s Profile`;
	
  let parentDiv = submitButton.parentElement;
  console.log(parentDiv);
  if (parentDiv) {
  	parentDiv.appendChild(profileButton);
  }
}

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
