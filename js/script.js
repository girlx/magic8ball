// Make an array of all possible answers using images with answers written on them. You can make your own images or you can choose to not use any images and just use words.
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

// Insert default image, which will shows up at the beginning of your session. When you refresh the browser instead of using the button to submit the question, the default image will show instead of any of the answer images.

    const defaultImage = document.getElementById('defaultImage'); // you can use any name you want so for here I use 'defaultImage' as the name. See index file where it is the ID name for 'input' field.

    defaultImage.src = './img/strawberry0.png'; // attach the defaultImage URL. Here I attach directly from the img folder.

    defaultImage.style.width = '500px'; // you can change the size of the image but I use 500px because that is the original size of all the images used.

// Add button
    const button = document.querySelector("#button");

// Make input field work
    const input = document.getElementById("input");

// Styling for alert box
    var ALERT_TITLE = "oh no!";
    var ALERT_BUTTON_TEXT = "okay";

    if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
    }

    function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visibility="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";
  
}

function removeCustomAlert() {
  document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

// Make button work
    button.addEventListener("click", function() {
        if (input.value.length <1) { // if the value of what you put in the input field is less than 1, meaning there is no content then you will receive the alert on the next line.
        alert("Please ask a question in the box!") // this alert will pop up if you put nothing in the box but hit the shake button anyways.
        } else { // this means if the above didn't happen, such that you actually input a question and hit the shake button...
            shake(); // ...then the image shake with this code. This code invoke the shake function below.
        }
    })

// Shake function
function shake() {
    button.disabled = true;
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

// Collapsible footer
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
