// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "If you ever find yourself stuck in the middle of the sea", time: 3 },
  { text: "I'll sail the world to find you", time: 9 },
  { text: "If you ever find yourself lost in the dark and you can't see", time: 14 },
  { text: "I'll be the light to guide you", time: 19 },
  { text: "We find out what we're made of", time: 27 },
  { text: "When we are called to help our friends in need", time: 31 },
  { text: "You can count on me like one, two, three", time: 36 },
  { text: "I'll be there", time: 41 },
  { text: "And I know when I need it, I can count on you like four, three, two", time: 45 },
  { text: "And you'll be there", time: 50.5 },
  { text: "Cause that's what friends are supposed to do, oh, yeah", time: 53 },
  { text: "If you tossin' and you're turnin' and you just can't fall asleep", time: 68 },
  { text: "I'll sing a song beside you", time: 74 },
  { text: "And if you ever forget how much you really mean to me", time: 79 },
  { text: "Every day I will remind you, oh", time: 84 },
  { text: "We find out what we're made of", time: 91 },
  { text: "When we are called to help our friends in need", time: 95 },
  { text: "You can count on me like one, two, three", time: 100 },
  { text: "I'll be there", time: 106 },
  { text: "And I know when I need it, I can count on you like four, three, two", time: 109 },
  { text: "And you'll be there", time: 116 },
  { text: "Cause that's what friends are supposed to do, oh, yeah", time: 120 },
  { text: "You'll always have my shoulder when you cry", time: 133 },
  { text: "I'll never let go, never say goodbye", time: 144 },
  { text: "You know you can count on me like one, two, three", time: 155 },
  { text: "I'll be there", time: 160 },
  { text: "And I know when I need it, I can count on you like four, three, two", time: 164 },
  { text: "And you'll be there", time: 171 },
  { text: "Cause that's what friends are supposed to do, oh, yeah", time: 175 },
  { text: "You can count on me 'cause I can count on you", time: 184 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.8
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);