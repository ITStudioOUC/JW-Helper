document.addEventListener('DOMContentLoaded', function () {
    console.log('injecting');
    let link = document.createElement('link');
    link.href = chrome.extension.getURL('style/mainHandler.css');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
});
