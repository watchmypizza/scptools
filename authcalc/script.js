document.addEventListener("DOMContentLoaded", () => {
    // Get the HTML elements for the first player/team inputs
    const playerLevel1Input = document.getElementById("playerLevel1");
    const teamLevel1Input = document.getElementById("teamLevel1");
    const playerTeam1Input = document.getElementById("playerTeam1");
    const authorityScore1Output = document.getElementById("authorityScore1");

    // Get the HTML elements for the second player/team inputs
    const playerLevel2Input = document.getElementById("playerLevel2");
    const teamLevel2Input = document.getElementById("teamLevel2");
    const playerTeam2Input = document.getElementById("playerTeam2");
    const authorityScore2Output = document.getElementById("authorityScore2");

    // Element to display comparison results
    const resultText = document.getElementById("resultText");

    // Function to update the first player's authority score
    function updateAuthorityScore1() {
        const playerLevel1 = parseFloat(playerLevel1Input.value);
        const teamLevel1 = parseFloat(teamLevel1Input.value);
        const playerTeam1 = parseFloat(playerTeam1Input.value);

        const authorityScore1 = Math.round(playerLevel1 * 2 + teamLevel1 * playerTeam1);
        authorityScore1Output.value = authorityScore1;
        compareAuthorityScores(authorityScore1, parseFloat(authorityScore2Output.value));
    }

    // Function to update the second player's authority score
    function updateAuthorityScore2() {
        const playerLevel2 = parseFloat(playerLevel2Input.value);
        const teamLevel2 = parseFloat(teamLevel2Input.value);
        const playerTeam2 = parseFloat(playerTeam2Input.value);

        const authorityScore2 = Math.round(playerLevel2 * 2 + teamLevel2 * playerTeam2);
        authorityScore2Output.value = authorityScore2;
        compareAuthorityScores(parseFloat(authorityScore1Output.value), authorityScore2);
    }

    // Function to compare the two authority scores and display the result
    function compareAuthorityScores(score1, score2) {
        if (score1 > score2) {
            resultText.textContent = "Left side has a larger authority score.";
        } else if (score1 < score2) {
            resultText.textContent = "Right side has a larger authority score.";
        } else {
            resultText.textContent = "Both sides have the same authority score.";
        }
    }

    // Add event listeners to update authority scores when inputs change
    playerLevel1Input.addEventListener("input", updateAuthorityScore1);
    teamLevel1Input.addEventListener("input", updateAuthorityScore1);
    playerTeam1Input.addEventListener("input", updateAuthorityScore1);

    playerLevel2Input.addEventListener("input", updateAuthorityScore2);
    teamLevel2Input.addEventListener("input", updateAuthorityScore2);
    playerTeam2Input.addEventListener("input", updateAuthorityScore2);

    // (Optional) Code to make a card move with the mouse
    const card = document.querySelector(".card");
    if (card) {
        window.addEventListener("mousemove", (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }
});

const backbtn = document.querySelector('.back-btn');
backbtn.addEventListener('click', () => {
    window.location.href = '../index.html';
});