const gameContainer = document.getElementById("game");
//create score
let scoreTracker = 0;
const scoreP = document.querySelector('.score');
let matchedCards = [];
const Midwest = [
    "blue1", 
    "card1", 
    "crow1",
    "dove1",
    "down1",
    "eagl1",
    "finc1",
    "junc1",
    "mart1",
    "mock1",
    "nuth1",
    "orio1",
    "owll1",
    "redb1",
    "robi1",
    "star1",
    "blue2",
    "card2",
    "crow2",
    "dove2",
    "down2",
    "eagl2",
    "finc2",
    "junc2",
    "mart2",
    "mock2",
    "nuth2",
    "orio2",
    "owll2",
    "redb2",
    "robi2",
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
  }

// when the DOM loads
document.addEventListener('DOMContentLoaded', function(){
  createDivsForBirds(shuffledBirds);
})

//add button to start the game; becomes a button to restart the game once it has ended
const newGame = document.querySelector('.gamebutton');

newGame.addEventListener('click', function(event){
  location.reload();
  shuffledBirds = shuffle(Midwest);
  createDivsForBirds(shuffledBirds);
  scoreTracker = 0;
})

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;
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

  return array;
}

let shuffledBirds = shuffle(Midwest);

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
    $backDiv.html(`<img src=${midwestImages[bird]}>`)
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
  if (document.getElementById('cardA') === null){
    event.currentTarget.setAttribute('id', 'cardA');
    event.currentTarget.children[0].classList.toggle('is-flipped');
  } else if (document.getElementById('cardB') === null){
    event.currentTarget.setAttribute('id', 'cardB');
    event.currentTarget.children[0].classList.toggle('is-flipped');
  } 
  checkMatch();
}

//if it matches, leave it like that
//if it doesn't match, 
// turn it back after 1 second
function checkMatch(){
  if (document.getElementById('cardA') && document.getElementById('cardB')){
    let cardA = document.getElementById('cardA');
    console.log(cardA.children[0]);
    let cardB = document.getElementById('cardB');
        let stringA = cardA.children[0].getAttribute('class');
        stringA = stringA.slice(5,9);
        console.log(stringA);
        let stringB = cardB.children[0].getAttribute('class');
        stringB = stringB.slice(5,9);
        console.log(stringB);
      if (stringA !== stringB){
        const id = setTimeout(function(){
          cardA.children[0].classList.toggle('is-flipped');
          cardB.children[0].classList.toggle('is-flipped');
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
    if (matchedCards.length === 32){
      alert('Game Over. You Win!');
      lowScore();
    }
  }, 500);
}

//store the lowest-score game in local storage
function lowScore(){
  if (localStorage.getItem('lowScore') === null){
    alert('New Low Score!')
    localStorage.setItem('lowScore', scoreTracker);
  }
  else if (localStorage.getItem('lowScore') > scoreTracker){
    alert('New Low Score!')
    localStorage.setItem('lowScore', scoreTracker);
  }
}





// card flip animation
// sets for different regions and number of cards
// layout styling, including better picture sizes
// button styling
// score styling
// alert styling
// ReadMe file
//title screen
// make it work on 3 different monitor sizes
