// ==UserScript==
// @name           [kp] fix me
// @description    Remove annoying ads and ads notifications
// @author         Nemanja Cosovic
// @match          *://*.kupujemprodajem.com/*
// @namespace      https://greasyfork.org/users/380247
// @version        1.3
// ==/UserScript==

const listOfEls = [
	"#bodyTag > div[style*='bottom: 0']",
	".bnrBox31"
]

// Observer
const observerConfig = {
	attributes: false,
	childList: true,
	subtree: true,
	characterData: true,
    characterDataOldValue: false
};
const verifyChange = (mutations) => { removeAds(listOfEls) };
const targetNode = document.querySelector("#bodyTag");
const observer = new MutationObserver(verifyChange);

removeAds = (listOfEls) => {
	if (listOfEls) {
		listOfEls.forEach( el => {
			const elFound = document.querySelector(el);

			if(elFound) {
				elFound.remove();
			}
		});
	}
}

window.addEventListener('load', function() {
	removeAds(listOfEls);
	observer.observe(targetNode, observerConfig);
}, false);
