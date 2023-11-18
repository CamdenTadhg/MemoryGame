const $gameContainer = $('#game');
const $optionsForm = document.getElementById("options");
const $lowScore = $('#low-score');
//create score
let scoreTracker = 0;
const scoreP = document.querySelector('.score');
let matchedCards = [];
const Midwest = [
    "blue1", 
    "blue2", 
    "card1", 
    "card2", 
    "crow1", 
    "crow2", 
    "dove1", 
    "dove2", 
    "down1", 
    "down2", 
    "eagl1", 
    "eagl2", 
    "finc1", 
    "finc2", 
    "junc1", 
    "junc2", 
    "mart1", 
    "mart2", 
    "mock1", 
    "mock2", 
    "nuth1", 
    "nuth2", 
    "orio1", 
    "orio2", 
    "owll1", 
    "owll2", 
    "redb1", 
    "redb2", 
    "robi1", 
    "robi2", 
    "star1", 
    "star2"
  ];
const midwestImages = {
    blue1: "'images/Midwest/bluejay1.jpg'",
    card1: "'images/Midwest/cardinal1.jpg'",
    finc1: "'images/Midwest/finch1.jpg'",
    down1: "'images/Midwest/downy1.jpg'", 
    robi1: "'images/Midwest/robin1.jpg'",
    junc1: "'images/Midwest/junco1.jpg'",
    nuth1: "'images/Midwest/nuthatch1.jpg'",
    crow1: "'images/Midwest/crow1.jpg'",
    redb1: "'images/Midwest/redbellied1.jpg'",
    blue2: "'images/Midwest/bluejay2.jpg'",
    card2: "'images/Midwest/cardinal2.jpg'",
    finc2: "'images/Midwest/finch2.jpg'",
    down2: "'images/Midwest/downy2.jpg'",
    robi2: "'images/Midwest/robin2.jpg'",
    junc2: "'images/Midwest/junco2.jpg'",
    nuth2: "'images/Midwest/nuthatch2.jpg'",
    crow2: "'images/Midwest/crow2.jpg'", 
    redb2: "'images/Midwest/redbellied2.jpg'",
    dove1: "'images/Midwest/dove1.jpg'",
    dove2: "'images/Midwest/dove2.jpg'",
    eagl1: "'images/Midwest/eagle1.jpg'",
    eagl2: "'images/Midwest/eagle2.jpg'",
    mart1: "'images/Midwest/martin1.jpg'",
    mart2: "'images/Midwest/martin2.jpg'",
    mock1: "'images/Midwest/mockingbird1.jpg'",
    mock2: "'images/Midwest/mockingbird2.jpg'",
    orio1: "'images/Midwest/oriole1.jpg'",
    orio2: "'images/Midwest/oriole2.jpg'",
    owll1: "'images/Midwest/owl1.jpg'", 
    owll2: "'images/Midwest/owl2.jpg'",
    star1: "'images/Midwest/starling1.jpg'",
    star2: "'images/Midwest/starling2.jpg'"
  };
const Northeast = [
  "blub1", 
  "blub2", 
  "blue1", 
  "blue2", 
  "bunt1", 
  "bunt2", 
  "card1", 
  "card2", 
  "chic1", 
  "chic2", 
  "finc1", 
  "finc2", 
  "gold1", 
  "gold2", 
  "gros1", 
  "gros2", 
  "junc1", 
  "junc2", 
  "nuth1", 
  "nuth2", 
  "orio1", 
  "orio2", 
  "redw1", 
  "redw2", 
  "robi1", 
  "robi2", 
  "spar1", 
  "spar2",
  "thru1", 
  "thru2", 
  "titm1", 
  "titm2"
];
const northeastImages = {
  blub1: "'images/Northeast/bluebird1.jpg'",
  blub2: "'images/Northeast/bluebird2.jpg'", 
  blue1: "'images/Northeast/bluejay1.jpg'",
  blue2: "'images/Northeast/bluejay2.jpg'",
  bunt1: "'images/Northeast/bunting1.jpg'", 
  bunt2: "'images/Northeast/bunting2.jpg'", 
  card1: "'images/Northeast/cardinal1.jpg'",
  card2: "'images/Northeast/cardinal2.jpg'", 
  chic1: "'images/Northeast/chickadee1.jpg'", 
  chic2: "'images/Northeast/chickadee2.jpg'", 
  finc1: "'images/Northeast/finch1.jpg'", 
  finc2: "'images/Northeast/finch2.jpg'", 
  gold1: "'images/Northeast/goldfinch1.jpg'", 
  gold2: "'images/Northeast/goldfinch2.jpg'", 
  gros1: "'images/Northeast/grosbeak1.jpg'", 
  gros2: "'images/Northeast/grosbeak2.jpg'", 
  junc1: "'images/Northeast/junco1.jpg'", 
  junc2: "'images/Northeast/junco2.jpg'", 
  nuth1: "'images/Northeast/nuthatch1.jpg'", 
  nuth2: "'images/Northeast/nuthatch2.jpg'", 
  orio1: "'images/Northeast/oriole1.jpg'", 
  orio2: "'images/Northeast/oriole2.jpg'", 
  redw1: "'images/Northeast/redwing1.jpg'", 
  redw2: "'images/Northeast/redwing2.jpg'", 
  robi1: "'images/Northeast/robin1.jpg'", 
  robi2: "'images/Northeast/robin2.jpg'", 
  spar1: "'images/Northeast/sparrow1.jpg'", 
  spar2: "'images/Northeast/sparrow2.jpg'", 
  thru1: "'images/Northeast/thrush1.jpg'", 
  thru2: "'images/Northeast/thrush2.jpg'", 
  titm1: "'images/Northeast/titmouse1.jpg'", 
  titm2: "'images/Northeast/titmouse2.jpg'"
};
const Northwest = [
  "chic1", 
  "chic2", 
  "cowb1", 
  "cowb2", 
  "crow1", 
  "crow2", 
  "dove1", 
  "dove2", 
  "down1", 
  "down2", 
  "finc1", 
  "finc2", 
  "gold1", 
  "gold2", 
  "humm1", 
  "humm2", 
  "nuth1", 
  "nuth2", 
  "orio1", 
  "orio2", 
  "pige1", 
  "pige2", 
  "redw1", 
  "redw2", 
  "robi1", 
  "robi2", 
  "spar1", 
  "spar2", 
  "star1", 
  "star2", 
  "wren1", 
  "wren2"
];
const northwestImages = {
  chic1: "'images/Northwest/chickadee1.jpg'", 
  chic2: "'images/Northwest/chickadee2.jpg'", 
  cowb1: "'images/Northwest/cowbird1.jpg'", 
  cowb2: "'images/Northwest/cowbird2.jpg'", 
  crow1: "'images/Northwest/crow1.jpg'", 
  crow2: "'images/Northwest/crow2.jpg'", 
  dove1: "'images/Northwest/dove1.jpg'", 
  dove2: "'images/Northwest/dove2.jpg'", 
  down1: "'images/Northwest/downy1.jpg'",
  down2: "'images/Northwest/downy2.jpg'", 
  finc1: "'images/Northwest/finch1.jpg'", 
  finc2: "'images/Northwest/finch2.jpg'", 
  gold1: "'images/Northwest/goldfinch1.jpg'", 
  gold2: "'images/Northwest/goldfinch2.jpg'", 
  humm1: "'images/Northwest/hummingbird1.jpg'", 
  humm2: "'images/Northwest/hummingbird2.jpg'", 
  nuth1: "'images/Northwest/nuthatch1.jpg'", 
  nuth2: "'images/Northwest/nuthatch2.jpg'", 
  orio1: "'images/Northwest/oriole1.jpg'", 
  orio2: "'images/Northwest/oriole2.jpg'", 
  pige1: "'images/Northwest/pigeon1.jpg'", 
  pige2: "'images/Northwest/pigeon2.jpg'", 
  redw1: "'images/Northwest/redwing1.jpg'", 
  redw2: "'images/Northwest/redwing2.jpg'", 
  robi1: "'images/Northwest/robin1.jpg'", 
  robi2: "'images/Northwest/robin2.jpg'", 
  spar1: "'images/Northwest/sparrow1.jpg'", 
  spar2: "'images/Northwest/sparrow2.jpg'", 
  star1: "'images/Northwest/starling1.jpg'", 
  star2: "'images/Northwest/starling2.jpg'", 
  wren1: "'images/Northwest/wren1.jpg'", 
  wren2: "'images/Northwest/wren2.jpg'"
};
const Southeast = [
  "blub1", 
  "blub2", 
  "blue1", 
  "blue2", 
  "card1", 
  "card2", 
  "chic1", 
  "chic2", 
  "dove1", 
  "dove2", 
  "down1", 
  "down2", 
  "finc1", 
  "finc2", 
  "gold1", 
  "gold2", 
  "mock1", 
  "mock2", 
  "nuth1", 
  "nuth2", 
  "redb1", 
  "redb2", 
  "redw1", 
  "redw2", 
  "robi1", 
  "robi2", 
  "spar1", 
  "spar2", 
  "star1", 
  "star2", 
  "titm1", 
  "titm2"
]
const southeastImages = {
  blub1: "'images/Southeast/bluebird1.jpg'", 
  blub2: "'images/Southeast/bluebird2.jpg'", 
  blue1: "'images/Southeast/bluejay1.jpg'", 
  blue2: "'images/Southeast/bluejay2.jpg'", 
  card1: "'images/Southeast/cardinal1.jpg'", 
  card2: "'images/Southeast/cardinal2.jpg'", 
  chic1: "'images/Southeast/chickadee1.jpg'", 
  chic2: "'images/Southeast/chickadee2.jpg'", 
  dove1: "'images/Southeast/dove1.jpg'", 
  dove2: "'images/Southeast/dove2.jpg'", 
  down1: "'images/Southeast/downy1.jpg'", 
  down2: "'images/Southeast/downy2.jpg'", 
  finc1: "'images/Southeast/finch1.jpg'", 
  finc2: "'images/Southeast/finch2.jpg'", 
  gold1: "'images/Southeast/goldfinch1.jpg'", 
  gold2: "'images/Southeast/goldfinch2.jpg'", 
  mock1: "'images/Southeast/mockingbird1.jpg'", 
  mock2: "'images/Southeast/mockingbird2.jpg'", 
  nuth1: "'images/Southeast/nuthatch1.jpg'", 
  nuth2: "'images/Southeast/nuthatch2.jpg'", 
  redb1: "'images/Southeast/redbellied1.jpg'", 
  redb2: "'images/Southeast/redbellied2.jpg'", 
  redw1: "'images/Southeast/redwing1.jpg'", 
  redw2: "'images/Southeast/redwing2.jpg'", 
  robi1: "'images/Southeast/robin1.jpg'", 
  robi2: "'images/Southeast/robin2.jpg'", 
  spar1: "'images/Southeast/sparrow1.jpg'", 
  spar2: "'images/Southeast/sparrow2.jpg'", 
  star1: "'images/Southeast/starling1.jpg'", 
  star2: "'images/Southeast/starling2.jpg'", 
  titm1: "'images/Southeast/titmouse1.jpg'", 
  titm2: "'images/Southeast/titmouse2.jpg'"
};
const Southwest = [
  "cara1", 
  "cara2", 
  "cowb1", 
  "cowb2", 
  "falc1", 
  "falc2", 
  "flyc1", 
  "flyc2", 
  "gnat1", 
  "gnat2", 
  "gold1", 
  "gold2", 
  "humm1", 
  "humm2", 
  "phoe1", 
  "phoe2", 
  "spar1", 
  "spar2", 
  "tana1", 
  "tana2", 
  "thra1", 
  "thra2", 
  "titm1", 
  "titm2", 
  "towh1", 
  "towh2", 
  "warb1", 
  "warb2", 
  "wood1", 
  "wood2", 
  "wren1", 
  "wren2"
]
const southwestImages = {
  cara1: "'images/Southwest/caracara1.jpg'",
  cara2: "'images/Southwest/caracara2.jpg'", 
  cowb1: "'images/Southwest/cowbird1.jpg'", 
  cowb2: "'images/Southwest/cowbird2.jpg'", 
  falc1: "'images/Southwest/falcon1.jpg'", 
  falc2: "'images/Southwest/falcon2.jpg'", 
  flyc1: "'images/Southwest/flycatcher1.jpg'", 
  flyc2: "'images/Southwest/flycatcher2.jpg'", 
  gnat1: "'images/Southwest/gnatcatcher1.jpg'", 
  gnat2: "'images/Southwest/gnatcatcher2.jpg'", 
  gold1: "'images/Southwest/goldfinch1.jpg'", 
  gold2: "'images/Southwest/goldfinch2.jpg'", 
  humm1: "'images/Southwest/hummingbird1.jpg'", 
  humm2: "'images/Southwest/hummingbird2.jpg'", 
  phoe1: "'images/Southwest/phoebe1.jpg'", 
  phoe2: "'images/Southwest/phoebe2.jpg'", 
  spar1: "'images/Southwest/sparrow1.jpg'", 
  spar2: "'images/Southwest/sparrow2.jpg'", 
  tana1: "'images/Southwest/tanager1.jpg'", 
  tana2: "'images/Southwest/tanager2.jpg'", 
  thra1: "'images/Southwest/thrasher1.jpg'", 
  thra2: "'images/Southwest/thrasher2.jpg'", 
  titm1: "'images/Southwest/titmouse1.jpg'", 
  titm2: "'images/Southwest/titmouse2.jpg'", 
  towh1: "'images/Southwest/towhee1.jpg'", 
  towh2: "'images/Southwest/towhee2.jpg'", 
  warb1: "'images/Southwest/warbler1.jpg'", 
  warb2: "'images/Southwest/warbler2.jpg'", 
  wood1: "'images/Southwest/woodpecker1.jpg'", 
  wood2: "'images/Southwest/woodpecker2.jpg'", 
  wren1: "'images/Southwest/wren1.jpg'", 
  wren2: "'images/Southwest/wren2.jpg'"
};


//add button to start the game; becomes a button to restart the game once it has ended
const newGame = document.querySelector('.gamebutton');
let region;
let numberCards;
let scoreCode;

newGame.addEventListener('click', function(event){
  numberCards = document.querySelector('#card-number').value;
  region = document.querySelector('#region').value;
  scoreCode = region + numberCards;
  $gameContainer.empty();
  let selectedCards = eval(region).slice(0, numberCards);
  shuffledBirds = shuffle(selectedCards);
  createDivsForBirds(shuffledBirds);
  scoreTracker = 0;
})

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = numberCards;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  counter = 0;
  return array;
}

// this function loops over the array of birds
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
// switch to bird backing
function createDivsForBirds(birdArray) {
  for (let bird of birdArray) {
    // create 4 divs
    const $frontDiv = $('<div class="card-face card-face-front"><img src="images/birdrelief.jpg"></div>');
    const $backDiv = $('<div class="card-face card-face-back"></div>');
    const $cardDiv = $('<div class="card"></div>');
    const $sceneDiv = $('<div class="scene scene-card"></div>')
    //give it a class attribute for the value we are looping over
    $cardDiv.addClass(bird);
    //add the appropriate image to the back of the card
    let regionTemp = region.toLowerCase();
    let imagesObject = eval(regionTemp + 'Images');
    $backDiv.html(`<img src=${imagesObject[bird]}>`)
    //call a function handleCardClick when a div is clicked on
    $sceneDiv.on('click', handleCardClick);
    //Append the divs to the various elements
    $cardDiv.append($frontDiv);
    $cardDiv.append($backDiv);
    $sceneDiv.append($cardDiv);
    $('#game').append($sceneDiv);
  }
}



function handleCardClick(event) {
  //flip card over when it is clicked
  //can only click two cards at a time, no matter how fast you click
  //clicking on the same card twice is not a match
  if (document.getElementById('cardA') === null && event.currentTarget.children[0].classList[2] !== 'is-flipped'){
    if (event.currentTarget.getAttribute('id') !== 'cardA'){
      event.currentTarget.setAttribute('id', 'cardA');
      event.currentTarget.children[0].classList.add('is-flipped');
    }
  } else if (document.getElementById('cardB') === null && event.currentTarget.children[0].classList[2] !== 'is-flipped'){
    if (event.currentTarget.getAttribute('id') !== 'cardB'){
      event.currentTarget.setAttribute('id', 'cardB');
      event.currentTarget.children[0].classList.add('is-flipped');
    }
  } 
  checkMatch();
}

//if it matches, leave it like that
//if it doesn't match, 
// turn it back after 1 second
function checkMatch(){
  if (document.getElementById('cardA') && document.getElementById('cardB')){
    let cardA = document.getElementById('cardA');
    let cardB = document.getElementById('cardB');
        let stringA = cardA.children[0].getAttribute('class');
        stringA = stringA.slice(5,9);
        let stringB = cardB.children[0].getAttribute('class');
        stringB = stringB.slice(5,9);
      if (stringA !== stringB){
        const id = setTimeout(function(){
          cardA.children[0].classList.remove('is-flipped');
          cardB.children[0].classList.remove('is-flipped');
        }, 1000);
      } else if (stringA === stringB){
        cardA.classList.add('matched');
        cardB.classList.add('matched');
        if (matchedCards.indexOf(cardA) === -1 && matchedCards.indexOf(cardB) === -1){
          matchedCards.push(cardA);
          matchedCards.push(cardB);
        }    
      }
    setTimeout(function(){
      cardA.removeAttribute('id');
      cardB.removeAttribute('id');
    },1000);
    //track score
    scoreTracker++;
    scoreP.innerText = `Score: ${scoreTracker}`;
    gameOver();
  }
}



//game over notification
function gameOver(){
  setTimeout(function(){
    if (matchedCards.length === eval(numberCards)){
      const $modal = $('.modal');
      const $span = $('.close');
      $modal.css("display", "block");
      $span.on('click', function(){
        $modal.css('display', 'none');
        $lowScore.css('display', 'none');
      })
      lowScore();
      matchedCards = [];
    }
  }, 500);
}

//store the lowest-score game in local storage
function lowScore(){
  if (localStorage.getItem(scoreCode) === null){
    $lowScore.css("display", "block");
    localStorage.setItem(scoreCode, scoreTracker);
  }
  else if (localStorage.getItem(scoreCode) > scoreTracker){
    $lowScore.css("display", "block");
    localStorage.setItem(scoreCode, scoreTracker);
  }
}





// sets for different regions and number of cards
// layout styling, including better picture sizes
// button styling
// score styling
// alert styling
// ReadMe file
//title screen
// make it work on 3 different monitor sizes
