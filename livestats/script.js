document.addEventListener('DOMContentLoaded', function() {
    const gameId = '1165835263';

    async function fetchGameData() {
        console.log('Fetching game data...');
        
        try {
            // Construct the target API URL
            const apiUrl = `https://games.roblox.com/v1/games?universeIds=${gameId}&timestamp=${new Date().getTime()}`;
            
            // Use cors-anywhere as the proxy
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
            const fullUrl = proxyUrl;
            
            // Fetch data from the proxied URL
            const response = await fetch(fullUrl);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            const data = JSON.parse(responseData.contents); // allorigins wraps the response in a `contents` field
            console.log('Data fetched:', data); // Debug log to view fetched data

            if (data && Array.isArray(data.data) && data.data.length > 0) {
                const currentPlayers = data.data[0].playing || 'N/A'; 
                const currentLikes = data.data[0].favoritedCount || 'N/A';
                const currentVisits = data.data[0].visits || 'N/A';
                const lastUpdatedTimestamp = data.data[0].updated || Date.now();
                const lastUpdatedDate = new Date(lastUpdatedTimestamp);
                const lastUpdated = lastUpdatedDate.toLocaleString();

                document.getElementById('current-players').textContent = `Current Players: ${currentPlayers}`;
                document.getElementById('current-likes').textContent = `Current Favorites: ${currentLikes}`;
                document.getElementById('current-visits').textContent = `Current Visits: ${currentVisits}`;
                document.getElementById('last-updated').textContent = `Last Updated: ${lastUpdated}`;
            } else {
                throw new Error('Invalid data structure in API response');
            }
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
    setInterval(fetchGameData, 1555); // Refresh every 5 seconds

    const backbtn = document.getElementById('back');
    backbtn.addEventListener('click', function() {
        window.location.href = "../index.html";
    });
});
