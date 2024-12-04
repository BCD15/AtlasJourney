function menuHamburgOpen() {
  const menuHamburg = document.querySelectorAll(".mh");
  const sla = document.querySelector(".sla");

  sla.classList.toggle("dispFlex");
  menuHamburg.forEach((item) => {
    item.classList.toggle("dispNone");
  });
}

function perguntaOpen(id, event) {
  const resposta = document.querySelectorAll(".respostaBox");

  if (id >= 0 && id < resposta.length) {
    resposta[id].classList.toggle("dispNone");

    const img = event.target;
    img.classList.toggle("imgRotate")
  }
}

function GetCardItem() {
  const cardItem = JSON.parse(localStorage.getItem("cardItens"));
  const cardItem0 = cardItem[0]

  if (cardItem0 !== null) {
    cardItem0.forEach((item) => RenderCard(item));
  } else {
    alert("Erro ao carregar os produtos, certifique-se que os dados existem")
  }
}

function RenderCard(item) {
  var container = document.querySelector(".container");

  const linkHref = item.id === 6 ? `../../Personalize/personalize.html` : `../../TelaOfertas/oferta.html?id=${item.id}#${item.text}`;

  container.innerHTML += `
        <div class="card">
          <div class="img">
              <img class="img" src="${item.url}" alt="${item.text}">
          </div>
          <div class="content">
              <p class="p1">${item.text}</p>
              <a class="a" href="${linkHref}">Ler mais</a>
          </div>
        </div>
      `;
}

GetCardItem();

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const slidesLength = slides.length;
  const totalSlides = slidesLength - 2;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Inicializa o carrossel
showSlide(currentIndex);
console.log("🚀 ~ currentIndex:", currentIndex)

const slides = document.querySelectorAll('.slide');
console.log(slides); // Verificar se todas as slides estão sendo identificadas
