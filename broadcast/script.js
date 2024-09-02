function createBroadcast() {
    const siteStatus = document.getElementById('siteStatus').value;
    const threatLevel = document.getElementById('threatLevel').value;
    const testingPerms = document.getElementById('testingPerms').value;
    const message = document.getElementById('message').value;
    const splitter = document.getElementById('splitter').value;

    // Initialize broadcastMessage variable
    let broadcastMessage;

    if (message.trim() === "") { // Check if the message is empty
        broadcastMessage = `/broadcast ${splitter} Status: ${siteStatus} ${splitter} Threat: ${threatLevel} ${splitter} Tests: ${testingPerms}`;
    } else {
        broadcastMessage = `/broadcast ${splitter} Status: ${siteStatus} ${splitter} Threat: ${threatLevel} ${splitter} Tests: ${testingPerms} ${splitter} ${message}`;
    }

    document.getElementById('result').innerText = broadcastMessage;
}

// Attach the event listener correctly to the back button
const backbtn = document.getElementById('back');
backbtn.addEventListener('click', function() {
    window.location.href = '../index.html';
});
