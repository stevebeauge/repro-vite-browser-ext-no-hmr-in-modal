import browser from "webextension-polyfill";

const addButton = document.createElement("input");
addButton.setAttribute("type", "button");
addButton.setAttribute("value", "Open modal");
addButton.addEventListener("click", () => {
    // open a popup windows with an iframe
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.zIndex = "9999";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    document.body.appendChild(overlay);

    const iframe = document.createElement("iframe");
    iframe.width = "800px";
    iframe.height = "600px";
    iframe.style.margin = "auto";
    const popup = browser.runtime.getURL('src/modal.html');
    iframe.setAttribute("src", popup);
    overlay.appendChild(iframe);

});
document.body.insertBefore(addButton, document.body.firstChild);
