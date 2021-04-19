const play = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.random');
const img = document.querySelector('.img');
const playBtn = document.querySelector('#play');
const songTitle = document.querySelector('.title');
const audio = document.querySelector('#audio');
const cancelBtn = document.querySelector('.cancel');
const playlistBtn = document.querySelector('.playlist');
const playlistSection = document.querySelector(".list");
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progressContainer');

const songArray = [
    {
        img: 'sia-never-give-up.jpg',
        title: 'Sia-Never Give Up',
        song: 'Never-Give-Up.mp3'
    },
    {
        img: "sia-together.jpg",
        title: 'Sia-Together',
        song: 'Together.mp3'
    },
    {
        img: "sia-california-dreamin.png",
        title: 'Sia- California Dreaming',
        song: 'California-Dreaming.mp3'
    },
    {
        img: "sia-cheap-thrills.jpg",
        title: 'Sia-Cheap Thrills',
        song: 'Cheap-Thrills.mp3'
    },
    {
        img: "LSD.jpg",
        title: 'Sia- Heaven can wait',
        song: 'Heaven-Can-Wait.mp3'
    },
    {
        img: "chef.jpg",
        title: 'Chef 187- Wala',
        song: 'Chef-187-Wala.mp3'
    },
    {
        img: "drake.jpg",
        title: 'Drake- Nice For What',
        song: 'Drake_Nice_For_What.mp3'
    },
    {
        img: "justin.jpg",
        title: 'What Goes Around- Timberlake',
        song: 'Justin_Timberlake.mp3'
    }
];


let songCount = 0;

nextBtn.addEventListener('click', function () {
    songCount++;
    if (songCount > songArray.length - 1) {
        songCount = 0;
    }
    img.src = songArray[songCount].img;
    songTitle.innerHTML = songArray[songCount].title;
    audio.src = songArray[songCount].song;
    playBtn.src = 'pause.png';

    audio.play()

});

prevBtn.addEventListener('click', function () {
    songCount--;
    if (songCount < 0) {
        songCount = songArray.length - 1;
    }
    img.src = songArray[songCount].img;
    songTitle.innerHTML = songArray[songCount].title;
    audio.src = songArray[songCount].song;
    playBtn.src = 'pause.png';

    audio.play()

});

let status = false;

randomBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * songArray.length);
    img.src = songArray[random].img;
    songTitle.innerHTML = songArray[random].title;
    audio.src = songArray[random].song;
    playBtn.src = 'pause.png';
    audio.play();
});

play.addEventListener('click', function () {
    if (status == false) {
        audio.play();
        playBtn.src = 'pause.png';
        status = true;
    } else if (status == true) {
        audio.pause();
        playBtn.src = 'play1.png';
        status = false;
    }

});


playlistBtn.addEventListener('click', function () {
    playlistSection.style.display = 'block';
});

cancelBtn.addEventListener('click', function () {
    playlistSection.style.display = 'none';
});

audio.addEventListener("timeupdate", function (e) {
    const { duration, currentTime } = e.srcElement;
    const progression = (currentTime / duration) * 100;
    progress.style.width = `${progression}%`;

});

progressContainer.addEventListener('click', function (e) {
    const width = this.clientWidth;
    const clientX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clientX / width) * duration;
});