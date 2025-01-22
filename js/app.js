// /*-------------------------------- Constants --------------------------------*/


const words = [
    'smile', 'happy', 'javascript', 'bicycle', 
    'puzzle', 'universe', 'hangman', 'horizon',
    'cat', 'dog', 'fish', 'tree', 'book', 
  'milk', 'rain', 'sun', 'hat', 'car',
    'library', 'ocean', 'planet', 'galaxy', 'planet', 'garden', 'school', 'flower', 'beach', 'river',
    'telescope', 'fireworks', 'birthday', 
    'holiday', 'friendship', 'champion', 'backpack', 
    'airplane', 'headphones', 'butterfly', 'rainbow', 
    'waterfall', 'sunflower', 'mountains', 'adventure', 
     'treasure', 'campfire', 'landscape','elephant', 'dinosaur', 'astronomy', 'mountain',  
  ];



  const hangmanImages = [
    "./hangman/hangman 1.png",
    "./hangman/hangman 2.png",
    "./hangman/hangman 3.png",
    "./hangman/hangman 4.png",
    "./hangman/hangman 5.png",
    "./hangman/hangman 6.png",
    "./hangman/hangman 7.png"
];

// /*-------------------------------- Variables --------------------------------*/

let guessedLetters = [];
let incorrectAttempts = [];
let squares;
let currentLetter = '';
let currentWord = '';
const Message = document.querySelector('.Message');
const incorrect = document.querySelector('#output');

const guessInput = document.getElementById('guess');
const wordContainer = document.getElementById('word-container');
const check = document.querySelector('#check')
const restart = document.querySelector('#restart')
const picture = document.getElementById("picture");
 
console.log(picture);



  
// /*------------------------ Cached Element References ------------------------*/





// /*----------------------------- Event Listeners -----------------------------*/
check.addEventListener('click',compareletters)
restart.addEventListener('click',startGame)





// /*-------------------------------- Functions --------------------------------*/



function startGame() {
    const index = Math.floor(Math.random() * words.length); /////////// picked random wards 
    currentWord = words[index];
    
    guessedLetters = [];
    incorrectAttempts = [];  
    picture.src = hangmanImages[0];
    incorrect.textContent='';
    wordContainer.innerHTML = ''; 
    Message.textContent = ""; 

   for (let i = 0; i < currentWord.length; i++) {
    const square = document.createElement('div'); // new sq
    square.classList.add('sqr'); // add to css
    square.textContent = ''; 
    wordContainer.appendChild(square); // add sq to container
}

squares = Array.from(wordContainer.children); 
console.log(currentWord);
};
 startGame();




function compareletters (){

    currentLetter = guessInput.value;

    
    const wordArray = currentWord.split("");
  
     console.log(currentLetter);
     console.log(wordArray);


     if ( wordArray.includes(currentLetter) ){
        guessedLetters.push(currentLetter);
        Position();
        Message.textContent = 'CORRECT!';
         console.log('the letter entered is in word');
         checkwinner();
         guessInput.value= '';

     } else {
         console.log('letter is not incuded');
         reptitionletter();
        Message.textContent = 'INCORRECT!';
        checkwinner();
        guessInput.value= '';
      
     }
    
    };




function Position(){
    const wordArray = currentWord.split("");
    for (i=0; i< wordArray.length; i++){
        if (wordArray[i] === currentLetter){
            squares[i].textContent = currentLetter;
        }
            
    }

};

function reptitionletter(){
    if (incorrectAttempts.indexOf(currentLetter) === -1){
        incorrectAttempts.push(currentLetter);
        incorrect.textContent = incorrectAttempts;
        picture.src = hangmanImages[incorrectAttempts.length];
        
        
    }
};



function checkwinner(){
    const wordArray = currentWord.split("");
  
if(incorrectAttempts.length >= 6 ){//////////////// limited attempts
    console.log("Game Over!")
    Message.textContent = "Game Over! You've run out of attempts.";
    nextRound()
    return;
  }


if ( guessedLetters.length === wordArray.length){
     Message.textContent = "YOU ARE WIN!";
     nextRound()
       return;
      }
    };


    function nextRound(){
        setTimeout(startGame, 1000)
        
    };