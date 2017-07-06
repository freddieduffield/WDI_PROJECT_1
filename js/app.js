$(init);

let $startGame              = null;
let $powerUpContainers      = null;
let $playerMoves            = null;
let $computerMoves          = null;
let $playerMoveContainer    = null;
let $computerMoveContainer  = null;
let $displayOutcomeMessage  = null;
let $hBar                   = null;
let $effectPlayerPowerBar   = null;
let $effectComputerPowerBar = null;
let $nextTurnButton         = null;
let playerBarWidth          = 20;
let cpuBarWidth             = 20;
let computerLife            = 20;
let playerLife              = 20;
let counter                 = 0;


function init() {
  $startGame             = $('.start-game');
  $powerUpContainers     = $('.powerupBox');
  $playerMoves           = $('.playa');
  $computerMoves         = $('.enemyArray');
  $playerMoveContainer   = $('#character1');
  $computerMoveContainer = $('#character2');
  $displayOutcomeMessage = $('div');
  $hBar                  = $('.powerBar');
  $effectPlayerPowerBar  = $('#humanPower');
  $effectComputerPowerBar= $('#cpuPower');
  $nextTurnButton        = $('.nextTurn');




  $startGame.on('click', play);
}


function play() {
  distributeItems();
  $startGame.hide();
}

function distributeItems() {
  $.each($powerUpContainers, (index, element) => {
    const randomMove = moves[Math.floor(Math.random()* moves.length)];
    $(element).css('background', `url(img/${randomMove.image})`).attr('id', `${randomMove.name}`).attr('data-image', `${randomMove.image}`);
  });

  handleClickEvents();
}

function handleClickEvents() {
  $playerMoves.one('click', makeMoves);
}

function makeMoves() {
  const playerMove   = $(this).clone();
  const randomComputerMove = $computerMoves[Math.floor(Math.random()* $computerMoves.length)];
  const computerMove = $(randomComputerMove).clone();
  counter = counter +1;
  displayMoves(playerMove, computerMove);
  hideUsedMoves($(this), $(randomComputerMove));
  compareMoves(playerMove, computerMove);
  checkForWin();

}

function displayMoves(playerMove, computerMove) {
  playerMove.appendTo('#character1');
  computerMove.appendTo('#character2');

}

function hideUsedMoves(player, computer) {
  player.css('background', 'none');
  computer.css('background', 'none');
}

function compareMoves(player, computer) {
  const playerMove   = player.attr('id');
  const computerMove = computer.attr('id');

  if (playerMove === 'chicken'){
    switch (computerMove) {
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
        break;
      default:
        loser();
    }
  } else if (playerMove === 'beer') {
    switch (computerMove) {
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
        break;
      default:
        loser();
    }
  }else if (playerMove === 'fire'){
    switch (computerMove) {
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
      break;
      default:
      loser();
    }
  } else if (playerMove === 'mushroom'){
    switch (computerMove) {
      case 'water':
      moves[3].fertileMushroom();
      break;
      case 'mushroom':
      moves[3].magicMushroom();
      break;
      case 'syringe':
      moves[4].posionMushroom();
      break;
      case 'fire':
      moves[2].burntMushroom();
      break;
      case 'beer':
      moves[3].festival();
      break;
      default:
      loser();
    }
  } else if (playerMove === 'water') {
    switch (computerMove){
      case 'syringe':
      moves[4].posionWater();
      break;
      case 'water':
      moves[5].lifeOLife();
      break;
      case 'chicken':
      moves[5].soggyChicken();
      break;
      case 'fire':
      moves[5].extinguish();
      break;
      default:
      loser();
    }
  } else if (playerMove === 'syringe'){
    switch (computerMove) {
      case 'water':
        moves[4].posionWater();
        break;
      case 'mushroom':
        moves[4].posionMushroom();
        break;
      case 'syringe':
        moves[4].overdose();
        break;
      case 'fire':
        moves[2].toxicFire();
        break;
      case 'chicken':
        moves[4].hormoneChicken();
        break;
      default:
        loser();
    }
  } else {
    moves[4].overdose();
  }
}

function displayMessage(comment) {
  $('.message').prepend(comment);
  $displayOutcomeMessage.css({
    'font-size': '70px'
    // 'pointer': 'cursor'
  });
  $computerMoveContainer.css('background', 'none');
}

function healthBar (playerLife, computerLife){
  const total = $hBar.data('total');
  const value = $hBar.data('value');
  const newCpuValue    = value + computerLife;
  const newPlayerValue = value + playerLife;
  playerBarWidth = (newPlayerValue / total) * 100;
  cpuBarWidth    = (newCpuValue / total) * 100;
  $hBar.data('value', newPlayerValue, newCpuValue);
  setTimeout(function(){
    $effectPlayerPowerBar.css('width', playerBarWidth + '%');
    $effectComputerPowerBar.css('width', cpuBarWidth + '%');
  }, 500);
  checkForWin(cpuBarWidth, playerBarWidth);
}



function checkForWin(cpuBarWidth, playerBarWidth) {
  if (playerBarWidth >= 100 || cpuBarWidth >= 100) {
    $('.endgamemessage').text('You Win muthafucker');
    console.log('win');
  } else if (playerBarWidth <= 0 || cpuBarWidth <= 0){
    $('.endgamemessage').text('lost ya edge');
    console.log('loose');
  }else{
    $('.endgamemessage').text('onwards and upwards!');
    console.log('keep going');
    nextTurn();
  }
}

function nextTurn(){
  $nextTurnButton.removeClass('hidden');
  $nextTurnButton.on('click', resetPlayZone);
}

function resetPlayZone(){
  $('.message').text('');
  $('.endgamemessage').text('');
  $('div.character').remove();
  $computerMoveContainer.empty();
  $('<div>', { id: 'character1', 'class': 'character'}).appendTo('.playerOne');
  $nextTurnButton.addClass('hidden');
  repopulatePopulatePowerups();
}



function repopulatePopulatePowerups(){
  if (counter === counter / 4 ){
    $startGame.show();
    $startGame.text('repopulate don\'t playa hate');
  }
}



function loser(){
    const newDivMessage = $('div');
    $('.message').empty();
    $('.message').prepend('YOU NEED TO BE CAREFUL');
    newDivMessage.css({
      'font-size': '70px',
      'pointer': 'cursor'});
    healthBar(-20, 0);
}



  const moves = [
  {
    name: 'beer',
    numberInArray: 0,
    image: 'beer.png',
    needPiss: function(){
      // hopefully a count down
      const piss = 'Need a piss!!! move!';
      displayMessage(piss);
      healthBar(-10, -10);
    },
    theFamousOne: function(){
      const famous = 'the famous one';
      displayMessage(famous);
      healthBar(10, -10);
      // decreasePowerCpu();
      // increasePower();
    },
    highAsAKite: function(){
      const high = 'High as a mutha-ffin kite... ';
      displayMessage(high);
      healthBar(10, -10);
      // decreasePowerCpu();
      // increasePower();
    },
    megaPissed: function(){
      const blindo = 'Friday night... empty stomoch... blindo drunk';
      displayMessage(blindo);
      healthBar(-10, -10);
      // decreasePowerCpu();
      // increasePower();
    }
  },
  {
    name: 'chicken',
    numberInArray: 1,
    image: 'chicken.png',
    barginBucket: function(){
      const bargin = 'finger lick\' food';
      displayMessage(bargin);

      // decreasePowerCpu();
      // increasePower();
    },
    roastChicken: function(){
      const roast ='roastin\'';
      displayMessage(roast);
      // decreasePower();
      // increasePowerCpu();
    },
    perfectCombo: function(){
      const kfc ='Eden\'s cottage .. PFC .. Chicken cottage';
      displayMessage(kfc);
      // increasePower();
      // increasePowerCpu();
    }
  },
  {
    name: 'fire',
    numberInArray: 2,
    image: 'fire.png',
    burntMushroom: function(){
      const grees = 'burnt mushroom greasy spoon!!';
      displayMessage(grees);
      // decreasePower();
      // increasePowerCpu();
    },
    toxicFire: function(){
      const toxic = 'toxic fire!!';
      displayMessage(toxic);
      // decreasePower();
      // increasePowerCpu();
    },
    gettingHotInEre: function(){
      const get = 'Its getting hot in ere ! so take off all your clothes';
      displayMessage(get);
      // increasePower();
    }
  },
  {
    name: 'mushroom',
    numberInArray: 3,
    image: 'mushroom.png',
    fertileMushroom: function() {
      const fertile = 'Fertile mushroom';
      displayMessage(fertile);
      healthBar(15, 10);
      // increasePower();
    },
    chickenMushroomPie: function () {
      const pukka = 'chicken and mushroom pie .. pukka';
      displayMessage(pukka);
      healthBar(15, -5);
      // increasePower();
      // decreasePowerCpu();
    },
    magicMushroom: function(){
      const magic = 'trippin\' balls';
      displayMessage(magic);
      healthBar(30, 30);
      // increasePowerCpu();
      // increasePower();
    },
    festival: function(){
      const shroom = 'shroom hop cocktail';
      displayMessage(shroom);
      healthBar(15, 15);
      // increasePower();
      // increasePowerCpu();
    }
  },
  {
    name: 'syringe',
    numberInArray: 4,
    image: 'syringe.png',

    posionMushroom: function(){
      const posion ='gastrointestinal discomfort to death';
      displayMessage(posion);
      healthBar(-10, 10);
      // decreasePower();
      // increasePowerCpu();
    },
    posionWater: function(){
      const spike ='spiking the water supply';
      displayMessage(spike);
      healthBar(-15, -10);
      // decreasePower();
      // increasePowerCpu();
    },
    hormoneChicken: function(){
      const mone ='tasty but deadly';
      displayMessage(mone);
      healthBar(-10, 10);
      // decreasePower();
      // increasePowerCpu();
    },
    overdose: function(){
      const od ='jim morrison';
      displayMessage(od);
      healthBar(30, 30);
      // increasePower();
      // decreasePowerCpu();
    }
  },
  {
    name: 'water',
    numberInArray: 5,
    image: 'water.png',
    extinguish: function(){
      const waterworks = 'lights out children';
      displayMessage(waterworks);
      healthBar(-15, 0);
      // decreasePower();
      // increasePowerCpu();
    },
    soggyChicken: function(){
      const soggy = 'soggy chicke - fowl!!';
      displayMessage(soggy);
      healthBar(-20, 10);
      // decreasePower();
      // decreasePowerCpu();
    },
    lifeOLife: function(){
      const life = 'life o life o liiiife';
      displayMessage(life);
      healthBar(100, 100);
      // increasePower();
      // increasePowerCpu();
    }
  }
];
