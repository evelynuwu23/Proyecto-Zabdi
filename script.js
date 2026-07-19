const miniTitle = document.getElementById("miniTitle");
const title = document.getElementById("title");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");
const miniEvelyn = document.getElementById("miniEvelyn");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const card = document.getElementById("card");

let scene = 0;
let musicPlaying = false;

/* Esta variable sirve para detener la escritura
si la página cambia de pantalla */
let writingTimer = null;

/* Esta es la función que escribe la carta poco a poco */
function writeLetter(text, speed = 7) {
  clearInterval(writingTimer);

  message.textContent = "";
  message.style.whiteSpace = "pre-line";
  message.style.textAlign = "left";

  let position = 0;

  writingTimer = setInterval(() => {
    if (position >= text.length) {
      clearInterval(writingTimer);
      writingTimer = null;
      return;
    }

    message.textContent += text[position];
    position++;

    /* Hace que la carta baje automáticamente
    mientras se sigue escribiendo */
    message.scrollTop = message.scrollHeight;
  }, speed);
}

const scenes = [
  {
    mini: "Te recomiendo usar tus audífonos 🎧",
    title: "Antes de comenzar...",
    message: "Esta pequeña sorpresa fue hecha con mucho cariño. Cuando estés listo, presiona comenzar.",
    image: "evelyn-happy.png",
    button: "Comenzar ✨"
  },
  {
    mini: "Hola, Zabdi ❤️",
    title: "Tengo algo que enseñarte",
    message: "Hay algo que llevo mucho tiempo queriendo hacer...",
    image: "evelyn-shy.png",
    button: "Continuar"
  },
  {
    mini: "Te cuento algo...",
    title: "Este proyecto estuvo guardado",
    message: "Lo empecé hace tiempo, solo porque me dio curiosidad saber si podría hacerlo.",
    image: "evelyn-curious.png",
    button: "Seguir"
  },
  {
    mini: "Pero entonces...",
    title: "Llegaste tú",
    message: "Y de pronto me dieron ganas de terminarlo, pero esta vez con una sonrisa diferente.",
    image: "evelyn-happy.png",
    button: "Ayyy 🥹"
  },
  {
    mini: "Ahora que oficialmente eres mi novio...",
    title: "Tengo una pregunta seria",
    message: "Bueno... seria, seria, no tanto. Pero sí necesito que respondas con el corazón.",
    image: "evelyn-laugh.png",
    button: "A ver 👀"
  },
  {
    mini: "Pregunta importante 💍",
    title: "¿Será muy pronto para pensar en la boda?",
    message: "Responde con cuidado, porque esta página sí guarda evidencias 😂",
    image: "evelyn-nervous.png",
    question: true
  },
  {
    mini: "Para el precioso de Zabdi 💌",
    title: "Una cartita para ti",
    image: "evelyn-heart.png",
    letter: true,
    button: "Final ✨"
  },
  {
    mini: "Ahora sí...",
    title: "Que empiece nuestra historia",
    message: "Gracias por llegar, por hacerme sonreír y por ser parte de este pequeño detalle hecho solo para ti. ❤️",
    image: "evelyn-happy.png",
    button: "Volver al inicio"
  }
];

/* Aquí está guardada toda tu carta */
const letterText = `No, no quiero casarme mañana… bueno, todavía no.

Solo quería decirte algo.

Antes de seguir… creo que es justo que conozcas un poquito más de mí.

Soy una persona que suele ser muy romántica en ocasiones, que se emociona con cada detalle, por más pequeño que sea, y que cuando se le ocurre hacer algo, simplemente quiere hacerlo. Suelo ser muy curiosa, bastante olvidadiza y muy distraída. Me pongo nerviosa y cambio el tema cuando no sé qué responder ante ciertas situaciones.

Siempre quiero aprender algo nuevo. Me gusta pintar, aunque no sepa hacerlo. No se me da mucho cocinar, pero me gusta intentar recetas nuevas. También suelo ser muy terca y, muchas veces, me pongo a la defensiva sin siquiera entender por qué soy así.

Pero, sobre todo, soy alguien que quiere ser esa persona con la que desees estar siempre. Quiero que sientas toda la libertad de confiar en mí, de contarme todo aquello que te haga sentir mal, y que el hecho de estar conmigo te dé calma, no todo lo contrario. Quiero ser tu lugar feliz y tu lugar seguro.

Me emociona todo lo que vendrá con este inicio de nuestra relación. De verdad deseo que congeniemos tanto que, con el tiempo, se sienta como si siempre hubiéramos pertenecido el uno al lado del otro.

Y, aunque eres una persona un tanto misteriosa para mí porque realmente aún no sé mucho de ti, eso también me emociona. Quiero conocerte de verdad. Quiero saber todo de ti: cada cosa que te gusta, aquello que te disgusta, si tomas café por las mañanas o prefieres otra cosa, si eres más de cosas dulces que saladas y todos esos pequeños detalles que hacen única a una persona.

No sé qué vaya a pasar mañana, en un mes o dentro de algunos años. Nadie puede prometer que todo saldrá perfecto, y tampoco quiero hacer promesas que no dependan solo de mí.

Lo único que sí puedo prometerte es que quiero intentarlo de verdad. Quiero que aprendamos el uno del otro, celebrar tus días buenos, acompañarte en los malos y construir algo bonito paso a paso, sin prisas y sin querer correr antes de aprender a caminar juntos.

Ojalá que, cuando algún día volvamos a leer esta carta, podamos sonreír y decir: “Mira dónde empezó todo”. Y si ese día llega, espero que sigamos eligiéndonos con la misma ilusión con la que hoy comienza esta historia.

Gracias por aceptar empezar este camino conmigo.

No sé si este sea el inicio de nuestra mejor historia… pero me hace muy feliz que el primer capítulo sea contigo. ❤️

Con cariño, Evelyn🌹`;

function renderScene() {
  const current = scenes[scene];

  /* Detiene cualquier escritura anterior */
  clearInterval(writingTimer);
  writingTimer = null;

  card.classList.remove("change");
  void card.offsetWidth;
  card.classList.add("change");

  miniTitle.textContent = current.mini;
  title.textContent = current.title;

  miniEvelyn.src = `assets/characters/${current.image}`;

  if (current.letter) {
    /* Aquí comienza el efecto de escritura */
    writeLetter(letterText, 45);
  } else {
    message.style.whiteSpace = "normal";
    message.style.textAlign = "";
    message.textContent = current.message;
  }

  buttons.innerHTML = "";

  if (current.question) {
    const yesBtn = document.createElement("button");
    yesBtn.className = "primary-btn";
    yesBtn.textContent = "Para nada 💍❤️";

    yesBtn.onclick = () => {
      createConfetti();
      scene++;
      renderScene();
    };

    const noBtn = document.createElement("button");
    noBtn.className = "secondary-btn";
    noBtn.textContent = "Sí... 🏃";
    noBtn.id = "runBtn";

    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);

    noBtn.addEventListener("touchstart", (event) => {
      event.preventDefault();
      moveNoButton();
    });

    buttons.appendChild(yesBtn);
    buttons.appendChild(noBtn);
    return;
  }

  const btn = document.createElement("button");
  btn.className = "primary-btn";
  btn.textContent = current.button;

  btn.onclick = () => {
    if (scene === 0 && !musicPlaying) {
      playMusic();
    }

    if (scene === scenes.length - 1) {
      scene = 0;
    } else {
      scene++;
    }

    renderScene();
  };

  buttons.appendChild(btn);
}

function moveNoButton() {
  const btn = document.getElementById("runBtn");

  const x = Math.random() * 260 - 130;
  const y = Math.random() * 180 - 90;

  btn.style.transform = `translate(${x}px, ${y}px) scale(.95)`;

  miniEvelyn.src = "assets/characters/evelyn-laugh.png";
}

miniEvelyn.addEventListener("click", () => {
  miniEvelyn.src = "assets/characters/evelyn-angry.png";

  setTimeout(() => {
    const current = scenes[scene];
    miniEvelyn.src = `assets/characters/${current.image}`;
  }, 900);
});

function playMusic() {
  music.volume = 0.25;

  music.play()
    .then(() => {
      musicPlaying = true;
      musicBtn.textContent = "🔈";
    })
    .catch((error) => {
      console.error("Error al reproducir música:", error);
      alert("No se pudo reproducir la música. Revisa que exista assets/music/lofi.mp3");
    });
}

musicBtn.addEventListener("click", () => {
  if (!musicPlaying) {
    playMusic();
  } else {
    music.pause();
    musicPlaying = false;
    musicBtn.textContent = "🔇";
  }
});

function createConfetti() {
  const emojis = ["💖", "✨", "🌸", "💍", "💕"];

  for (let i = 0; i < 35; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration =
      2 + Math.random() * 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

renderScene();