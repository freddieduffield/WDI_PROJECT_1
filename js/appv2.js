$(init);

function init(){
  let counter = 0;


  const newDivMessage = $('div');
  ////////////////////////////////////////////////////////////////////////
  // RESET BUTTON
  function createResetButton(){
    const $input = $('<input type="button" class="resetButton" value="RESET"/>');
    $input.appendTo($('.resetContainer'));
    $input.on('click', function(){
      $('div.character,div.character2').remove();
      $('<div>', { id: 'character1', 'class': 'character'}).appendTo('.playerOne');
      $('<div>', { id: 'character2', 'class': 'character2'}).appendTo('.cpuPlayer');

      // $('<div>', {'class': 'powerupBox playa'}).appendTo('.powerups');
      if ($('.powerups').children().length === 0 ) {

        for (var i = 0; i  < 4; i++) {
          $('<div>', {'class': 'powerupBox'}).appendTo('.powerups');
        }
        $('div.left > div').addClass('playa');
        $('div.right > div').addClass('enemyArray');
        itemDistributor();
        clickPlay();
        bigBoi();
      }
      $('.message').empty();
      console.log(moves);
      bigBoi();
      $input.remove();
      counter+1;
      console.log(counter + 'counter');
    });
  }


  //////////////////////////////////////////////////////////////////////////

  function whatYaSayin(comment){
    $('.message').prepend(comment);
    newDivMessage.css({
      'font-size': '70px',
      'pointer': 'cursor'
    });
    createResetButton();
    $('.container').on('click', function(){
      console.log('clicked');
    });
  }

  //////////////////////////////////////////////////////////////////////////
  // ITEM OBJECTS ARRAY
  const moves = [
    {
      image: 'beer.png',
      name: 'beer',
      needPiss: function(){
        // hopefully a count down
        const piss = 'Need a piss!!! move!';
        whatYaSayin(piss);
        decreasePower();
        increasePowerCpu();
      },
      theFamousOne: function(){
        const famous = 'the famous one';
        increasePower();
        whatYaSayin(famous);
        decreasePowerCpu();
      },
      highAsAKite: function(){
        const high = 'High as a mutha-ffin kite... ';
        increasePower();
        whatYaSayin(high);
        decreasePowerCpu();
      },
      megaPissed: function(){
        const blindo = 'Friday night... empty stomoch... blindo drunk';
        increasePower();
        whatYaSayin(blindo);
        decreasePowerCpu();
      }
    },
    {
      image: 'chicken.png',
      name: 'chicken',
      barginBucket: function(){
        const bargin = 'finger lick\' food';
        increasePower();
        whatYaSayin(bargin);
        decreasePowerCpu();

      },
      roastChicken: function(){
        const roast ='roastin\'';
        whatYaSayin(roast);
        decreasePower();
        increasePowerCpu();
      },
      perfectCombo: function(){
        const kfc ='Eden\'s cottage .. PFC .. Chicken cottage';
        increasePower();
        whatYaSayin(kfc);
        increasePowerCpu();
      }
    },
    {
      image: 'fire.png',
      name: 'fire',
      burntMushroom: function(){
        const grees = 'burnt mushroom greasy spoon!!';
        whatYaSayin(grees);
        decreasePower();
        increasePowerCpu();
      },
      toxicFire: function(){
        const toxic = 'toxic fire!!';
        whatYaSayin(toxic);
        decreasePower();
        increasePowerCpu();
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
        whatYaSayin(pukka);
        decreasePowerCpu();
      },
      magicMushroom: function(){
        const magic = 'trippin\' balls';
        increasePower();
        whatYaSayin(magic);
        increasePowerCpu();

      },
      festival: function(){
        const shroom = 'shroom hop cocktail';
        increasePower();
        whatYaSayin(shroom);
        increasePowerCpu();

      }
    },
    {
      image: 'syringe.png',
      name: 'syringe',
      posionMushroom: function(){
        const posion ='gastrointestinal discomfort to death';
        whatYaSayin(posion);
        decreasePower();
        increasePowerCpu();
      },
      posionWater: function(){
        const spike ='spiking the water supply';
        whatYaSayin(spike);
        decreasePower();
        increasePowerCpu();
      },
      hormoneChicken: function(){
        const mone ='tasty but deadly';
        whatYaSayin(mone);
        decreasePower();
        increasePowerCpu();
      },
      overdose: function(){
        const od ='jim morrison';
        whatYaSayin(od);
        increasePower();
        decreasePowerCpu();
      }
    },
    {
      image: 'water.png',
      name: 'water',
      extinguish: function(){
        const waterworks = 'lights out children';
        whatYaSayin(waterworks);
        decreasePower();
        increasePowerCpu();
      },
      soggyChicken: function(){
        const soggy = 'soggy chicke - fowl!!';
        whatYaSayin(soggy);
        decreasePower();
        decreasePowerCpu();
      },
      lifeOLife: function(){
        const life = 'life o life o liiiife';
        whatYaSayin(life);
        increasePower();
        increasePowerCpu();

      }
    }
  ];

  ////////////////////////////////////////////////////////////////////////////////

  // POWER bar
  const hBar      = $('.powerBar');
  // const bar       = $('.bar');
  const manPower  = $('#humanPower');
  const cpuPower  = $('#cpuPower');

  function increasePower(){
    var total = hBar.data('total');
    var value = hBar.data('value');
    var power = 20;
    var newValue = +value + +power  ;
    var barWidth = (newValue / total) * 100;
    hBar.data('value', newValue);
    setTimeout(function(){
      manPower.css('width', barWidth + '%');
    }, 500);
    // console.log(newValue, power, barWidth);
    // if(barWidth === 100){
    //   $('.character').prepend('You win muthafucker');
    //   newDivMessage.css('font-size', '100px');
    //   createStartButton();
  }
}
// DECREASE POWER FUNCTION
function decreasePower(){
  var total = hBar.data('total');
  var value = hBar.data('value');
  var power = 10;
  var newValue = value - power  ;
  var barWidth = (newValue / total) * 100;
  hBar.data('value', newValue);
  setTimeout(function(){
    manPower.css('width', barWidth + '%');
  }, 500);

}
// INCREASE CPu POWER FUNCTION
function increasePowerCpu(){
  var total = hBar.data('total');
  var value = hBar.data('value');
  var power = 20;
  var newValue = +value + +power  ;
  var barWidth = (newValue / total) * 100;
  hBar.data('value', newValue);
  setTimeout(function(){
    cpuPower.css('width', barWidth + '%');
  }, 500);
}

// DECREASE CPu POWER FUNCTION
function decreasePowerCpu(){
  var total = hBar.data('total');
  var value = hBar.data('value');
  var power = 10;
  var newValue = value - power  ;
  var barWidth = (newValue / total) * 100;
  hBar.data('value', newValue);
  setTimeout(function(){
    cpuPower.css('width', barWidth + '%');
  }, 500);
  // console.log(newValue, power, barWidth);
}

// WIN LOGIC
if(manPower.barWidth === 0 || cpuPower.barWidth === 100){
  $('.character').prepend('You lose baby');
  newDivMessage.css('font-size', '100px');
  createStartButton();
} else if ($('humanPower').barWidth === 0 || cpuPower.barWidth === 100) {
  if(barWidth === 100){
    $('.character').prepend('You win muthafucker');
    newDivMessage.css('font-size', '100px');
    createStartButton();
  } else {
    createResetButton();
  }

  ////////////////////////////////////////////////////////////////////////////////
  // START BUTTON
  function createStartButton(){
    const $input = $('<input type="button" class="startButton" value="START" />');
    $input.appendTo($('.startContainer'));
    $input.on('click', function(){
      itemDistributor();
      $input.remove();
    });
  }
  createStartButton();

  //////////////////////////////////////////////////////////////////////////////
  // RANDOM ITEM DISTRIBUTOR
  function itemDistributor(){
    $.each($('.powerupBox'), function(index, element) {
      const randomMove = moves[Math.floor(Math.random()* moves.length)];
      $(element).css('background', `url(img/${randomMove.image})`).attr('id', `${randomMove.name}`);
    });
  }
  // Click Play
  function clickPlay(){
    $('.powerupBox.playa').one('click', function(e) {
      const $enemyArray = $('.enemyArray').toArray();
      const cpuMove = $enemyArray[Math.floor(Math.random()* $enemyArray.length)];
      $('.character2').append(cpuMove).clone();
      $('.character').append(e.target).clone();
      bigBoi();
    });
  }
  clickPlay();
  //looser
  function loser(){
    // whatYaSayin('');
    const newDivMessage = $('div');
    $('.message').empty();
    $('.message').prepend('YOU NEED TO BE CAREFUL');
    newDivMessage.css({
      'font-size': '70px',
      'pointer': 'cursor'});
      decreasePower();
      createResetButton();
    }

    // COMPARISION OPERATOR
    function bigBoi(){
      if ($('div.character > div').length !== 0) {
        const humanSelection = $('div.character > div')[0].id;
        const cpuSelection   = $('div.character2 > div')[0].id;

      }

    }
  }
