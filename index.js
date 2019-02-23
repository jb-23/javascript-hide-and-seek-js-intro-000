
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

  return favouriteChild(n);
}

function favouriteChild(n) {
  if (n.children.length === 0) {
    return { node: n, depth: 0 }
  }
  var favouredChild = { node: 0, depth: 0 };
  for (var i=0; i<n.children.length; ++i) {
    var candidateChild = favouriteChild(n.children[i]);
    if (candidateChild.depth > favouredChild.depth) {
      favouredChild.node = candidateChild.node;
      favouredChild.depth = candidateChild.depth;
    }
  }
  favouredChild.depth += 1;
  return favouredChild;
}
