const texts = ["Programmer", "Game Developer", "Software Developer", "UI Perfectionist", "Web Developer", "Automation Scripter"];
const typingSpeed = 50;
const waitTime = 4000;

// let >> var, let apparently better
let wordIndex = 0;
let letterIndex = 0;

function typeWriter() {
    const currentWord = texts[wordIndex]; // Keeps track of current word
    const currentLetter = currentWord.slice(0, ++letterIndex);

    document.getElementById("typing").innerHTML = currentLetter;

    // If the word is finished
    if (letterIndex === currentWord.length) {
        // Pause before starting the next word
        setTimeout(() => {
            letterIndex = 0;
            wordIndex = (wordIndex + 1) % texts.length; // Move to next word and loop
            typeWriter();
        }, waitTime);
    } else {
        // Continue typing the current word
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = () => {
    typeWriter();
};
