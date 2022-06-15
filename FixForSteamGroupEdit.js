// ==UserScript==
// @name         Fix Steam Group Edit
// @namespace    FixSteamGroupEdit
// @version      1.2
// @description  Fixes the bugged edit website of steam groups.
// @author       TrolluXe
// @match        https://steamcommunity.com/groups/*/edit
// @match        https://steamcommunity.com/groups/*/edit/profile
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

function putButtonStyle() {
    var head, style
    head = document.getElementsByTagName('head')[0]
    if (!head) { return }
    style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `
    :root {
    --FSGE_aquamarine: #059984;
    --FSGE_green: #06a06d;
    --FSGE_lightgreen: #07BFAE;
    --FSGE_darkgreen: #04693A;
    --FSGE_lightred: #BF0707;
    --FSGE_darkred: #990505;
    --FSGE_darkerred: #690404;
    }
    .btn_default_style > span { border-radius: 2px; display: block; }
    .btn_approvalgreen_white_innerfade > span { background:var(--FSGE_aquamarine); background: -webkit-linear-gradient( top,var(--FSGE_aquamarine) 5%,var(--FSGE_darkgreen) 95%); background: linear-gradient( to bottom,var(--FSGE_aquamarine) 5%,var(--FSGE_darkgreen) 95%); }
    .btn_approvalgreen_white_innerfade:not(.btn_disabled):not(:disabled):not(.btn_active):not(.active):hover > span { background:var(--FSGE_lightgreen); background: -webkit-linear-gradient( top,var(--FSGE_lightgreen) 5%, var(--FSGE_green) 95%); background: linear-gradient( to bottom,var(--FSGE_lightgreen) 5%, var(--FSGE_green) 95%); }
    .btn_red_white_innerfade > span { background:var(--FSGE_darkred); background: -webkit-linear-gradient( top,var(--FSGE_darkred) 5%,var(--FSGE_darkerred) 95%); background: linear-gradient( to bottom,var(--FSGE_darkred) 5%,var(--FSGE_darkerred) 95%); }
    .btn_red_white_innerfade:not(.btn_disabled):not(:disabled):not(.btn_active):not(.active):hover > span { background:var(--FSGE_lightred); background: -webkit-linear-gradient( top,var(--FSGE_lightred) 5%, #a00606  95%); background: linear-gradient( to bottom,var(--FSGE_lightred) 5%, #a00606 95%); }
    .forum_manage_actions .btn_medium { margin-left: 0; }`
    head.appendChild(style)
}

function addUrlFields() {
    let group_content = document.getElementsByClassName("group_content group_summary")[0]

    for(var i = 1; i <= 3; i++) {
        let title_i = 'weblink_' + i + '_title'
        let url_i = 'weblink_' + i + '_url'

        if(i > 1) {
            let x00 = document.createElement("br")
            group_content.appendChild(x00)
        }

        let title_row = document.createElement("div")
        title_row.className = "formRow"
        title_row.margin = "0 0 20px 0 !important"

        let title_parent = document.createElement("div")
        title_parent.className = "formRowFields"

        let title_label = document.createElement("div")
        title_label.className = "formRowTitle"
        title_label.textContent = "Website Title"

        let title_input_parent = document.createElement("div")
        title_input_parent.className = "gray_bevel for_text_input fullwidth"

        let title_input = document.createElement("input")
        title_input.className = "dynInput"
        title_input.type = "text"
        title_input.name = "[" + i + "] Title"
        title_input.id = title_i

        title_input_parent.appendChild(title_input)
        title_parent.appendChild(title_input_parent)
        title_row.appendChild(title_parent)
        title_row.appendChild(title_label)
        group_content.appendChild(title_row)

        //CC GG FF CC GG FF CC GG FF CC GG FF CC GG FF
        // CC GG FF CC GG FF CC GG FF CC GG FF CC GG FF
        //CC GG FF CC GG FF CC GG FF CC GG FF CC GG FF

        let url_row = document.createElement("div")
        url_row.className = "formRow"
        url_row.margin = "0 0 20px 0 !important"

        let url_parent = document.createElement("div")
        url_parent.className = "formRowFields"

        let url_label = document.createElement("div")
        url_label.className = "formRowTitle"
        url_label.textContent = "Website Link"

        let url_input_parent = document.createElement("div")
        url_input_parent.className = "gray_bevel for_text_input fullwidth"

        let url_input = document.createElement("input")
        url_input.className = "dynInput"
        url_input.type = "text"
        url_input.name = "[" + i + "] Url"
        url_input.id = url_i

        url_input_parent.appendChild(url_input)
        url_parent.appendChild(url_input_parent)
        url_row.appendChild(url_parent)
        url_row.appendChild(url_label)
        group_content.appendChild(url_row)
    }
}

function addSaveButton() {
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
}

function addGroupID64(id) {
    let ID_row = document.getElementsByClassName("formRowFields")[0]
    let tmp = ID_row.textContent + " | ID64: " + id
    ID_row.textContent = tmp
}

(function() {
    'use strict';
    let group_name = document.getElementsByClassName("groupadmin_header_name")[0].textContent
    let group_id = g_strBaseEditURL.replace("https://steamcommunity.com/actions/EditProcess?gId=", "")
    let log_string = ("Editing " + group_name + " (" + group_id + ")").replace("  ", " ").replace("( ", "(").replace(") ", ")")
    console.log(log_string)

    putButtonStyle()
    addUrlFields()
    addSaveButton()
    addGroupID64(group_id)
})();