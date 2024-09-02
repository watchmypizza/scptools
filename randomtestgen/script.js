document.addEventListener('DOMContentLoaded', function() {
    const generatebtn = document.getElementById('generate');
    const result = document.getElementById('result');
    const select = document.getElementById('sector');
    const visitlinkbtn = document.getElementById('visitlink');
    const backbtn = document.getElementById('back');

    const con1 = {
        "scp-403": { cd: 3, class: "safe" },
        "scp-1499": { cd: 3, class: "safe" },
        "scp-207": { cd: 1, class: "safe" },
        "scp-1193": { cd: 3, class: "safe" },
        "scp-713": { cd: 1, class: "safe" },
        "scp-330": { cd: 2, class: "safe" },
        "scp-860": { cd: 3, class: "safe" },
        "scp-498": { cd: 4, class: "safe" },
        "scp-1025": { cd: 4, class: "safe" },
        "scp-999": { cd: 4, class: "safe" },
        "scp-914": { cd: 1, class: "safe" },
        "scp-517": { cd: 2, class: "safe" },
        "scp-120": { cd: 4, class: "safe" },
        "scp-148": { cd: 3, class: "euclid" },
        "scp-178": { cd: 4, class: "euclid" },
        "scp-1139": { cd: 5, class: "euclid" },
        "scp-087": { cd: 6, class: "euclid" },
        "scp-224": { cd: 4, class: "euclid" },
        "scp-902": { cd: 2, class: "keter" }
    };

    const con2 = {
        "scp-1162": { cd: 4, class: "safe" },
        "scp-701-1": { cd: 5, class: "euclid" },
        "scp-008": { cd: 6, class: "euclid" },
        "scp-2059": { cd: 5, class: "euclid" },
        "scp-173": { cd: 5, class: "euclid" },
        "scp-093": { cd: 4, class: "euclid" },
        "scp-035": { cd: 4, class: "keter" },
        "scp-409": { cd: 5, class: "keter" },
        "scp-|--|-----|--|-|": { cd: 3, class: "keter" }
    };

    const conx = {
        "scp-049": { cd: 4, class: "euclid" },
        "scp-096": { cd: "NO LIMIT", class: "euclid" },
        "scp-2006": { cd: 6, class: "keter" },
        "scp-939": { cd: 10, class: "keter" },
        "scp-457": { cd: 4, class: "keter" },
        "scp-106": { cd: 4, class: "keter" },
        "scp-017": { cd: 4, class: "keter" },
        "scp-610": { cd: "NO TESTING", class: "keter" }
    };

    function randomGen() {
        let selectedCon;

        switch (select.value) {
            case '1':
                selectedCon = Object.entries(con1).map(([name, details]) => ({ name, details, source: 'con1' }));
                break;
            case '2':
                selectedCon = Object.entries(con2).map(([name, details]) => ({ name, details, source: 'con2' }));
                break;
            case 'X':
                selectedCon = Object.entries(conx).map(([name, details]) => ({ name, details, source: 'conx' }));
                break;
            default:
                selectedCon = [
                    ...Object.entries(con1).map(([name, details]) => ({ name, details, source: 'con1' })),
                    ...Object.entries(con2).map(([name, details]) => ({ name, details, source: 'con2' })),
                    ...Object.entries(conx).map(([name, details]) => ({ name, details, source: 'conx' })),
                ];
                break;
        }

        const randomIndex = Math.floor(Math.random() * selectedCon.length);
        return selectedCon[randomIndex];
    }

    let wikidotLink;

    function generateTest() {
        const randomSCP = randomGen();
        if (randomSCP) {
            result.innerText = `Name: ${randomSCP.name.toUpperCase()}, CD: ${randomSCP.details.cd}, Class: ${randomSCP.details.class.toUpperCase()}, Con: ${randomSCP.source.toUpperCase()}`;
            let link = `https://scp-wiki.wikidot.com/${randomSCP.name}`;
            wikidot.innerText = link;
            wikidotLink = link;
        } else {
            result.innerText = "No object selected";
        }
    }

    generatebtn.addEventListener('click', function() {
        generateTest();
    });

    visitlinkbtn.addEventListener('click', function() {
        window.open(wikidotLink);
    });

    backbtn.addEventListener('click', function() {
        window.location.href = '../index.html';
    });
});