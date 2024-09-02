const itemRecipes = {
    AK74: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    Bandages: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    Blowtorch: {
        Coarse: "Nothing",
        Rough: "Coffee",
        "1:1": "Crowbar",
        Fine: "Hacking Tool",
        "Very Fine": "Vent Cover",
    },
    Cage: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    Candy: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    Cassette: {
        Coarse: "Nothing",
        Rough: "Photo",
        "1:1": "Cassette",
        Fine: "Cassette",
        "Very Fine": "Cassette",
    },
    Clipboard: {
        Coarse: "Nothing",
        Rough: "Coffee",
        "1:1": "Food Tray",
        Fine: "Flashlight",
        "Very Fine": "Glock-17",
    },
    Coffee: {
        Coarse: "Nothing",
        Rough: "Clipboard",
        "1:1": "Clipboard",
        Fine: "Orange Food",
        "Very Fine": "Pizza",
    },
    Crowbar: {
        Coarse: "Nothing",
        Rough: "Vent Map",
        "1:1": "Flashlight",
        Fine: "Vent Cover",
        "Very Fine": "Blowtorch",
    },
    "Desert Eagle": {
        Coarse: "Nothing",
        Rough: "Coffee",
        "1:1": "G17",
        Fine: "MP5SD",
        "Very Fine": "Green Food",
    },
    FAMAS: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    "First Aid Kit": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    Flashlight: {
        Coarse: "Nothing",
        Rough: "Crowbar",
        "1:1": "Vent Cover",
        Fine: "Coffee",
        "Very Fine": "Blowtorch",
    },
    "Food Tray": {
        Coarse: "Nothing",
        Rough: "Green Food",
        "1:1": "Coffee",
        Fine: "First Aid Kit",
        "Very Fine": "Coffee",
    },
    "Hacking Tool": {
        Coarse: "Nothing",
        Rough: "Vent Map",
        "1:1": "First Aid Kit",
        Fine: "Flashlight",
        "Very Fine": "Pizza",
    },
    "Glock-17": {
        Coarse: "Nothing",
        Rough: "Coffee",
        "1:1": "UMP",
        Fine: "Clipboard",
        "Very Fine": "Flashlight",
    },
    G17: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    "Green Food": {
        Coarse: "Nothing",
        Rough: "Food Tray",
        "1:1": "Red Food",
        Fine: "Coffee",
        "Very Fine": "Crowbar",
    },
    Handcuffs: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    HK416: {
        Coarse: "Nothing",
        Rough: "Iron Bars",
        "1:1": "P90",
        Fine: "Riot Shield",
        "Very Fine": "Desert Eagle",
    },
    "ID Card": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    "Iron Bars": {
        Coarse: "Nothing",
        Rough: "Crowbar",
        "1:1": "Wood Planks",
        Fine: "Blowtorch",
        "Very Fine": "Vent Cover",
    },
    Lavender: {
        Coarse: "Nothing",
        Rough: "Pizza",
        "1:1": "Pizza",
        Fine: "Pizza",
        "Very Fine": "FAMAS",
    },
    "Lost Vent Map": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    MasterCuffs: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    Medbag: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    Medkit: {
        Coarse: "Nothing",
        Rough: "Orange Food",
        "1:1": "Mop",
        Fine: "Food Tray",
        "Very Fine": "Pizza",
    },
    Mop: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Red Food",
        Fine: "Coffee",
        "Very Fine": "Flashlight",
    },
    MP5SD: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    M249: {
        Coarse: "Nothing",
        Rough: "Iron Bars",
        "1:1": "HK416",
        Fine: "MP5SD",
        "Very Fine": "Desert Eagle",
    },
    M4A1: {
        Coarse: "Nothing",
        Rough: "Pizza",
        "1:1": "Stolen M4A1",
        Fine: "HK416",
        "Very Fine": "Vent Cover",
    },
    "Orange Food": {
        Coarse: "Nothing",
        Rough: "Food Tray",
        "1:1": "Red Food",
        Fine: "Green Food",
        "Very Fine": "Crowbar",
    },
    Photo: {
        Coarse: "Nothing",
        Rough: "Cassette",
        "1:1": "Photo",
        Fine: "Photo",
        "Very Fine": "Photo",
    },
    Pizza: {
        Coarse: "Nothing",
        Rough: "Red Food",
        "1:1": "Food Tray",
        Fine: "First Aid Kit",
        "Very Fine": "Random",
    },
    P90: {
        Coarse: "Nothing",
        Rough: "Pizza",
        "1:1": "Vent Cover",
        Fine: "UMP",
        "Very Fine": "Mop",
    },
    "Red Food": {
        Coarse: "Nothing",
        Rough: "Food Tray",
        "1:1": "Orange Food",
        Fine: "Green Food",
        "Very Fine": "Crowbar",
    },
    "Riot Shield": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Mop",
        Fine: "Random",
        "Very Fine": "Flashlight",
    },
    "SCAR-H": {
        Coarse: "Nothing",
        Rough: "Pizza",
        "1:1": "HK416",
        Fine: "Blowtorch",
        "Very Fine": "UMP",
    },
    "SCP-198": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    "SCP-330": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    "SCP-701-1": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    "SCP-860": {
        Coarse: "Nothing",
        Rough: "Crowbar",
        "1:1": "Vent Map",
        Fine: "Iron Bars",
        "Very Fine": "SCP-198",
    },
    "SCP-1025": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    "Stolen M4A1": {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "HK416",
        Fine: "AK74",
        "Very Fine": "M249",
    },
    Taser: {
        Coarse: "Nothing",
        Rough: "Random",
        "1:1": "Random",
        Fine: "Random",
        "Very Fine": "Random",
    },
    Teddy: {
        Coarse: "Nothing",
        Rough: "G17",
        "1:1": "Vent Map",
        Fine: "Clipboard",
        "Very Fine": "First Aid Kit",
    },
    UMP: {
        Coarse: "Nothing",
        Rough: "Red Food",
        "1:1": "P90",
        Fine: "Riot Shield",
        "Very Fine": "Vent Map",
    },
    "Vent Cover": {
        Coarse: "Nothing",
        Rough: "Crowbar",
        "1:1": "Iron Bars",
        Fine: "Nothing",
        "Very Fine": "Random",
    },
    "Vent Map": {
        Coarse: "Nothing",
        Rough: "Red Food",
        "1:1": "Crowbar",
        Fine: "Flashlight",
        "Very Fine": "Blowtorch",
    },
    "Wood Planks": {
        Coarse: "Nothing",
        Rough: "Mop",
        "1:1": "Iron Bars",
        Fine: "Crowbar",
        "Very Fine": "Vent Cover",
    },
};

function generateRecipe() {
    const startItem = document.getElementById("startItem").value;
    const desiredItem = document.getElementById("desiredItem").value;
    const pathAndSettings = findShortestRecipePath(startItem, desiredItem);
    if (pathAndSettings.path.length > 0) {
        const recipe = pathAndSettings.path.map((item, index) => {
            if (index < pathAndSettings.settings.length) {
                return `${item} on ${pathAndSettings.settings[index]}`;
            }
            return item;
        }).join(" -> ");
        document.getElementById("recipe").textContent = `Recipe: ${recipe}`;
    } else {
        document.getElementById("recipe").textContent = "No recipe found.";
    }
}

function findShortestRecipePath(startItem, desiredItem) {
    const queue = [{ item: startItem, path: [], settings: [] }];
    const visitedItems = new Set();
    let shortestPath = null;

    while (queue.length > 0) {
        const { item, path, settings } = queue.shift();

        if (item === desiredItem) {
            if (!shortestPath || settings.length < shortestPath.settings.length) {
                shortestPath = { path, settings };
            }
            continue;
        }

        if (visitedItems.has(item)) {
            continue;
        }
        visitedItems.add(item);

        const recipes = itemRecipes[item];
        if (recipes) {
            for (const [setting, result] of Object.entries(recipes)) {
                if (result !== "Nothing" && !visitedItems.has(result)) {
                    queue.push({
                        item: result,
                        path: [...path, item],
                        settings: [...settings, setting]
                    });
                }
            }
        }
    }

    return shortestPath || { path: [], settings: [] };
}

function rawoutputs() {
    window.location.href = "./rawoutputs/rawoutputs.html";
}

document.getElementById("generateButton").addEventListener("click", generateRecipe);
document.getElementById("rawoutputs").addEventListener('click', rawoutputs);
document.getElementById('backbtn').addEventListener('click', function() {
    window.location.href = "../index.html";
})