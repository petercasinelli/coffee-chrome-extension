var elms = document.getElementsByTagName("img");
console.log(elms);

var imgURL = chrome.extension.getURL("images/coffee-cup.png");

for (i = 0; i < elms.length; i++) {
	console.log("Changing element " + i);
	elms[i].src = imgURL;
}