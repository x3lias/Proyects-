// Challenge 1 age in days
function ageindays(){
    
    var birthyear = prompt('En que año naciste... Querido amigo?');
    var formula = (2020 - birthyear) *365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Eres ' + formula + ' dias viejos');
    h1.setAttribute('id' , 'ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flexboxresult').appendChild(h1);
}

function reset(){
   
    document.getElementById('ageindays').remove();

}

// Challenge 2 generate cats

function generatecats(){

    var image = document.createElement('img');
    var div = document.getElementById('flexcat');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}

// Challenge 3 
//Estructura de inicializacion del juego 

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice =  yourChoice.id;
     botChoice = numberchoice(randompicks());
     console.log('computer choice:', botChoice);

   results = decidewinner(humanChoice, botChoice); // [0.1] datos human lost i bot won
   console.log(results);

  message = finalmessage(results); // you won 'message': 'You won', 'color', 'green')
console.log(message);

rpsfrontend(yourChoice.id, botChoice, message);
 
}

function randompicks(){
    return Math.floor(Math.random() * 3);
}

function numberchoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

// Object in javascript

function decidewinner(yourChoice, computerChoice) { 
var rpsDatabase = {
    'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0}


};

var youScore = rpsDatabase[yourChoice][computerChoice];
var computerscore = rpsDatabase[computerChoice][yourChoice];

return [youScore, computerscore];
}


function finalmessage([youScore, computerscore]) {
    if (youScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    } else if (youScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsfrontend(humanImageChoice, botImageChoice, finalmessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style ='color: " + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
 

    document.getElementById('flexboxrpsdiv').appendChild(humanDiv);
    document.getElementById('flexboxrpsdiv').appendChild(messageDiv);
    document.getElementById('flexboxrpsdiv').appendChild(botDiv);
}




// Challenge 4: Change the color of all button

var allbutton = document.getElementsByTagName('button');

var copyallbuttons = [];
for (let i=0; i < allbutton.length; i++){
    copyallbuttons.push(allbutton[i].classList[1]);
}


function buttoncolorchange(buttonthings) {

    if ( buttonthings.value === 'red') {
        buttonRed();
    } else if (buttonthings.value === 'green') {
           buttonGreen();
    } else if (buttonthings.value === 'reset') {
        buttoncolorReset();
    } else if (buttonthings.value === 'random') {
        ramdomcolor();
    }
}
function buttonRed() {
    for (let i=0; i < allbutton.length; i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i=0; i < allbutton.length; i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add('btn-success');

    
    }
}

function buttoncolorReset() {
    for (let i=0; i < allbutton.length; i++){
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(copyallbuttons[i]);

    
    }
}

function ramdomcolor(){

    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i < allbutton.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        allbutton[i].classList.remove(allbutton[i].classList[1]);
        allbutton[i].classList.add(choices[randomNumber]);
    
    }

}


/// Challenge five 

let blackjackGame = {
    'you' : {'scoreSpan': '#your-blackjackresult', 'div': '#your-box', 'score': 0},
    'dealer' : {'scoreSpan': '#dealer-blackjackresult', 'div': '#dealer-box', 'score' : 0},

};

const YOU = blackjackGame ['you']
const DEALER = blackjackGame ['dealer']

const hitsound = new Audio('sounds/swish.m4a');

document.querySelector('#blackjack-hit'),addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal'),addEventListener('click', blackjackDeal);

function blackjackHit() {

    let cardImage = document.createElement('img');
    cardImage.src = 'img/Q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    hitsound.play();
    //showCard(YOU)
}

//function showCard(activePlayer) {
    
// }

function blackjackDeal() {

    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    console.log(yourImages);
   // for (i = 0; i < yourImages.length; i++) {
   // yourImages[i].remove;
    }
// }