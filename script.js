window.onload = function() {
    document.getElementById('music').play();
}

function playPurr() {
    const purr = document.getElementById('purr');
    purr.currentTime = 0; // сбросить время, чтобы звук начинался с начала
    purr.play();
}
