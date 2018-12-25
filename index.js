function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
   var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
    var currentDom = document.getElementById('grand-node');

  while(true){
    var nextDom = deep.querySelector('div');
    if(!nextDom){
      break;
    }
    currentDom = nextDom;
  }
  return currentDom;
}  