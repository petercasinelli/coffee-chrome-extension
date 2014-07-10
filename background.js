chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Delegating to content_script.js for ' + tab.url);
	/*chrome.tabs.executeScript({
		code: 'document.getElements.style.backgroundColor="red"'
	});*/
	chrome.tabs.executeScript(null, {file: "content_script.js"});
});