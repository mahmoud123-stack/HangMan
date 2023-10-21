const Letters = "abcdefghijklmnopqrstuvwxyz";
let ArrayOfLetters = Array.from(Letters);
let LettersContainer = document.querySelector(".letters");

ArrayOfLetters.forEach((letter) => {
    // Create Span
    let Span = document.createElement("span");
    Span.className = "letter-box";
    // Create Letter Text
    let SpanText = document.createTextNode(letter);
    // Append Letter Text To Span
    Span.appendChild(SpanText);

    //   Append Span To Letter Container
    LettersContainer.appendChild(Span);
});

// Words Object 

const Words = {
    Programming: ["php", "javaScript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["prestige", "inception", "parastie", "interstaller", "whiplash", "memento", "coco", "up"],
    People: ["albert einstein", "hitchcock", "alexander", "cleopatra", "mahatma ghandi"],
    Countries: ["syria", "egypt", "palestine", "oman", "ksa", "ufa"],
};

let AllKeys = Object.keys(Words);

// Get Random Key
let RandomPropNum = Math.floor(Math.random() * AllKeys.length)
let RandomPropName = AllKeys[RandomPropNum];
let RandomPropValue = Words[RandomPropName];

// Get Random Value
let RandomValueNum = Math.floor(Math.random() * RandomPropValue.length);
let RandomValueName = RandomPropValue[RandomValueNum];


// Convert Choosen Word To Array 
let LettersFromWord = Array.from(RandomValueName);

// Select Letters Guess Element
let LettersGuessElement = document.querySelector(".letterGuess");
LettersFromWord.forEach((letter) => {
    let Letter = document.createElement("span");
    if (Letter === ' ') {
        Letter.className = "HasSpace";
    }
    // Letter.appendChild(document.createTextNode("A"))
    LettersGuessElement.appendChild(Letter);
})
// Add Property Name To Span
document.querySelector(".category span").innerHTML = RandomPropName;

// Select Letters Guess Spans
let GuessSpans = document.querySelectorAll(".letterGuess span");

// Select The Draw And Build The Logic
let WrongAttemps = 0;
let Draw = document.querySelector(".HangManDraw");


// Handling Clicking On Letters
document.addEventListener("click", (a) => {
    // Set Status 
    let WordStatus = false;
    if (a.target.className == "letter-box") {
        a.target.classList.add("Clicked")
        let TheClickedLetter = a.target.innerHTML.toLowerCase();
        // Choosen Word 

        let ChoosenWord = Array.from(RandomValueName.toLowerCase());

        ChoosenWord.forEach((WordLetter, WordIndex) => {

            if (TheClickedLetter == WordLetter) {

                WordStatus = true;

                GuessSpans.forEach((Span, spanIndex) => {
                    if (WordIndex == spanIndex) {
                        Span.innerHTML = TheClickedLetter;
                    }
                })
            }
        })

        if (WordStatus === false) {
            WrongAttemps++;
            Draw.classList.add(`Wrong-${WrongAttemps}`);
            document.getElementById("fail").play()

            if (WrongAttemps === 8) {
                LettersContainer.classList.add("finished");
                EndGame1();
            }
        }
        else {

            document.getElementById("success").play()
            // EndGame2();
        }
    }
});

// EndGame Function
function EndGame1() {
    let Div = document.createElement("div");
    let DivText = document.createTextNode(`Game Over\nThe Word Is => ${RandomValueName}`)
    Div.appendChild(DivText);
    Div.className = "PopUp";
    document.body.appendChild(Div);
    document.getElementById("fail").play();
    document.querySelector(".container").style.cssText = "opacity:.6;";
}

function EndGame2() {
    let Div = document.createElement("div");
    let DivText = document.createTextNode(`Congratuations \nThe Word Is => ${RandomValueName}`)
    Div.appendChild(DivText);
    Div.className = "PopUp";
    document.body.appendChild(Div);
    document.getElementById("sucess").play();
    document.querySelector(".container").style.cssText = "opacity:.6;";
}