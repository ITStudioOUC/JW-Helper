const map = {
    github: 'https://github.com/ITStudioOUC/JW-Helper',
    it: 'http://www.itstudio.club'
}

function clickHandler(e) {
    // e.preventDefault();
    // e.stopPropagation();
    let t = e.target;

}
let l = document.getElementsByTagName('a');
for(let i in l) {
    if (l.hasOwnProperty(i)) {
        console.log(l[i]);
        l[i].onclick = ((url) => {
            let u = url;
            console.log(u);
            return () => {
                chrome.tabs.create({url: u});
            }
        })(map[l[i].id]);
    }
}

window.onload = function () {
    document.getElementsByClassName('icon_box')[0].className = document.getElementsByClassName('icon_box')[0].className + ' finish';
    setTimeout(function () {
        document.getElementsByClassName('icon_box')[0].className = document.getElementsByClassName('icon_box')[0].className + ' done' ;
    }, 500)
    setTimeout(function () {
        document.getElementsByClassName('link')[0].className = document.getElementsByClassName('link')[0].className + ' link_finish';
        document.getElementsByClassName('name_box')[0].className = document.getElementsByClassName('name_box')[0].className + ' box_finish';
    }, 700);
}
