
const card = document.querySelector(".container");
window.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.getElementById('bccreator').onclick = function() {
    window.location.href = "broadcast/broadcast.html";
}
document.getElementById('xpcalc').onclick = function() {
    window.location.href = "xpcalc/xpcalc.html";
}
document.getElementById('authcalc').onclick = function() {
    window.location.href = 'authcalc/authcalc.html';
}
document.getElementById('sitemap').onclick = function() {
    window.location.href = 'sitemap/sitemap.html';
}
document.getElementById('recipegen').onclick = function() {
    window.location.href = 'recipegen/recipegen.html';
}
document.getElementById('randomscp').onclick = function() {
    window.location.href = 'randomscp/randomscp.html';
}
document.getElementById('randomcross').onclick = function() {
    window.location.href = 'randomcross/randomcross.html';
}
document.getElementById('randomtestgen').onclick = function() {
    window.location.href = 'randomtestgen/randomtestgen.html';
}
document.getElementById('livestats').onclick = function() {
    window.location.href = 'livestats/livestats.html';
}
