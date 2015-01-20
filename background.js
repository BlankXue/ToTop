//点击按钮
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toTop"}, function (response) {
        });
    });
});

//菜单按钮
function genericOnClick(info, tab) {
    chrome.tabs.sendMessage(tab.id, {action: "toTop"}, function (response) {});
}

chrome.contextMenus.create({"title": "置顶（ToToP）", "onclick": genericOnClick});
