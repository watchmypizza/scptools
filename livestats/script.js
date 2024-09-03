document.addEventListener('DOMContentLoaded', function() {
    const gameId = '1165835263';

    async function fetchGameData() {
        console.log('Fetching game data...');
        
        try {
            // Construct the target API URL
            const apiUrl = `https://games.roblox.com/v1/games?universeIds=${gameId}`;
            
            // Encode the API URL for safe inclusion in the proxy URL
            const proxyUrl = 'https://corsproxy.io/?';
            const fullUrl = proxyUrl + encodeURIComponent(apiUrl);
            
            // Fetch data from the proxied URL
            const response = await fetch(fullUrl);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Data fetched:', data); // Debug log to view fetched data

            const currentPlayers = data.data[0]?.playing || 'N/A'; 
            const currentLikes = data.data[0]?.favoritedCount || 'N/A';
            const currentVisits = data.data[0]?.visits || 'N/A';
            const lastUpdatedTimestamp = data.data[0]?.updated || Date.now();
            const lastUpdatedDate = new Date(lastUpdatedTimestamp);
            const lastUpdated = lastUpdatedDate.toLocaleString();

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

    fetchGameData();
    console.log('Setting interval to refresh every 5 seconds');
    setInterval(fetchGameData, 5000); // Refresh every 5 seconds

    const backbtn = document.getElementById('back');
    backbtn.addEventListener('click', function() {
        window.location.href = "../index.html";
    });
});
