// Selecting the back button by class
const backBtn = document.querySelector('.back-button'); // Use querySelector for class
if (backBtn) { // Check if the button exists
    backBtn.addEventListener('click', function() {
        window.location.href = "../index.html";
    });
} else {
    console.error("Back button not found");
}

// Define the lists
const list1 = [
    "SCP-999",
    "SCP-714",
    "SCP-207",
    "SCP-1025",
    "SCP-517",
    "SCP-178",
    "SCP-701-1",
    "SCP-008",
    "SCP-403",
    "SCP-173",
    "SCP-035",
    "SCP-409",
    "SCP-049",
    "SCP-096",
    "SCP-017",
    "SCP-2006",
    "SCP-939",
    "SCP-457",
    "SCP-106",
    "SCP-076",
];
const list2 = [
    "SCP-3250",
    "SCP-1193",
    "SCP-860",
    "SCP-999",
    "SCP-120",
    "SCP-1499",
    "SCP-914",
    "SCP-498",
    "SCP-207",
    "SCP-330",
    "SCP-1025",
    "SCP-517",
    "SCP-148",
    "SCP-178",
    "SCP-1139",
    "SCP-087",
    "SCP-224",
    "SCP-902",
    "SCP-701-1",
    "SCP-008",
    "SCP-2059",
    "SCP-403",
    "SCP-173",
    "SCP-093",
    "SCP-035",
    "SCP-409",
    "SCP-2521",
    "SCP-049",
    "SCP-096",
    "SCP-017",
    "SCP-2006",
    "SCP-939",
    "SCP-457",
    "SCP-106",
];
const list3 = [
    "SCP-999",
    "SCP-714",
    "SCP-207",
    "SCP-1025",
    "SCP-517",
    "SCP-148",
    "SCP-178",
    "SCP-1139",
    "SCP-224",
    "SCP-403",
    "SCP-035",
];

// Function to select random words
function selectRandomWords() {
    const useList3 = document.getElementById("legal").checked;
    console.log(`Checkbox 'legal' is ${useList3 ? 'checked' : 'unchecked'}`);
    const selectedList1 = useList3 ? list3 : list1;
    const selectedList2 = list2;

    let word1 = selectedList1[Math.floor(Math.random() * selectedList1.length)];
    let word2;
    do {
        word2 = selectedList2[Math.floor(Math.random() * selectedList2.length)];
    } while (word2 === word1);

    console.log(`Selected words: ${word1}, ${word2}`);
    return [word1, word2];
}

// Function to display result
function displayResult() {
    const [word1, word2] = selectRandomWords();
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.innerHTML = `Crosstest: ${word1} and ${word2}`;
        console.log(`Result updated: Crosstest: ${word1} and ${word2}`);
    } else {
        console.error("Result div not found");
    }
}

// Selecting the generate button by class
const genbtn = document.querySelector('.generate-button'); // Use querySelector for class
if (genbtn) { // Check if the button exists
    genbtn.addEventListener('click', displayResult);
} else {
    console.error("Generate button not found");
}
