// Criar bolinhas que sobem na tela
function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(bubble);
  
    // Remover a bolha após a animação
    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }
  
  // Adicionar bolhas em intervalos regulares
  setInterval(createBubble, 500);
  
  // Estilos para as bolhas
  const style = document.createElement("style");
  style.textContent = `
    .bubble {
      position: absolute;
      bottom: 0;
      width: 20px;
      height: 20px;
      background-color: rgba(221, 173, 15, 0.5);
      border-radius: 50%;
      animation: floatUp 5s linear infinite;
    }
  
    @keyframes floatUp {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-100vh);
      }
    }
  `;
  document.head.appendChild(style);  
document.getElementById("read-aloud").addEventListener("click", () => {
    const text = document.querySelector(".p").innerText;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    window.speechSynthesis.speak(speech);
  });