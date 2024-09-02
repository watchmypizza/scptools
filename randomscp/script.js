const getLink = document.getElementById('genlink');
const result = document.getElementById('result');
const backbtn = document.getElementById('back');
let clicked = 0;
let randomNumber = 0; // Declare randomNumber in a wider scope

function generatescpwikiarticlenumberflooredwithmath() {
    randomNumber = Math.floor(Math.random() * 7000) + 1;
    result.innerText = "https://scp-wiki.wikidot.com/scp-" + randomNumber;
}

getLink.onclick = function() {
    if (clicked === 0) {
        getLink.innerText = "Visit Link";
        generatescpwikiarticlenumberflooredwithmath();
        clicked = 1;
    } else if (clicked === 1) {
        window.open("https://scp-wiki.wikidot.com/scp-" + randomNumber, '_blank');
    }
}

// Corrected back button functionality
backbtn.onclick = function() {
    window.location.href = "../index.html";
};
