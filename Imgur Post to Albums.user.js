// ==UserScript==
// @name         Imgur: Check albums from post
// @namespace    http://tampermonkey.net/
// @version      0.13
// @description  View user albums from their post
// @author       Trasiva
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match        https?://imgur.com/gallery/*
// @match        https?://imgur.com/a/*
// @match        https?://imgur.com/*/favorites/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */

let postHeader = document.getElementsByClassName('post-header');

if (postHeader.length > 0) {
    postHeader = postHeader[0];
    
    let postAccount = postHeader.getElementsByClassName('post-account');
    if (postAccount.length > 0) {
        postAccount = postAccount[0];
        const userName = postAccount.innerText;
        const newURL = `http://${userName}.imgur.com`;
        
        let profileLink = document.createElement('a');
        profileLink.setAttribute('href', newURL);
        profileLink.setAttribute('class', 'post-account');
        profileLink.setAttribute('style', 'margin-left:10px');
        profileLink.setAttribute('target', '_blank');
        profileLink.innerText = `Profile`;      

        const urlType = window.location.href.replace(/.+.com\/(.+)\/.+/g, '$1');
        let downloadLink = document.createElement('a');

        if (urlType === 'a') {
            const downloadURL = `${window.location.href}/href`;
            downloadLink.setAttribute('href', downloadURL);
            downloadLink.setAttribute('class', 'post-account');
            downloadLink.setAttribute('style', 'margin-left:10px');
            downloadLink.setAttribute('target', '_blank');
            downloadLink.innerText = `Download`; 
        }

        let divContainer = postHeader.getElementsByClassName('post-title-meta');
        if (divContainer.length > 0) {
            divContainer[0].appendChild(profileLink);
            if (urlType === 'a') {
                divContainer[0].appendChild(downloadLink); 
            }
        }
    }
}

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
