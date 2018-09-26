function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let child = rankedLists[i].children;
    for (let j = 0, k = child.length; j < k; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML) + n;
    }
  }
}
