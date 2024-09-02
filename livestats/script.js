document.addEventListener('DOMContentLoaded', function() {
    const gameId = '1165835263';
    
    async function fetchGameData() {
        console.log('REFRESHED!');
        try {
            const proxyUrl = 'https://api.allorigins.win/raw?url=';
            const timestamp = new Date().getTime();
            const apiUrl = `https://games.roblox.com/v1/games?universeIds=${gameId}&timestamp=${timestamp}`;
            const response = await fetch(proxyUrl + encodeURIComponent(apiUrl), {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            // Rest of the code remains the same...
            
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
    setInterval(fetchGameData, 5000);
    
    const backbtn = document.getElementById('back');
    backbtn.addEventListener('click', function() {
        window.location.href = "../index.html";
    });
});