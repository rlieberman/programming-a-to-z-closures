var divs = []; //array of divs

function setup() {

  noCanvas();

  for (var i = 0; i<=10; i++){
    var d = createDiv('i am div #' + i);
    d.style('font-size', '40px');
    divs.push(d);
  }

  // for (var j = 0; j<divs.length; j++){
  //   highlightIt(divs[j], j);
  //   //for every div in the array, highlight the div
  // }

  for (var j = 0; j<divs.length; j++){
    divs[j].mousePressed(highlight);
    //for every div in the array, highlight the div
  }

}

  function highlight(){
    this.style('font-family', 'Arial');
    this.style('')
  }
// function highlightIt (div, num) {
//   setTimeout(highlight, num*1000);
//   function highlight() {
//     div.style('background', 'red');
//   }
// }