addEventListener('DOMContentLoaded', function() {
    const backbtn = document.querySelector('.back');
    const discord = document.getElementById('discord');
    const tiktok = document.getElementById('tiktok');
    const roblox = document.getElementById('roblox');
    const spotify = document.getElementById('spotify');
    const steam = document.getElementById('steam');

    backbtn.addEventListener('click', function() {
        window.location.href = "../index.html";
    });

    discord.addEventListener('click', function() {
        window.open('https://discord.gg/jNKSt4xBbW');
    });
    tiktok.addEventListener('click', function() {
        window.open('https://www.tiktok.com/@islippedonsoappbf');
    });
    roblox.addEventListener('click', function() {
        window.open('https://www.roblox.com/users/574981033/profile');
    });
    spotify.addEventListener('click', function() {
        window.open('https://open.spotify.com/user/31ml73pq3gkmdw7w5mucy6ayw2tm?si=d6e25c36404c4ab7');
    });
    steam.addEventListener('click', function() {
        window.open('https://steamcommunity.com/profiles/76561198840944668');
    });
});