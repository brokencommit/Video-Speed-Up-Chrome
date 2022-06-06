chrome.action.onClicked.addListener( tab => {
    chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
    	target: { tabId: tab.id },
    	files: ['inject.js']
    });
});
