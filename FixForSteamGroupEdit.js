// ==UserScript==
// @name         Fix Steam Group Edit
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fixes the bugged edit website of steam groups.
// @author       TrolluXe
// @match        https://steamcommunity.com/groups/*/edit
// @match        https://steamcommunity.com/groups/*/edit/profile
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let start = document.getElementsByClassName("group_content group_summary")[0]

    for(var i = 1; i <= 3; i++) {
        let title_i = 'weblink_' + i + '_title'
        let url_i = 'weblink_' + i + '_url'

        if(i > 1) {
            let x00 = document.createElement("br")
            start.appendChild(x00)
        }

        let a00 = document.createElement("div")
        a00.className = "formRow"
        a00.margin = "0 0 20px 0 !important"

        let b00 = document.createElement("div")
        b00.className = "formRowFields"

        let g01 = document.createElement("div")
        g01.className = "formRowTitle"
        g01.textContent = "Website Title"

        let c00 = document.createElement("div")
        c00.className = "gray_bevel for_text_input fullwidth"

        let c01 = document.createElement("div")
        c01.className = "gray_bevel for_text_input fullwidth"

        let inject_title = document.createElement("input")
        inject_title.className = "dynInput"
        inject_title.type = "text"
        inject_title.name = "[" + i + "] Title"
        inject_title.id = title_i

        c00.appendChild(inject_title)
        b00.appendChild(c00)
        a00.appendChild(b00)
        a00.appendChild(g01)
        start.appendChild(a00)

        let a99 = document.createElement("div")
        a99.className = "formRow"
        a99.margin = "0 0 20px 0 !important"

        let b99 = document.createElement("div")
        b99.className = "formRowFields"

        let g99 = document.createElement("div")
        g99.className = "formRowTitle"
        g99.textContent = "Website Link"

        let c99 = document.createElement("div")
        c99.className = "gray_bevel for_text_input fullwidth"

        let inject_url = document.createElement("input")
        inject_url.className = "dynInput"
        inject_url.type = "text"
        inject_url.name = "[" + i + "] Url"
        inject_url.id = url_i

        c99.appendChild(inject_url)
        b99.appendChild(c99)
        a99.appendChild(b99)
        a99.appendChild(g99)
        start.appendChild(a99)
    }

})();