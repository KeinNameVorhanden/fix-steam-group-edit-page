// ==UserScript==
// @name         Fix Steam Group Edit
// @namespace    FixSteamGroupEdit
// @version      1.1
// @description  Fixes the bugged edit website of steam groups.
// @author       TrolluXe
// @match        https://steamcommunity.com/groups/*/edit
// @match        https://steamcommunity.com/groups/*/edit/profile
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

function putbuttonstyle() {
    var head, style
    head = document.getElementsByTagName('head')[0]
    if (!head) { return }
    style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `.btn_default_style > span {
    border-radius: 2px;
    display: block;
    }
    .btn_approvalgreen_white_innerfade > span {
    background: #059984;
    background: -webkit-linear-gradient( top, #059984 5%, #04693a 95%);
    background: linear-gradient( to bottom, #059984 5%, #04693a 95%);
    }
    .btn_approvalgreen_white_innerfade:not(.btn_disabled):not(:disabled):not(.btn_active):not(.active):hover > span {
    background: #07bfae;
    background: -webkit-linear-gradient( top, #07bfae 5%, #06a06d 95%);
    background: linear-gradient( to bottom, #07bfae 5%, #06a06d 95%);
    }
    .btn_red_white_innerfade > span {
    background: #990505;
    background: -webkit-linear-gradient( top, #990505 5%, #690404 95%);
    background: linear-gradient( to bottom, #990505 5%, #690404 95%);
    }
    .btn_red_white_innerfade:not(.btn_disabled):not(:disabled):not(.btn_active):not(.active):hover > span {
    background: #bf0707;
    background: -webkit-linear-gradient( top, #bf0707 5%, #a00606  95%);
    background: linear-gradient( to bottom, #bf0707 5%, #a00606 95%);
    }
    .forum_manage_actions .btn_medium {
    margin-left: 0;
    }`
    head.appendChild(style)
}

(function() {
    'use strict';
    putbuttonstyle()
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

    let og_button = document.getElementsByClassName("btn_green_white_innerfade btn_medium")[0]
    og_button.className = "btn_default_style btn_approvalgreen_white_innerfade btn_medium"

    let parent = document.getElementsByClassName("group_admin_header")[0]
    let sibling = document.getElementsByClassName("admin_avatar_dropshadow")[0]

    let save_button_div = document.createElement("div")
    save_button_div.className = "forum_manage_actions"
    save_button_div.style.top = "2.3em"
    save_button_div.style.position = "relative"

    let save_button_a = document.createElement("a")
    //save_button_a.className = "btn_grey_white_innerfade btn_medium" // grey button
    //save_button_a.className = "btn_default_style btn_red_white_innerfade btn_medium" // red button
    save_button_a.className = "btn_default_style btn_approvalgreen_white_innerfade btn_medium" // approval green button
    save_button_a.href = "javascript:validateFields();"

    let save_button_span = document.createElement("span")
    save_button_span.innerHTML = "Save Changes"

    save_button_a.appendChild(save_button_span)
    save_button_div.appendChild(save_button_a)
    parent.insertBefore(save_button_div, sibling)
})();