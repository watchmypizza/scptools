document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('switchmap');
    const maps = document.querySelectorAll('.map-container');
    let currentIndex = 0;

    // Initialize the first map as visible
    maps[currentIndex].classList.add('active');

    function switchMap() {
        // Hide the current map
        maps[currentIndex].classList.remove('active');

        // Calculate the index of the next map
        currentIndex = (currentIndex + 1) % maps.length;

        // Show the next map
        maps[currentIndex].classList.add('active');
    }

    // Add event listener to the button
    btn.addEventListener('click', switchMap);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const backBtn = document.getElementById('back');

    backBtn.addEventListener('click', function() {
        window.location.href = '../index.html';
    });
});