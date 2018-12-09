// ==UserScript==
// @name         Imgur: Check albums from post
// @namespace    http://tampermonkey.net/
// @version      0.21
// @description  View user albums from their post
// @author       Trasiva
// @match        https://imgur.com/gallery/*
// @match        https://imgur.com/a/*
// @match        https://imgur.com/*/favorites/*
// ==/UserScript==

window.addEventListener('load', function() {
    let divNav = document.querySelector('div[class="next-prev"]');
    
    if (divNav != null) {
        SetProfileLink();
        divNav.AddEventListener('click', SetProfileLink, false)
    }
}, false);

function SetProfileLink() {
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
}
