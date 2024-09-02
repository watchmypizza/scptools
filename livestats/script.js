document.addEventListener('DOMContentLoaded', function() {
    const gameId = '1165835263';

    async function fetchGameData() {
        console.log('REFRESHED!')
        try {
            const proxyUrl = 'https://corsproxy.io/?';
            const apiUrl = `https://games.roblox.com/v1/games?universeIds=${gameId}`;
            const response = await fetch(proxyUrl + apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            const currentPlayers = data.data[0].playing; 
            const currentLikes = data.data[0].favoritedCount;
            const currentVisits = data.data[0].visits; 
            const lastUpdatedTimestamp = data.data[0].updated; // Example timestamp field
            const lastUpdatedDate = new Date(lastUpdatedTimestamp);
            const lastUpdated = lastUpdatedDate.toLocaleString(); // Converts to local time zone

            document.getElementById('current-players').textContent = `Current Players: ${currentPlayers}`;
            document.getElementById('current-likes').textContent = `Current Favorites: ${currentLikes}`;
            document.getElementById('current-visits').textContent = `Current Visits: ${currentVisits}`;
            document.getElementById('last-updated').textContent = `Last Updated: ${lastUpdated}`;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('current-players').textContent = 'Error fetching player data';
            document.getElementById('current-likes').textContent = 'Error fetching likes data';
            document.getElementById('current-visits').textContent = 'Error fetching visits data';
            document.getElementById('last-updated').textContent = 'Error fetching update time';
        }
    }

    // Fetch data initially
    fetchGameData();

    // Set up interval to fetch data every 5 seconds
    setInterval(fetchGameData, 500);

    const backbtn = document.getElementById('back');
    backbtn.addEventListener('click', function() {
        window.location.href = "../index.html";
    });
});
