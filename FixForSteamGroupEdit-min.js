// ==UserScript==
// @name         Fix Steam Group Edit
// @namespace    FixSteamGroupEdit
// @version      1.0
// @description  Fixes the bugged edit website of steam groups.
// @author       TrolluXe
// @match        https://steamcommunity.com/groups/*/edit
// @match        https://steamcommunity.com/groups/*/edit/profile
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// ==/UserScript==

!function(){"use strict";let e=document.getElementsByClassName("group_content group_summary")[0];for(var t=1;t<=3;t++){let l="weblink_"+t+"_title",n="weblink_"+t+"_url";if(t>1){let t=document.createElement("br");e.appendChild(t)}let a=document.createElement("div");a.className="formRow",a.margin="0 0 20px 0 !important";let d=document.createElement("div");d.className="formRowFields";let m=document.createElement("div");m.className="formRowTitle",m.textContent="Website Title";let i=document.createElement("div");i.className="gray_bevel for_text_input fullwidth",document.createElement("div").className="gray_bevel for_text_input fullwidth";let c=document.createElement("input");c.className="dynInput",c.type="text",c.name="["+t+"] Title",c.id=l,i.appendChild(c),d.appendChild(i),a.appendChild(d),a.appendChild(m),e.appendChild(a);let o=document.createElement("div");o.className="formRow",o.margin="0 0 20px 0 !important";let p=document.createElement("div");p.className="formRowFields";let r=document.createElement("div");r.className="formRowTitle",r.textContent="Website Link";let s=document.createElement("div");s.className="gray_bevel for_text_input fullwidth";let u=document.createElement("input");u.className="dynInput",u.type="text",u.name="["+t+"] Url",u.id=n,s.appendChild(u),p.appendChild(s),o.appendChild(p),o.appendChild(r),e.appendChild(o)}}();
