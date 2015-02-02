chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.action == 'toTop') {
  	if(window.scrollY>0){
         window.scrollTo(0,0)
  	}
  }
});