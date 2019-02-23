
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

function favouriteChild(node) {
  var favouredChild = { node: null, depth: 0 };
  if (node.children.length === 0) {
    return { node: node, depth: 0 }
  }
  for (var i=0; i<node.children.length; ++i) {
    var candidateChild = favouriteChild(node.children[i]);
    if (candidateChild.depth > favouredChild.depth) {
      favouredChild.node = candidateChild.node;
      favouredChild.depth = candidateChild.depth;
    }
  }
  favouredChild.depth += 1;
  return favouredChild;
}
