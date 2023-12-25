// ==UserScript==
// @name         Redline Whitelist Appysystems
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Update pending and processing app section with count
// @author       Trasiva
// @match        https://appsystems.co.uk/centre/manage/redlinerp
// ==/UserScript==

window.addEventListener('load',async function() {
    const container = document.querySelector('#processing_grid')

    if (container != null) {
        await(sleep(5000))
        GetAppCountByType('#pending_grid', '#search_entry_1')
        GetAppCountByType('#processing_grid', '#search_entry_2')
    }
}, false);

async function GetAppCountByType(gridName, childElementName) {
    const maxCount = 5
    let tryCount = 1
    while (tryCount <= maxCount) {
        const apps = document.querySelectorAll(`${gridName} > .app-container`)
        const searchBar = document.querySelector(childElementName)
        let appCount = apps.length
   
        if (appCount > 0 || tryCount == maxCount) {
            let textLabel = searchBar.parentElement
            textLabel.innerHTML = textLabel.innerHTML.replace("Applications", `Applications (${apps.length})`)
            console.log(`Found ${appCount} apps for ${gridName}`)
            break
        }
        else {
            tryCount++
            await(sleep(2000))
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
