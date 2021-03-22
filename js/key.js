import { channelData } from "./script.js";

import { init } from "./script.js";

const key = document.getElementById("key");
let checks = "";
export const doKey = function () {
  let html = "";
  channelData.forEach(function (el, i) {
    html =
      html +
      `
    <div class='key-element  mr-1rem'>
        <div class='key-square ' style='background-color:${channelData[i].color}'></div>
        <div class='key-logo'>
            <label class=''>    
                <img src='svglogos/${channelData[i].logo}' alt='${channelData[i].cadenaName}' class=' img-check'/>
                <input type='checkbox' name='${channelData[i].cadenaName}' id='${i}' value='val1' class='logo-check hidden' autocomplete='off'  checked/>
            </label>
        </div>
    </div>`;
  });
  key.innerHTML = html;
  checks = document.querySelectorAll(".logo-check");
  console.log(checks);
  setUpChecks();
};

function setUpChecks() {
  checks.forEach((el) => el.addEventListener("click", onChangeCheck));
}
function onChangeCheck(e) {
  let keyElement = e.target.closest(".key-element");

  if (e.target.checked) {
    console.log("checked");
    channelData[e.target.id].alpha = true;
    keyElement.classList.remove("fade");

    init();
  }
  if (!e.target.checked) {
    console.log("unchecked");
    channelData[e.target.id].alpha = false;
    keyElement.classList.add("fade");

    init();
  }
}
