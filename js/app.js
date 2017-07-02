console.log('hello fred');

// An object containing items
// a random generator of objects
// a click event generates a random selector of computers object
// the 2 objects in play are evaluated
// the evaluation effects the life and power bars
// the game ends when one player life bar(-3) is empty or the other players power bar(3) is full

const items = ['Chicken', 'Mushroom', 'Beer', 'syringe', 'fire', 'Water' ];
//Start button
// function createStartButton (i) {
// // document.newButton = $('<button/>');
// // return this.newButton;
// // on click run itemDistributor fuction
// // for both computer and human
// }

$(init);
function init(){
  $('.powerupBox').each(itemDistributor());
}
//item distributor
// a random generator of objects
function itemDistributor(){
  const randomSelectionOfItems = items[Math.floor(Math.random()*items.length)];
  $('.powerupBox').append(randomSelectionOfItems);
  console.log(randomSelectionOfItems);
}


// $('.powerupBox').on('click', function (){});
