document.addEventListener('DOMContentLoaded', function () {


    function createBroadcast() {
        const messageElement = document.getElementById('message');
        const message = messageElement.value;
        const siteStatus = document.getElementById('siteStatus').value;
        const threatLevel = document.getElementById('threatLevel').value;
        const testingPerms = document.getElementById('testingPerms').value;
        const template = document.getElementById('tmplate');
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
    backbtn.addEventListener('click', function () {
        window.location.href = '../index.html';
    });

    const bcbtn = document.getElementById('taxcollectors');
    bcbtn.addEventListener('click', function () {
        createBroadcast();
    });

    const template = document.getElementById('tmplate');
    const messageElement = document.getElementById('message');
    const testingPerms = document.getElementById('testingPerms');
    const stupidlabel = document.getElementById('stupidlabel');
    const sector = document.getElementById('sector');
    const scp = document.getElementById('scp');
    const scpLabel = document.getElementById('scpLabel');
    const sectorLabel = document.getElementById('sectorLabel')
    let previousMessage = '';

    sector.style.display = 'none';
    scp.style.display = 'none';
    sectorLabel.style.display = 'none';
    scpLabel.style.display = 'none';

    template.addEventListener('change', function () {
        if (template.value.trim() === "") {
            messageElement.style.display = 'block';
            stupidlabel.style.display = 'block';
            testingPerms.value = "No Perms needed";
            messageElement.value = "";
            sector.style.display = 'none';
            scp.style.display = 'none';
            sectorLabel.style.display = 'none';
            scpLabel.style.display = 'none';
        } else if (template.value.trim() === "singlebreach") {
            messageElement.style.visibility = 'block';
            stupidlabel.style.visibility = 'block';
            previousMessage = messageElement.value;
            messageElement.value = "";
            sector.style.display = 'block';     // Shows the sector input field
            scp.style.display = 'block';        // Shows the SCP input field
            sectorLabel.style.display = 'block';     // Shows the Sector label
            scpLabel.style.display = 'block';        // Shows the SCP label
        } else {
            messageElement.style.display = 'none';
            stupidlabel.style.display = 'none';
            previousMessage = messageElement.value;
            messageElement.value = "";
            sector.style.display = 'none';
            scp.style.display = 'none';
            sectorLabel.style.display = 'none';
            scpLabel.style.display = 'none';
        }

        if (template.value.trim() === "neutral") {
            messageElement.value = 'Class - D are currently behaving neutral. Inform SiD+ if CD begin rioting.';
        } else if (template.value.trim() === "Singular Riots") {
            messageElement.value = "Several Class - D are rioting at the moment. Contact SiD+ if rioting stopped or advanced.";
        } else if (template.value.trim() === "Multiple aggressive CD") {
            messageElement.value = "Multiple aggressive CD engaging in rioting. Do not open Class D gates. Contact SiD+ for behavior changes.";
        } else if (template.value.trim() === "riot") {
            testingPerms.value = "Halted";
            messageElement.value = "Task Force report to CDC immediately. RRT report to Con-X Checkpoint immediately.";
        } else if (template.value.trim() === "emergencies") {
            messageElement.value = "All available combatants should respond to emergencies as soon as possible.";
        } else if (template.value.trim() === "hivemind") {
            testingPerms.value = "Halted";
            siteStatus.value = "Lockdown";
            threatLevel.value = "High";
            messageElement.value = "The flesh that hates, designated SCP - 610 has breached its containment All Beta - 7 Maz Hatters respond to the current situation immediately.";
        } else if (template.value.trim() === "powerfail") {
            testingPerms.value = "Halted";
            messageElement.value = "RRT respond to generators immediately.";
        } else if (template.value.trim() === "blackout") {
            testingPerms.value = "Halted";
            messageElement.value = "There is an ongoing blackout in progress, all NTF and RRT are to respond immediately.";
        } else if (template.value.trim() === "plague") {
            testingPerms.value = "Halted";
            messageElement.value = "SCP-008 has breached containment, Beta 7 Maz Hatters are to respond immediately.";
        } else if (template.value.trim() === "multiplebreaches") {
            testingPerms.value = "Halted";
            messageElement.value = "The site is experiencing multiple Keter and Euclid level containment breaches, all recontainment units are to respond immediately!";
        } else if (template.value.trim() === "singlebreach") {
            messageElement.value = `${scp.value} has breached containment in ${sector.value}, all recontainment units are to respond immediately!`
        } else if (template.value.trim() === "nuking") {
            messageElement.value = "The site is in critical condition, the Alpha Warhead protocol has been initiated, we ask all personnel to respond to the Warhead Shelter immediately!";
        } else if (template.value.trim() === "candle") {
            messageElement.value = "SCP - 310 has breached containment, all personnel be advised. Beta 7 Maz Hatters respond immediately!";
        } else if (template.value.trim() === "able") {
            messageElement.value = "SCP - 076 designated Able has breached containment in lower containment X, all combative units respond immediately!";
        }
    });
});
