let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
value = value < 10 ? `0${value}` : value;
return value;
};

reset.addEventListener(
    "click",
    (resetTime = () => {
        pauseTimer();
        switch (active) {
        case "long":
            minCount = 14;
            break;
        case "short":
            minCount = 4;
            break;
        default:
            minCount = 24;
            break;
        }
        count = 59;
        time.textContent = `${minCount + 1}:00`;
    })
);

const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-focus");
});
};

focusButton.addEventListener("click", () => {
    removeFocus();
    focusButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener("click", () => {
    active = "short";
    removeFocus();
    shortBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 4;
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
    active = "long";
    removeFocus();
    longBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 14;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

pause.addEventListener(
    "click",
    (pauseTimer = () => {
        paused = true;
        clearInterval(set);
        startBtn.classList.remove("hide");
        pause.classList.remove("show");
        reset.classList.remove("show");
    })
);

startBtn.addEventListener("click", () => {
    reset.classList.add("show");
    pause.classList.add("show");
    startBtn.classList.add("hide");
    startBtn.classList.remove("show");
    if (paused) {
        paused = false;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
            if (count == 0) {
                if (minCount != 0) {
                    minCount--;
                    count = 60;
                } else {
                    clearInterval(set);
                }
            }
        }, 1000);
    }
});

const canvas = document.getElementById('spline-canvas');
const spline = new Spline({
    scene: ''
});
spline.attachTo(canvas);

// const songData = {
//     name: "Lofi keep you save",
//     artist: "Breathe 🍀 Study/Calm/Heal",
//     src: "studymusic.mp3",
//     cover: "studymusic.jpg"
// };

// const artistName = document.querySelector('.artist-name');
// const musicName = document.querySelector('.song-name');
// const fillBar = document.querySelector('.fill-bar');
// const time = document.querySelector('.time');
// const cover = document.getElementById('cover');
// const playBtn = document.getElementById('play');
// const prog = document.querySelector('.progress-bar');

// let song = new Audio();
// let playing = false;

// document.addEventListener('DOMContentLoaded', () => {
//     loadSong();
//     song.addEventListener('timeupdate', updateProgress);
//     song.addEventListener('ended', resetPlayer);
//     playBtn.addEventListener('click', togglePlayPause);
//     prog.addEventListener('click', seek);
// });

// function loadSong() {
//     const { name, artist, src, cover: thumb } = songData;
//     artistName.innerText = artist;
//     musicName.innerText = name;
//     song.src = src;
//     cover.style.backgroundImage = `url(${thumb})`;
// }

// function updateProgress() {
//     if (song.duration) {
//         const pos = (song.currentTime / song.duration) * 100;
//         fillBar.style.width = `${pos}%`;

//         const duration = formatTime(song.duration);
//         const currentTime = formatTime(song.currentTime);
//         time.innerText = `${currentTime} - ${duration}`;
//     }
// }

// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
// }

// function togglePlayPause() {
//     if (playing) {
//         song.pause();
//     } else {
//         song.play();
//     }
//     playing = !playing;
//     playBtn.classList.toggle('fa-pause', playing);
//     playBtn.classList.toggle('fa-play', !playing);
//     cover.classList.toggle('active', playing);
// }

// function resetPlayer() {
//     playing = false;
//     playBtn.classList.remove('fa-pause');
//     playBtn.classList.add('fa-play');
//     cover.classList.remove('active');
//     song.currentTime = 0;
//     fillBar.style.width = '0%';
//     time.innerText = `0:00 - ${formatTime(song.duration)}`;
// }

// function seek(e) {
//     const pos = (e.offsetX / prog.clientWidth) * song.duration;
//     song.currentTime = pos;
// }
