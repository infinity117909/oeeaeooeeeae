// Assuming your image has an id, e.g., <img id="catImage" src="img/cat.jpg">
const catImage = document.getElementById('catImage');
const audio = new Audio("audio/cat-audio-fast.mp3");

catImage.addEventListener('mouseenter', function() {
    catImage.src = 'img/Cat-1.gif';
        
    audio.play();
    audio.loop = true;
});

catImage.addEventListener('mouseleave', function() {
    catImage.src = 'img/Cat-still.png';

    audio.pause();
    audio.currentTime = 0;
});