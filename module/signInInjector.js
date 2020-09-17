document.addEventListener('DOMContentLoaded', function () {
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.src = chrome.extension.getURL('module/signInHandler.js');
    document.body.appendChild(script);

    let link = document.createElement('link');
    link.href = chrome.extension.getURL('style/rewriteForm.css');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
});
