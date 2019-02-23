
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var a = document.querySelectorAll(".ranked-list li");
  for (var i = 0; i<a.length; ++i) {
    var x = parseInt(a[i].innerHTML, 10);
    a[i].innerHTML = x + n;
  }
}

function deepestChild() {
  var n = document.querySelector("div#grand-node");

  //var p = n;

  // across
  //while (n.children.length) {
  //  n = n.children
  //}
  while(1) {
    if (n) console.error("*");
    if (n.children.length === 0)  break;
    n = n.children[0];
  }
}
