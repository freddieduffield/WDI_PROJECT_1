$(init);

function init(){

  function whatYaSayin(comment){
    const newDivMessage = $('div');
    $('.message').prepend(comment);
    newDivMessage.css('font-size', '100px', 'cursor', 'pointer');
    $('.powerupBox').hide();

    $('.container').on('click', function(){
      console.log('clicked');
      // $('.character').prop('onclick',null).off('click');
      // $('.powerupBox').show();
    });
    // remove text
    // return to game board
  }
  // ITEM OBJECTS ARRAY
  const moves = [
    {
      image: 'beer.png',
      name: 'beer',
      needPiss: function(){
        // hopefully a count down
        const piss = 'Need a piss!!! move!';
        whatYaSayin(piss);
      },
      theFamousOne: function(){
        const famous = 'the famous one';
        increasePower();
        return whatYaSayin(famous);
      },
      highAsAKite: function(){
        const high = 'High as a mutha-ffin kite... ';
        increasePower();
        whatYaSayin(high);
      },
      megaPissed: function(){
        const blindo = 'Friday night... empty stomoch... blindo drunk';
        increasePower();
        whatYaSayin(blindo);
      }
    },
    {
      image: 'chicken.png',
      name: 'chicken',
      barginBucket: function(){
        const bargin = 'finger lick\' food';
        increasePower();
        whatYaSayin(bargin);
      },
      roastChicken: function(){
        const roast ='roastin\'';
        whatYaSayin(roast)
      },
      perfectCombo: function(){
        const kfc ='Eden\'s cottage .. PFC .. Chicken cottage';
        increasePower();
        whatYaSayin(kfc);
      }
    },
    {
      image: 'fire.png',
      name: 'fire',
      burntMushroom: function(){
        const grees = 'burnt mushroom greasy spoon!!';
        whatYaSayin(grees);
      },
      toxicFire: function(){
        const toxic = 'toxic fire!!';
        whatYaSayin(toxic);
      },
      gettingHotInEre: function(){
        const get = 'Its getting hot in ere ! so take off all your clothes';
        increasePower();
        whatYaSayin(get);
      }
    },
    {
      image: 'mushroom.png',
      name: 'mushroom',
      fertileMushroom: function() {
        const fertile = 'Fertile mushroom';
        increasePower();
        whatYaSayin(fertile);
      },
      chickenMushroomPie: function () {
        const pukka = 'chicken and mushroom pie .. pukka';
        increasePower();
        whatYaSayin();
      },
      magicMushroom: function(){
        const magic = 'trippin\' balls';
        increasePower();
        whatYaSayin(magic);
      },
      festival: function(){
        const shroom = 'shroom hop cocktail';
        increasePower();
        whatYaSayin(shroom);
      }
    },
    {
      image: 'syringe.png',
      name: 'syringe',
      posionMushroom: function(){
        const posion ='gastrointestinal discomfort to death';
        whatYaSayin(posion);
      },
      posionWater: function(){
        const spike ='spiking the water supply';
        whatYaSayin(spike);
      },
      hormoneChicken: function(){
        const mone ='tasty but deadly';
        whatYaSayin(mone);
      },
      overdose: function(){
        const od ='jim morrison';
        whatYaSayin(od);
        increasePower();
      }
    },
    {
      image: 'water.png',
      name: 'water',
      extinguish: function(){
        const waterworks = 'lights out children';
        whatYaSayin(waterworks);
      },
      soggyChicken: function(){
        const soggy = 'soggy chicke - fowl!!';
        whatYaSayin(soggy);
      },
      lifeOLife: function(){
        const life = 'life o life o liiiife';
        whatYaSayin(life);
        increasePower();
      }
    }
  ];



  // INCREASE POWER BAR function
  const hBar      = $('.powerBar');
  const bar       = $('.bar');
  const manPower  = $('#humanPower');
  const cpuPower  = $('#cpuPower');

  function increasePower(){
    var total = hBar.data('total');
    var value = hBar.data('value');
    var power = 10;
    var newValue = +value + +power  ;
    var barWidth = (newValue / total) * 100;
    hBar.data('value', newValue);
    setTimeout(function(){
      manPower.css('width', barWidth + '%');
    }, 500);
    console.log(newValue, power, barWidth);
    if(barWidth === 100){
      $('.character').prepend('You win muthafucker');
      newDivMessage.css('font-size', '100px');
    }
  }

  function increasePower(){
    var total = hBar.data('total');
    var value = hBar.data('value');
    var power = 10;
    var newValue = +value + +power  ;
    var barWidth = (newValue / total) * 100;
    hBar.data('value', newValue);
    setTimeout(function(){
      manPower.css('width', barWidth + '%');
    }, 500);
    console.log(newValue, power, barWidth);
    if(barWidth === 100){
      $('.character').prepend('You win muthafucker');
      newDivMessage.css('font-size', '100px');
    }
  }

  // START BUTTON
  function createStartButton(){
    const $input = $('<input type="button" value="START" />');
    $input.appendTo($('.endgame'));
    $input.on('click', function(){
      itemDistributor();
      $input.remove();
    });
  }
  createStartButton();
  // RANDOM ITEM DISTRIBUTOR
  function itemDistributor(){
    $.each($('.powerupBox'), function(index, element) {
      const randomMove = moves[Math.floor(Math.random()* moves.length)];
      $(element).css('background', `url(img/${randomMove.image})`).attr('id', `${randomMove.name}`);
    });
  }
  // LISTENING EVENT
  $('.powerupBox.playa').on('click', function(e) {
    const $enemyArray = $('.enemyArray').toArray();
    const cpuMove = $enemyArray[Math.floor(Math.random()* $enemyArray.length)];
    $('.character2').append(cpuMove).clone();
    $('.character').append(e.target).clone();

    // COMPARISION IF ELSE STATEMENT
    const humanSelection = $('div.character > div')[0].id;
    const cpuSelection = $('div.character2 > div')[0].id;
    if (humanSelection === 'chicken'){
      switch (cpuSelection) {
        case 'chicken':
        moves[1].barginBucket();
        break;
        case 'beer':
        moves[1].perfectCombo();
        break;
        case 'mushroom':
        moves[3].chickenMushroomPie();
        break;
        case 'syringe':
        moves[4].hormoneChicken();
        break;
        case 'water':
        moves[5].soggyChicken();
      }
    } else if (humanSelection === 'beer') {
      switch (cpuSelection) {
        case 'water':
        moves[0].needPiss();
        break;
        case 'mushroom':
        moves[3].festival();
        break;
        case 'syringe':
        moves[0].highAsAKite();
        break;
        case 'beer':
        moves[0].theFamousOne();
        break;
        case 'fire':
        moves[0].megaPissed();
      }
    }else if (humanSelection === 'fire'){
      switch (cpuSelection) {
        case 'water':
        moves[5].extinguish();
        break;
        case 'mushroom':
        moves[2].burntMushroom();
        break;
        case 'syringe':
        moves[2].toxicFire();
        break;
        case 'chicken':
        moves[1].roastChicken();
        break;
        case 'fire':
        moves[2].gettingHotInEre();
      }
    } else if (humanSelection === 'mushroom'){
      switch (cpuSelection) {
        case 'water':
        moves[3].fertileMushroom();
        break;
        case 'mushroom':
        moves[3].magicMushroom();
        break;
        case 'syringe':
        moves[4].posionMushroom();
      }
    } else if (humanSelection === 'water') {
      switch (cpuSelection){
        case 'syringe':
        moves[4].posionWater();
        break;
        case 'water':
        moves[5].lifeOLife();
      }
    } else {
      moves[4].overdose();
    }



  });
}

//


// var cardElement = document.createElement('img');
// cardElement.setAttribute('src', 'images/back.png');
// cardElement.setAttribute('data-id', i);
//
// cardElement.addEventListener('click', flipCard);
// document.getElementById('game-board').appendChild(cardElement);






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

// ;
//
// const fire = ['img/fire.png']
// burntMushroom: function(){
//   // some kinda thing that effects the power bar
//   console.log('disgusting!!');
// },
// toxicFire: function(){
//   // some kinda thing that effects the power bar
//   console.log('Gas');
// },
// gettingHotInEre: function(){
//   //   // something that fills both powerbars
//   console.log('so take off all your clothes');
// }
// ;
//
// const water = ['img/water.png']

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

// ;
//
// // const syringe = ['img/syringe.png']
//

// ;
