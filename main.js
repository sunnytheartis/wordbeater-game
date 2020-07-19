window.addEventListener('load', init);

// Globals

// available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2

}

// to change level
const currentLevel= levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#currentWord');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ['lantern' , 'prank' , 'sweets' , 'darkness' , 'monster' , 'shadows' , 'moonlight' , 'spider' , 'disguise' , 'night' , 'supernatural' , 'superstition' , 'queen' , 'pirate' , 'superhero' , 'fairy' , 'vampire' , 'king' , 'warlock' , 'ninja' , 'fangs' , 'mask' , 'candy' , 'flashlight'
, 'cloak' , 'gown' , 'doorbell' , 'hat' , 'wig' , 'makeup' ,  'alien' , 'giant' , 'vampire' , 'goblin' , 'villain' , 'cyclops' , 'mummy' , 'warlock'  , 'werewolf' ,  'ghost' , 'witch' , 'ghoul' , 'zombie' , 'alarming' , 'fear' ,  'scary' , 'frighten' , 'shocking' 
, 'boo' , 'goosebumps' , 'chilling' , 'spooky' , 'creepy' , 'horrify' , 'startling' , 'eek' ,  'nightmare' , 'unnerving' , 'eerie' , 'petrified' ,  'wicked' ,  'boogers' , 'mucus' , 'revolting' , 'goo' , 'ooze' , 'rotten' , 'gory' , 'pus' , 'slimy' , 'icky' , 'repulsive' , 'snot' , 'blood' 
, 'eyeballs' , 'heart' , 'bones' , 'lungs' , 'brain' , 'finger' , 'skeleton' ,  'cadaver' , 'guts' , 'skull' , 'apparition' , 'ectoplasm' , 'phantom' ,  'cemetery' , 'ghastly' , 'poltergeist' ,  'coffin' , 'ghoul' , 'reanimated' , 'corpse' , 'graveyard' , 'spirit' , 'dead' , 'tombstone'

];

// Initialize Game
function init(){
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    //start matching word input
    wordInput.addEventListener('input', startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    // check game status
    setInterval(checkStatus, 50);
};

//Start match
function startMatch(){
    if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
    }
    //if score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else{
        scoreDisplay.innerHTML = score;
}
}
//match current word to word input
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = '! ! Correct ! !';
        return true;
    } else{
        message.innerHTML = '';
        return false;
    }
}

// pick & show random word
function showWord(words){
    // generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // output random word
    currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
    // make sure time is run out
    if(time > 0){
        //decrement
        time--;
    } else if(time=== 0) {
        // game is over
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if (!isPlaying && time === 0){
        message.innerHTML = '! ! !GAME OVER! ! !';
        score = -1;
    }
}