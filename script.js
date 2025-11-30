/*let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar'); 
let nav-bar = new Audio('songs/30.mp3');

let currentSong = 1;

play.addEventListener('click', () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    } else {
        audio.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
});

audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background = `linear-gradient(to right, #21a600ff ${progress}%, #333 ${progress}%)`;
})

progressBar.addEventListener('input', function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #21a600ff ${value}%, #333 ${value}%)`;
    audio.currentTime = (progressBar.value * audio.duration) / 100;
});

let playMusic = Array.from(document.getElementsByClassName('playMusic'));

makeAllPlay = () => {
    playMusic.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

playMusic.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');

       let index = parseInt(e.target.id);
        currentSong = index;
        audio.src = order[index - 1].songPath;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    })
});

let allMusic = Array.from(document.getElementsByClassName('music-card'));

songs = [
    { songName: 'Song 1', songDes: 'This is the description for song 1', songImage: 'img/1.jpg', songPath: 'songs/1.mp3' },
    { songName: 'Song 2', songDes: 'This is the description for song 2', songImage: 'img/2.jpeg', songPath: 'songs/2.mp3' },
    { songName: 'Song 3', songDes: 'This is the description for song 3', songImage: 'img/3.jpg', songPath: 'songs/3.mp3' },
    { songName: 'Song 4', songDes: 'This is the description for song 4', songImage: 'img/4.webp', songPath: 'songs/4.mp3' },
    { songName: 'Song 5', songDes: 'This is the description for song 5', songImage: 'img/5.jpg', songPath: 'songs/5.mp3' },
    { songName: 'Song 6', songDes: 'This is the description for song 6', songImage: 'img/6.jpg', songPath: 'songs/6.mp3' },
    { songName: 'Song 7', songDes: 'This is the description for song 7', songImage: 'img/7.jpg', songPath: 'songs/7.mp3' },
    { songName: 'Song 8', songDes: 'This is the description for song 8', songImage: 'img/8.jpg', songPath: 'songs/8.mp3' },
    { songName: 'Song 9', songDes: 'This is the description for song 9', songImage: 'img/9.jpg', songPath: 'songs/9.mp3' },
    { songName: 'Song 10', songDes: 'This is the description for song 10', songImage: 'img/10.jpg', songPath: 'songs/10.mp3' },
    { songName: 'Song 11', songDes: 'This is the description for song 11', songImage: 'img/11.jpg', songPath: 'songs/11.mp3' },
    { songName: 'Song 12', songDes: 'This is the description for song 12', songImage: 'img/12.webp', songPath: 'songs/12.mp3' },
    { songName: 'Song 13', songDes: 'This is the description for song 13', songImage: 'img/13.jpg', songPath: 'songs/13.mp3' },
    { songName: 'Song 14', songDes: 'This is the description for song 14', songImage: 'img/14.jpg', songPath: 'songs/14.mp3' },
    { songName: 'Song 15', songDes: 'This is the description for song 15', songImage: 'img/15.jpg', songPath: 'songs/15.mp3' },
    { songName: 'Song 16', songDes: 'This is the description for song 16', songImage: 'img/16.jpg', songPath: 'songs/16.mp3' },
    { songName: 'Song 17', songDes: 'This is the description for song 17', songImage: 'img/17.jpg', songPath: 'songs/17.mp3' },
    { songName: 'Song 18', songDes: 'This is the description for song 18', songImage: 'img/18.jpg', songPath: 'songs/18.mp3' },
    { songName: 'Song 19', songDes: 'This is the description for song 19', songImage: 'img/19.jpg', songPath: 'songs/19.mp3' },
    { songName: 'Song 20', songDes: 'This is the description for song 20', songImage: 'img/20.jpg', songPath: 'songs/20.mp3' },
    { songName: 'Song 21', songDes: 'This is the description for song 21', songImage: 'img/21.jpg', songPath: 'songs/21.mp3' },
    { songName: 'Song 22', songDes: 'This is the description for song 22', songImage: 'img/22.jpg', songPath: 'songs/22.mp3' },
    { songName: 'Song 23', songDes: 'This is the description for song 23', songImage: 'img/23.webp', songPath: 'songs/23.mp3' },
    { songName: 'Song 24', songDes: 'This is the description for song 24', songImage: 'img/24.webp', songPath: 'songs/24.mp3' },
    { songName: 'Song 25', songDes: 'This is the description for song 25', songImage: 'img/25.webp', songPath: 'songs/25.mp3' },
    { songName: 'Song 26', songDes: 'This is the description for song 26', songImage: 'img/26.webp', songPath: 'songs/26.mp3' },
    { songName: 'Song 27', songDes: 'This is the description for song 27', songImage: 'img/27.webp', songPath: 'songs/27.mp3' },
    { songName: 'Song 28', songDes: 'This is the description for song 28', songImage: 'img/28.jpg', songPath: 'songs/28.mp3' },
    
]

order = [...songs];

allMusic.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].songImage;
    element.getElementsByClassName('image-title')[0].innerText = songs[i].songName;
    element.getElementsByClassName('image-description')[0].innerText = songs[i].songDes;
});

let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let nowBar = document.querySelector('.now-bar');

let songOnRepeat = false;
let songOnShuffle = false;

function shuffleSongs (originalOrder) {
    order = [...originalOrder];
    for (let i = order.length - 1; i > 0; i--) {
       let j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
}

shuffle.addEventListener('click', () => {
    if(!songOnShuffle) {
        songOnShuffle = true;
        songOnRepeat = false;
        shuffle.classList.add('active');
        repeat.classList.remove('active');

        order = shuffleSongs(songs);
    } else {
        songOnShuffle = false;
        shuffle.classList.remove('active');

        order = songs;
    }
});

repeat.addEventListener('click', () => {
    if(!songOnRepeat) {
        songOnRepeat = true;
        songOnShuffle = false;
        repeat.classList.add('active');
        shuffle.classList.remove('active');
    } else {
        songOnRepeat = false;
        repeat.classList.remove('active');
    }
})

playNextSong = () => {
    if(!songOnRepeat){
       let nextSong = (currentSong % order.length) + 1;
        currentSong = nextSong;

        audio.src = order[currentSong-1].songPath;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    } else {
        audio.src = order[currentSong-1].songPath;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    }
}

playPrevSong = () => {
    let prevSong = (currentSong - 1);
    currentSong = prevSong == 0 ? order.length : prevSong;
    audio.src = order[currentSong - 1].songPath;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
}

function updateNowBar () {
   nowBar.getElementsByTagName('img')[0].src = order[currentSong-1].songImage;
    nowBar.getElementsByClassName('img-title-info')[0].innerText = order[currentSong-1].songName;
    nowBar.getElementsByClassName('img-des-info')[0].innerText = order[currentSong-1].songDes;
}

forward = document.getElementById('forward');
backward = document.getElementById('backward');

forward.addEventListener('click', () => {
    playNextSong();
})

audio.addEventListener('ended', () => {
    playNextSong();
})

backward.addEventListener('click', () => {
    playPrevSong();
});
*/


// Song List – IDs must match
let songs = [
    { id: 1, audio: "songs/1.mp3", img: "img/1.jpg", title: "Ehsaas", desc: "Description" },
    { id: 2, audio: "songs/2.mp3", img: "img/2.jpg", title: "Aankhein", desc: "Description" },
    { id: 3, audio: "songs/3.mp3", img: "img/3.jpeg", title: "Sajde", desc: "Description" },
    { id: 4, audio: "songs/4.mp3", img: "img/4.webp", title: "Water", desc: "Description" },
    { id: 5, audio: "songs/5.mp3", img: "img/5.jpg", title: "Tu", desc: "Description" },
    { id: 6, audio: "songs/6.mp3", img: "img/6.jpg", title: "Tujhpe Nazar", desc: "Description" },
    { id: 7, audio: "songs/7.mp3", img: "img/7.png", title: "Finding Her", desc: "Description" },
    { id: 8, audio: "songs/8.mp3", img: "img/8.jpg", title: "Last Love", desc: "Description" },
    { id: 9, audio: "songs/9.mp3", img: "img/9.webp", title: "Moon", desc: "Description" },
    { id: 10, audio: "songs/10.mp3", img: "img/10.png", title: "Suroor", desc: "Description" },
    { id: 11, audio: "songs/11.mp3", img: "img/11.webp", title: "Azul", desc: "Description" },
    { id: 12, audio: "songs/12.mp3", img: "img/12.webp", title: "Qatal", desc: "Description" },
    { id: 13, audio: "songs/13.mp3", img: "img/13.webp", title: "High On Me", desc: "Description" },
    { id: 14, audio: "songs/14.mp3", img: "img/14.webp", title: "Bheed Mein Tanhaai Mein", desc: "Description" },
    { id: 15, audio: "songs/15.mp3", img: "img/15.webp", title: "Enni Soni", desc: "Description" },
    { id: 16, audio: "songs/16.mp3", img: "img/16.webp", title: "Tere Ishk Mein", desc: "Description" },
    { id: 17, audio: "songs/17.mp3", img: "img/17.webp", title: "Heeriye", desc: "Description" },
    { id: 18, audio: "songs/18.mp3", img: "img/18.webp", title: "Lutt Putt Gaya", desc: "Description" },
    { id: 19, audio: "songs/19.mp3", img: "img/19.webp", title: "Piyar Farak Wali", desc: "Description" },
    { id: 20, audio: "songs/20.mp3", img: "img/20.webp", title: "Maniac", desc: "Description" },
    { id: 21, audio: "songs/21.mp3", img: "img/21.jpg", title: "Song 21", desc: "Description" },
    { id: 22, audio: "songs/22.mp3", img: "img/22.jpg", title: "Brown Rang", desc: "Description" },
    { id: 23, audio: "songs/23.mp3", img: "img/23.webp", title: "Song 23", desc: "Description" },
    { id: 24, audio: "songs/24.mp3", img: "img/24.webp", title: "Song 24", desc: "Description" },
    { id: 25, audio: "songs/25.mp3", img: "img/25.webp", title: "Song 25", desc: "Description" },
    { id: 26, audio: "songs/26.mp3", img: "img/26.webp", title: "Song 26", desc: "Description" },
    { id: 27, audio: "songs/27.mp3", img: "img/27.webp", title: "Song 27", desc: "Description" },
    { id: 28, audio: "songs/28.mp3", img: "img/28.jpg", title: "Song 28", desc: "Description" }
];

// Elements
let playBtn = document.getElementById("play");
let progress = document.getElementById("progressBar");
let back = document.getElementById("backward");
let forward = document.getElementById("forward");
let shuffleBtn = document.getElementById("shuffle");
let repeatBtn = document.getElementById("repeat");

// Bottom player info
let bottomImg = document.querySelector(".nav-bar img");
let bottomTitle = document.querySelector(".img-title-info");
let bottomDesc = document.querySelector(".img-des-info");

let audio = new Audio();
let currentSong = 1;

// Modes
let shuffleMode = false;
let repeatMode = false;

// Toggle Shuffle
shuffleBtn.addEventListener("click", () => {
    shuffleMode = !shuffleMode;

    if (shuffleMode) {
        shuffleBtn.classList.add("active"); // green
    } else {
        shuffleBtn.classList.remove("active");
    }
});

// Toggle Repeat
repeatBtn.addEventListener("click", () => {
    repeatMode = !repeatMode;

    if (repeatMode) {
        repeatBtn.classList.add("active");
        audio.loop = true; // repeat current song
    } else {
        repeatBtn.classList.remove("active");
        audio.loop = false;
    }
});

// Play a specific song
function playSong(id) {
    let song = songs.find(s => s.id === id);

    audio.src = song.audio;
    audio.play();
    currentSong = id;

    updatePlayerInfo(song);
    changeMainPlayBtn(true);
    resetAllIcons();
    highlightCard(id);
}

// Update bottom player info
function updatePlayerInfo(song) {
    bottomImg.src = song.img;
    bottomTitle.innerText = song.title;
    bottomDesc.innerText = song.desc;
}

// Play/ Pause main button
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        changeMainPlayBtn(true);
    } else {
        audio.pause();
        changeMainPlayBtn(false);
    }
});

// Change play button
function changeMainPlayBtn(isPlaying) {
    if (isPlaying) {
        playBtn.classList.replace("fa-circle-play", "fa-circle-pause");
    } else {
        playBtn.classList.replace("fa-circle-pause", "fa-circle-play");
    }
}

// Card click
let icons = document.getElementsByClassName("playMusic");

Array.from(icons).forEach((icon) => {
    icon.addEventListener("click", (e) => {
        let id = parseInt(e.target.id);
        playSong(id);
    });
});

// Reset icons
function resetAllIcons() {
    Array.from(icons).forEach((ic) => {
        ic.classList.add("fa-circle-play");
        ic.classList.remove("fa-circle-pause");
    });
}

function highlightCard(id) {
    let icon = document.getElementById(id);
    icon.classList.remove("fa-circle-play");
    icon.classList.add("fa-circle-pause");
}

// Progress Bar Update
/*audio.addEventListener("timeupdate", () => {
    let p = parseInt((audio.currentTime / audio.duration) * 100);
    progress.value = p;
    this.style.background = `linear-gradient(to right, #21a600ff ${value}%, #333 ${value}%)`;
});*/
audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background = `linear-gradient(to right, #21a600ff ${progress}%, #333 ${progress}%)`;
})

progressBar.addEventListener('input', function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #21a600ff ${value}%, #333 ${value}%)`;
    audio.currentTime = (progressBar.value * audio.duration) / 100;
});


// Seek audio
progress.addEventListener("input", () => {
    audio.currentTime = audio.duration * (progress.value / 100);
});

// Next Song
forward.addEventListener("click", () => {
    if (shuffleMode) {
        currentSong = Math.floor(Math.random() * songs.length) + 1;
    } else {
        currentSong++;
        if (currentSong > songs.length) currentSong = 1;
    }

    playSong(currentSong);
});

// Previous Song
back.addEventListener("click", () => {
    if (shuffleMode) {
        currentSong = Math.floor(Math.random() * songs.length) + 1;
    } else {
        currentSong--;
        if (currentSong < 1) currentSong = songs.length;
    }

    playSong(currentSong);
});

// Auto next after song ends (if repeat off)
audio.addEventListener("ended", () => {
    if (!repeatMode) {
        forward.click();
    }
});
