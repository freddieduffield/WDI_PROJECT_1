
const moves = [
  {
    image: 'beer.png'
  },
  {
    image: 'chicken.png'
  },
  {
    image: 'fire.png'
  },
  {
    image: 'mushroom.png'
  },
  {
    image: 'syringe.png'
  },
  {
    image: 'water.png'
  }
];

$(init);
function init(){
  function createStartButton(){
    const $input = $('<input type="button" value="START" />');
    $input.appendTo($('.endgame'));
    $input.on('click', function(){
      itemDistributor();
      $input.remove();
    });
  }
  createStartButton();



  function itemDistributor(){
    $.each($('.powerupBox'), function(index, element) {
      const randomMove = moves[Math.floor(Math.random()* moves.length)];
      $(element).css('background', `url(img/${randomMove.image})`);
    });
  }
  $('.powerupBox').on('click', function() {
    console.log($(this).attr('set id'));
  });
}









  // for (var i = 0; i < $('.powerupBox').length; i++) {
  //   // const randomSelectionOfItems =  items[Math.floor(Math.random()*items.length)];
  //   // console.log(moves[i].image);
  //   $('.powerupBox').css('background-image', `../img/${moves[i].image}`);
  // }
  // const randomSelectionOfItems = items[Math.floor(Math.random()*items.length)];
  // console.log(randomSelectionOfItems);
  // $('.powerupBox').append(randomSelectionOfItems);
  // console.log(randomSelectionOfItems);



// $('.powerupBox').on('click', function (){});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// An object containing items
// a random generator of objects
// a click event generates a random selector of computers object
// the 2 objects in play are evaluated
// the evaluation effects the life and power bars
// the game ends when one player life bar(-3) is empty or the other players power bar(3) is full

// winConditionsOnePlayer
// fireWins
// if (mushroom vs fire )
// return burnt mushroom
//
// if (fire 5 vs syringe)
// return toxic fire
//
// // syringeWins
// if (syringe 10 vs mushroom)
// return Posion mushroom
//
// if (syringe vs water)
// return posioned water
//
// if (syringe vs chicken)
// return hormone chicken
//
// // mushroomWins
// if (mushroom vs water)
// return fertile mushroom
//
// if (beer vs mushrooom)
// return bad combo
//
// // waterWins
// if (fire vs water)
// return extinguish
//
// if (water vs chicken)
// return soggy chicken
//
// // chickenWins
// if (fire vs chicken)
// return roast chicken
//
// if (chicken vs beer)
// return perfect combo
//
//
// // winConditionsBoth
// if (chicken vs mushroom)
// return chicken and mushroom pie
// each player gains a life
//
// if (fire === fire)
// return gettingHotInEre
// power of attacks double up
//
// if (water === water)
// return life 'o' life 'o' life
// mega power bar up for both people
//
// if (beer vs Syringe)
// return High as a Kite
//
// // looseConditionsBoth
// if (mushroom === mushroom)
// return Magic Mushroom
// remove one life from both computer and human
//
// if (beer vs fire)
// return mega pissed
// power up both player but die the next round
//
// if (water vs beer)
// return need a piss
// complete piss 10 second interval timer
//
// if (chicken === chicken)
// return Bargin Bucket
// both loose

//


// // item Objects
// const mushroom = ['img/mushroom.png']
//   // fertileMushroom: function() {
//   //   console.log('Fertile mushroom');
//   // },
//   // chickenMushroomPie: function () {
//   //   console.log('yummy');
//   // },
//   // magicMushroom: function(){
//   //   console.log('trippin\' balls');
//   // }
// ;
//
// const fire = ['img/fire.png']
//   // burntMushroom: function(){
//   //   // some kinda thing that effects the power bar
//   //   console.log('disgusting!!');
//   // },
//   // toxicFire: function(){
//   //   // some kinda thing that effects the power bar
//   //   console.log('Gas');
//   // },
//   // gettingHotInEre: function(){
//   //   //   // something that fills both powerbars
//   //   console.log('so take off all your clothes');
//   // }
// ;
//
// const water = ['img/water.png']
//   // extinguish: function(){
//   //   console.log('lights out');
//   // },
//   // soggyChicken: function(){
//   //   console.log('fowl!!');
//   // },
//   // lifeOLife: function(){
//   //   console.log('too much chicken');
//   // }
// ;
// const chicken = ['img/chicken.png']
//   // roastChicken: function(){
//   //   console.log('roastin\'');
//   // },
//   // perfectCombo: function(){
//   //   console.log('Eden\'s cottage');
//   // },
//   // barginBucket: function(){
//   //   console.log('too much chicken');
//   // }
// ;
//
// const beer = ['img/beer.png']
//   // needPiss: function(){},
//   // theFamousOne: function(){},
//   // highAsAKite: function(){}
// ;
//
// // const syringe = ['img/syringe.png']
//
//   // posionMushroom: function(){},
//   // posionWater: function(){},
//   // hormoneChicken: function(){}
// ;
