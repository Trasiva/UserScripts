// ==UserScript==
// @name         Redline Whitelist Appysystems
// @namespace    http://tampermonkey.net/
// @version      0.06
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

async function GetAppCountByType(gridName, childElementName) {
    const maxCount = 5
    let tryCount = 1
    while (tryCount < maxCount) {
        console.log(`Polling ${gridName} ${tryCount} of ${maxCount}`)
        const apps = document.querySelectorAll(`${gridName} > .app-container`)
        const appCount = apps.length
        let textLabel = document.querySelector(childElementName).parentElement

        textLabel.innerText = `${textLabel.innerText} (${apps.length})`

        if (appCount == 0) {
            tryCount++
            await(sleep(2000))
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
