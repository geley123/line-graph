import { channelData } from "./script.js";

const key = document.getElementById("key");
export const doKey = function () {
  let html = "";
  channelData.forEach(function (el, i) {
    html =
      html +
      `
    <div class='key-element  mr-1rem'>
    <div class='key-square ' style='background-color:${channelData[i].color}'></div>
    <div class='key-logo'><img src='svglogos/${channelData[i].logo}' /></div>
    </div>`;
  });
  key.innerHTML = html;
};
