// Add event listeners to buttons
document.getElementById('btn1').addEventListener('click', startGame);
document.getElementById('btn2').addEventListener('click', openOptions);
document.getElementById('btn3').addEventListener('click', exitGame);

// Background music
var bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.5; // Set volume to 50%