const songsContainer = document.querySelector(".songs")

const songsArr = [
    {
        id: 1,
        name: "beshram rang",
        photo: "https://images.unsplash.com/photo-1570976447640-ac859083963f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
        music: "s1.mp3"
    },
    {
        id: 2,
        name: "ultimate",
        photo: "https://images.unsplash.com/photo-1658801956904-43841e89d831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        music: "s2.mp3"
    },
    {
        id: 3,
        name: "toofan",
        photo: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        music: "s3.mp3"
    },
]

songsContainer.innerHTML = songsArr.map(song => (
    `<div  class="song">
                <div class="songImg">
                    <img src=${song.photo} alt="">
                </div>
                <h3 class="songName"> ${song.name}</h3>
                <button id=${song.id} class="play">
               play
                </button>
                </div>`

)).join(" ")

const play = document.querySelectorAll(".play")
const mainImg = document.querySelector(".mainImg")
const control = document.querySelector('.control')
const songNameMain = document.querySelector('.songNameMain')
let isPlaying = false;
let currentSong = 0;
const audio = new Audio("")
const showdetails = (song) => {
    mainImg.src = song.photo
    songNameMain.textContent = song.name;
}
const playSong = (id) => {
    audio.setAttribute("src", songsArr[id - 1].music);
    audio.play()
    showdetails(songsArr[id - 1])
    control.src = "./pause.svg"
}

control.addEventListener('click', () => {
    isPlaying ? audio.pause() : audio.play()
    isPlaying = !isPlaying
    isPlaying ? control.src = "./pause.svg" : control.src = "./play.svg"
})
const changeText = (id) => {
    let index = 0;
    play.forEach((btn) => {
        btn.textContent = "play"
        btn.style.backgroundColor = "red";
        index++;
        if (index === parseInt(id)) {
            btn.textContent = "playing...."
            btn.style.backgroundColor = "blue"
            return;
        }
    })
}

play.forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function () {
        isPlaying = true;
        playSong(id);
        changeText(id);
    });
});

