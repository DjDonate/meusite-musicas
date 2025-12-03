// Sua lista de músicas (você pode adicionar mais depois)
const songs = [
    // Exemplo:
    // { name: "Minha Música 1", file: "musica1.mp3" }
];

// Elementos do HTML
const list = document.getElementById("songList");
const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("nowPlaying");

// Criar lista automaticamente
songs.forEach((song) => {
    const item = document.createElement("div");
    item.classList.add("song");
    item.innerHTML = song.name;

    item.onclick = () => {
        audio.src = song.file;
        audio.play();
        nowPlaying.innerText = "Tocando agora: " + song.name;
    };

    list.appendChild(item);
});
