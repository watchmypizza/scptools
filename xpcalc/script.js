const calcBtn = document.getElementById('calculateBtn')
const crntxp = document.getElementById('currentXP')
const desxp = document.getElementById('desiredXP')
const result = document.getElementById('result')

function calculateXP() {
    const currentXP = parseInt(crntxp.value)
    const desiredXP = parseInt(desxp.value)

    if (isNaN(currentXP) || isNaN(desiredXP)) {
        result.innerText = "Please enter valid numbers."
        return
    }

    // Calculate the XP difference
    const xpDifference = desiredXP - currentXP;

    // Check if current XP is already greater than or equal to desired XP
    if (xpDifference <= 0) {
        result.innerText = "You already have the desired or more XP."
        return
    }

    // XP gain rate (15 XP per minute)
    const xpPerMinute = 15;

    // Calculate the minutes required to reach the desired XP
    const minutesRequired = xpDifference / xpPerMinute;

    // Display the result
    result.innerText = `You need to play for ${minutesRequired.toFixed(2)} minutes to reach ${desiredXP} XP from ${currentXP} XP.`;
}

calcBtn.addEventListener('click', calculateXP);

function updateXPList() {
    // Hide all lists
    const lists = document.querySelectorAll('.xp-ul');
    lists.forEach(list => list.classList.remove('active'));

    // Get the selected team
    const selectedTeam = document.getElementById('teamSelect').value;

    // Show the corresponding list
    document.getElementById(selectedTeam + '-list').classList.add('active');
}

// Initialize with the default team
window.onload = function() {
    updateXPList();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const backBtn = document.getElementById('back');

    backBtn.addEventListener('click', function() {
        window.location.href = '../index.html';
    });
});