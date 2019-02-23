
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var a = document.querySelectorAll(".ranked-list li");
  a.foreach(e => {
    var x = parseInt(e.innerHTML, 10);
    e.innerHTML = x + n;
  });
}

function deepestChild() {
  var n = document.querySelector("div #grand-node");
  //while(1) {
  //  if (n.children.length === 0)  break;
  //}
}
