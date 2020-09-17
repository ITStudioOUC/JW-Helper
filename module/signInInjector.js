document.addEventListener('DOMContentLoaded', function () {
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.src = chrome.extension.getURL('module/signInHandler.js');
    document.body.appendChild(script);
});
