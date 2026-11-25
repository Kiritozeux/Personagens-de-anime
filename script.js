
const descricoes = {
    // ---------- 7 Pecados Capitais ----------
    "Escanor": "Pecado do Orgulho (Leão). Seu poder cresce com o sol e chega ao máximo ao meio-dia.",
    "King": "Pecado da Preguiça (Urso Pardo). Rei das Fadas, controla a lança sagrada Chastiefol.",
    "Ban": "Pecado da Ganância (Raposa). Imortal, rouba habilidades dos oponentes com o Snatch.",
    "Meliodas": "Pecado da Ira (Dragão). Líder dos Sete Pecados Capitais, usa o Full Counter.",
    "Merlin": "Pecado da Gula (Javali). Maga de poder enorme e especialista em magias complexas.",
    "Diane": "Pecado da Inveja (Serpente). Uma giganta de grande força, que controla a terra com a Creation.",
    "Gowther": "Pecado da Luxúria (Cabra). Uma boneca que manipula mentes e memórias.",
 
    // ---------- Sword Art Online ----------
    "Kirito": "O Espadachim Negro. Jogador solo conhecido por lutar com duas espadas e um dos heróis que ajudam a completar Sword Art Online.",
    "Asuna": "A Relâmpago. Mestre do rapier, vice-comandante dos Cavaleiros do Sangue e esposa do Kirito.",
    "Yui": "Uma IA criada para cuidar do emocional dos jogadores, adotada por Kirito e Asuna como filha.",
    "Klein": "Líder da guilda Fuurinkazan, luta com katana e foi o primeiro amigo do Kirito no jogo.",
    "Agil": "Ferreiro e comerciante de grande força, luta com um machado de duas mãos e é um aliado muito fiel do grupo.",
    "Lisbeth": "Ferreira de cabelo rosa, melhor amiga da Asuna. Forja armas poderosas e luta com maça.",
    "Sinon": "Atiradora de elite do Gun Gale Online, calma e precisa, usa o rifle Hecate II.",
    "Leafa": "Suguha, irmã do Kirito. Em Alfheim Online é uma Sylph habilidosa com espadas e adora voar.",
 
    // ---------- Solo Leveling ----------
    "Sung Jin-Woo": "Conhecido como o caçador mais fraco do mundo, torna-se o Monarca das Sombras e comanda um exército de sombras.",
    "Cha Hae-In": "Caçadora Rank S e hábil espadachim, aliada e grande parceira do Jin-Woo.",
    "Igris": "Cavaleiro das sombras, extremamente leal e um dos soldados mais fortes do exército do Jin-Woo.",
    "Beru": "Antigo Rei das Formigas, transformado em soldado das sombras e um dos mais poderosos do Jin-Woo.",
    "Go Gun-Hee": "Presidente da Associação de Caçadores da Coreia, muito respeitado e protetor dos caçadores.",
    "Baek Yoon-Ho": "Caçador Rank S e líder da guilda Tigre Branco, luta com garras e é um dos mais fortes da Coreia.",
    "Sung Jin-Ah": "Irmã mais nova do Jin-Woo, grande motivo da sua determinação em proteger a família."
  };
  
  document.querySelectorAll(".card").forEach(card => {
    const botao = card.querySelector("button");
    const info = card.querySelector("p:nth-of-type(2)"); // o <p></p> vazio
    const nome = card.querySelector("h2").textContent.trim();
  
    info.classList.add("info");
    info.textContent = descricoes[nome] || "Sem informações.";
  
    botao.addEventListener("click", () => {
      const aberto = info.classList.toggle("ativo");
      botao.textContent = aberto ? "Mostrar menos" : "Saiba mais";
    });
  });
 
  function myFunction() {
    const escuro = document.body.classList.toggle("dark-mode");
    document.querySelector(".darkmode-btn").textContent = escuro ? "🌙" : "☀️";
 }
 
 const slides = document.querySelector(".slides");
const total = slides.children.length;
let atual = 0;
 
function mostrar(indice) {
  atual = (indice + total) % total;   // volta ao início/fim automaticamente
  slides.style.transform = `translateX(-${atual * 100}%)`;
}
 
document.querySelector(".proximo").addEventListener("click", () => mostrar(atual + 1));
document.querySelector(".anterior").addEventListener("click", () => mostrar(atual - 1));
 
// Opcional: troca sozinho a cada 4 segundos
setInterval(() => mostrar(atual + 1), 4000);
