/**
 * 将用于 showModalDialog 的窗口选项转化为用于window.open()的选项
 * @param options
 */
function reformatOptions(options) {
    return options.replace(/dialog|px/gi, '').replace(/;/g, ',').toLocaleLowerCase();
}

function handleDialog() {
    function showModalDialog(url, obj, options) {
        options = options ? reformatOptions(options) : '';
        window.open(url, '_blank', options);
    }
    window.showModalDialog = showModalDialog;
}

window.showModalDialog === undefined && handleDialog();
