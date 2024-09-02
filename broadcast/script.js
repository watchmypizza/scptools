function createBroadcast() {
    const messageElement = document.getElementById('message');
    const message = messageElement.value; // Retrieve the latest value from the input field
    const siteStatus = document.getElementById('siteStatus').value;
    const threatLevel = document.getElementById('threatLevel').value;
    const testingPerms = document.getElementById('testingPerms').value;
    const cdriot = document.getElementById('cdriot');
    const splitter = document.getElementById('splitter').value;

    let broadcastMessage;

    if (message.trim() === "") { 
        broadcastMessage = `/broadcast ${splitter} Status: ${siteStatus} ${splitter} Threat Level: ${threatLevel} ${splitter} Tests: ${testingPerms}`;
    } else {
        broadcastMessage = `/broadcast ${splitter} Status: ${siteStatus} ${splitter} Threat Level: ${threatLevel} ${splitter} Tests: ${testingPerms} ${splitter} ${message}`;
    }

    document.getElementById('result').innerText = broadcastMessage;
}


const backbtn = document.getElementById('back');
backbtn.addEventListener('click', function() {
    window.location.href = '../index.html';
});


const cdriot = document.getElementById('cdriot');
const messageElement = document.getElementById('message');
const testingPerms = document.getElementById('testingPerms');
const stupidlabel = document.getElementById('stupidlabel');
let previousMessage = '';

cdriot.addEventListener('change', function() {
    if (cdriot.value.trim() === "") {
        messageElement.style.visibility = 'visible';
        stupidlabel.style.visibility = 'visible';
        testingPerms.value = "No Perms needed";
        messageElement.value = previousMessage;
    } else {
        messageElement.style.visibility = 'hidden';
        stupidlabel.style.visibility = 'hidden';
        previousMessage = messageElement.value;
        messageElement.value = "";
    }
    if (cdriot.value.trim() == "neutral") {
        messageElement.value = 'Class - D are currently behaving neutral. Inform SiD+ if CD begin rioting.';
    } else if (cdriot.value.trim() == "Singular Riots") {
        messageElement.value = "Several CLass - D are rioting at the moment. Contact SiD+ if rioting stopped or advanced.";
    } else if (cdriot.value.trim() == "Multiple aggressive CD") {
        messageElement.value = "Multiple aggressive CD engaging in rioting. Do not open Class D gates. Contact SiD+ for behavior changes.";
    } else if (cdriot.value.trim() == "riot") {
        testingPerms.value = "Halted";
        messageElement.value = "Task Force report to CDC immediately. RRT report to Con-X Checkpoint immediately.";
    }
});
