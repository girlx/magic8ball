// Make an array
const answer = [
    './img/strawberry1.png',
    './img/strawberry2.png',
    './img/strawberry3.png',
    './img/strawberry4.png',
    './img/strawberry5.png',
    './img/strawberry6.png',
    './img/strawberry7.png',
    './img/strawberry8.png',
    './img/strawberry9.png',
    './img/strawberry10.png',
    './img/strawberry11.png',
    './img/strawberry12.png',
    './img/strawberry13.png',
    './img/strawberry14.png',
]

// Insert default image
const defaultImage = document.getElementById('defaultImage');
defaultImage.src = './img/strawberry0.png';
defaultImage.style.width = '500px';

// Add button
const button = document.querySelector("#button");

// Make input work
const input = document.getElementById("input");

// Make button work
button.addEventListener("click", function() {
    if (input.value.length <1) {
    alert("Please ask a question!")
    } else {
        shake();
        
    }
})

// Shake function
function shake() {
    button.disabled = true;
    // button.classList.toggle("shakeButtonDisplay");
    defaultImage.classList.add('shake'); // add shaking feature
    document.getElementById('input').value = ""; // clear input field after submit
    
    // after shake, wait 1 second then execute below codes
    
    setTimeout(function() {
        changeAnswer();
        defaultImage.classList.remove('shake');
        button.disabled = false; // enable the button

    }, 1000); // 1000 = 1 seconds. Everything inside this setTimeout function execute after 1 second.
}

// Display new answer
function changeAnswer() {
    defaultImage.src = answer[Math.floor(Math.random() * answer.length)];
    console.log("defaultImage", answer[Math.floor(Math.random() * answer.length)])
}

