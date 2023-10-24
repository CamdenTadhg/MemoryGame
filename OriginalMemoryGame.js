const gameContainer = document.getElementById("game");
//create score
let scoreTracker = 0;
const scoreP = document.querySelector('.score');
let matchedCards = [];
const Midwest = [
    "blue1", 
    "card1", 
    "finc1", 
    "down1", 
    "robi1", 
    "junc1", 
    "nuth1", 
    "crow1", 
    "redb1", 
    "blue2", 
    "card2", 
    "finc2", 
    "down2", 
    "robi2", 
    "junc2", 
    "nuth2", 
    "crow2", 
    "redb2", 
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
    redb2: "'images/Midwest/redbellied2.jpg'"
  }

const COLORS = [
  "maroon", 
  "red", 
  "purple", 
  "fuchsia", 
  "green", 
  "yellow", 
  "navy", 
  "blue", 
  "teal", 
  "maroon", 
  "red", 
  "purple", 
  "fuchsia", 
  "green", 
  "yellow", 
  "navy", 
  "blue", 
  "teal", 
];

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
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(bird);
    newDiv.style.backgroundImage = "url('images/birdrelief.jpg')";
    newDiv.style.backgroundPosition = 'center';
    newDiv.style.backgroundSize = 'cover';
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}



function handleCardClick(event) {
  //change color of card when it is clicked
  //can only click two cards at a time, no matter how fast you click
  //clicking on the same card twice is not a match
  if (document.getElementById('cardA') === null){
    this.setAttribute('id', 'cardA');
    event.target.removeAttribute('style');
    event.target.style.backgroundImage = `url(${midwestImages[event.target.className]})`;
    event.target.style.backgroundPosition = 'center';
    event.target.style.backgroundSize = 'cover';
  } else if (document.getElementById('cardB') === null){
    this.setAttribute('id', 'cardB');
    event.target.removeAttribute('style');
    event.target.style.backgroundImage = `url(${midwestImages[event.target.className]})`;
    event.target.style.backgroundPosition = 'center';
    event.target.style.backgroundSize = 'cover';
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
    if (cardA.style && cardB.style){
        let stringA = cardA.getAttribute('class');
        stringA = stringA.slice(0,4);
        let stringB = cardB.getAttribute('class');
        stringB = stringB.slice(0,4);
      if (stringA !== stringB){
        const id = setTimeout(function(){
          cardA.style.backgroundImage = "url('images/birdrelief.jpg')";
          cardA.style.backgroundPosition = 'center';
          cardA.style.backgroundSize = 'cover';
          cardB.style.backgroundImage = "url('images/birdrelief.jpg')";
          cardB.style.backgroundPosition = 'center';
          cardB.style.backgroundSize = 'cover';
        }, 1000);
      } else if (stringA === stringB){
        cardA.classList.add('matched');
        cardB.classList.add('matched');
        if (matchedCards.indexOf(cardA) === -1 && matchedCards.indexOf(cardB) === -1){
          matchedCards.push(cardA);
          matchedCards.push(cardB);
        }    
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

// when the DOM loads
document.addEventListener('DOMContentLoaded', function(){
  createDivsForBirds(shuffledBirds);
})

//game over notification
function gameOver(){
  setTimeout(function(){
    if (matchedCards.length === 18){
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

//add button to start the game; becomes a button to restart the game once it has ended
const newGame = document.querySelector('.gamebutton');

newGame.addEventListener('click', function(event){
  location.reload();
  shuffledBirds = shuffle(Midwest);
  createDivsForBirds(shuffledBirds);
  scoreTracker = 0;
})



// sets for different regions
// layout styling, including picture sizing
// button styling
// score styling
// alert styling
//title screen
// card flip animation
// make it work on 3 different monitor sizes
//let the user chose the number of cards