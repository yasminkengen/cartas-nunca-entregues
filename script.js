const cartas = [
  "Juro que seu esquecimento me irrita… mas amar você sempre me lembra quem eu sou.",
  "Às vezes finjo bravura, mas seu abraço é onde meu coração realmente mora.",
  "Queria que você soubesse: até quando brigo, tô te escolhendo.",
  "Meus dias preferidos são os que terminam com a gente rindo à toa.",
  "Nem sempre digo, mas você me salva um pouquinho todo dia.",
  "No meio da rotina, seu riso ainda é meu momento favorito.",
  "Se amar fosse jogo, já teria zerado todas as fases só por você.",
  "Às vezes penso: “não aguento mais”. Mas aguento sim. Porque é você quem está do meu lado.",
  "Nem todos os dias são lindos, mas todos são nossos.",
  "Orar com você virou meu lugar seguro nesse mundo bagunçado.",
  "Você é o motivo de eu querer que o futuro chegue logo.",
  "Seu toque me acalma mais que qualquer oração que eu já fiz.",
  "Às vezes limpo tudo só pra ver seu olhar quando chega. Vale cada segundo.",
  "Você é tão forte que nem percebe o quanto segura o mundo por nós dois.",
  "A casa pode estar limpa, o jantar pronto… mas só fica completa quando você entra.",
  "Quando você chega, meu peito respira diferente. Parece que tudo se encaixa.",
  "Te admiro mais do que falo. Sua força silenciosa me emociona.",
  "Te ver cansado e ainda tentando me amar direito? Isso é coragem, e eu vejo.",
  "Cuidar da casa esperando você é minha forma de dizer “te amo” sem palavras.",
  "Te amo mais quando você senta cansado e mesmo assim sorri pra mim.",
  "Ser sua mulher me dá uma força que nem eu sabia que existia em mim.",
  "Quando você me chama de “minha noiva”, eu viro flor por dentro.",
  "Você não só me ama… você me admira. E isso muda tudo.",
  "Te ouvir dizer que a comida tá gostosa vale mais que qualquer elogio no mundo."
];

const envelope = document.getElementById('envelope');
const mensagem = document.getElementById('mensagem');

envelope.addEventListener('click', () => {
  const aleatoria = cartas[Math.floor(Math.random() * cartas.length)];
  mensagem.textContent = aleatoria;
});

const music = document.getElementById('musica');
if (music) music.volume = 0.3;

const playBtn = document.getElementById('play-music');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play().then(() => {
        playBtn.textContent = "⏸️ Pausar trilha 💕";
      }).catch(() => {
        alert("⚠️ O navegador bloqueou o som. Tente tocar novamente.");
      });
    } else {
      music.pause();
      playBtn.textContent = "▶️ Ouvir nossa trilha 💕";
    }
  });
}
