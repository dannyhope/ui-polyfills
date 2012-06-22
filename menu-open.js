// Author: Remy Sharp / @rem
// Demo: http://jsbin.com/3/ideris/7/edit?javascript,live
var heading = document.querySelector('h2'),
    container = heading.parentNode,
    downon = null,
    items = [].slice.call(container.getElementsByTagName('a'));

function removeHover() {
  var i = items.length;
  while (i--) {
    items[i].className = '';
  }
}

heading.onmousedown = function (e) {
  e.preventDefault();
  var className = container.className;
  container.className = className === 'open' ? '' : 'open';
};

container.onmouseup = function (e) {
  // you should close any open dropdowns now...
  if (downon !== e.target) {
    if (e.target.nodeName === 'A') {
      if (e.target.getAttribute('target')) {
        window.open(e.target.href);
      } else {
        window.location = e.target.href;
      }
    }
  }
};

container.onmousedown = function (e) {
  downon = e.target;
};

document.documentElement.onmouseup = function (e) {
  if (e.target !== heading) {
    removeHover();
    container.className = '';
  }
}

container.onmousemove = function (e) {
  removeHover();
  if (e.target.nodeName == 'A') {
    e.target.className = 'hover';
  }
};
