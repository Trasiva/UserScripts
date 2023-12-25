// ==UserScript==
// @name         Redline Whitelist Appysystems
// @namespace    http://tampermonkey.net/
// @version      0.03
// @description  Update pending and processing app section with count
// @author       Trasiva
// @match        https://appsystems.co.uk/centre/manage/redlinerp
// ==/UserScript==

window.addEventListener('load', function() {
    const container = document.querySelector('#processing_grid')

    if (container != null) {
        GetAppCountByType('#apps-grid', '#search_entry_1')
        GetAppCountByType('#processing_grid', '#search_entry_2')
    }
}, false);

function GetAppCountByType(gridName, childElementName) {
    const apps = document.querySelectorAll(`${gridName} > .app-container`)
    let textLabel = document.querySelector(childElementName).parentElement

    textLabel.innerText = `${textLabel.innerText} (${apps.length})`
}
