//Create 100 DOM elements with setTimeout

var elts = [];

function setup() {

  noCanvas();

  for (var i = 0; i < 1000; i++) {
    var element = makeElt(i);
    elts.push(element);

  }

  //when you click on the element, change the color
  for (var j = 0; j <elts.length; j++) {
    elts[j].mousePressed(changeColor);
  }


  function makeElt(num) {
    setTimeout(makeIt, num*100);

    function makeIt() {

      var elt = createElement('div'); //create an empty div
  
      var r = Math.floor(random(55,255));
      var g = Math.floor(random(55,255));
      var b = Math.floor(random(55,255));
      // console.log(r,g,b);


      elt.style('background','rgb(' + r + ',' + g + ',' + b + ')');
    }
    
  }

  function changeColor() {

      var r = Math.floor(random(55,255));
      var g = Math.floor(random(55,255));
      var b = Math.floor(random(55,255));
      // console.log(r,g,b);

      this.style('background','rgb(' + r + ',' + g + ',' + b + ')');

  }

}



//Then take this same structure to draw an image one pixel at a time