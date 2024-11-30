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

  container.innerHTML += `
        <div class="card">
          <div class="img">
              <img class="img" src="${item.url}" alt="${item.text}">
          </div>
          <div class="content">
              <p class="p1">${item.text}</p>
              <a class="a" href="../../Pacote/pacote.html?id=${item.id}">Ler mais</a>
          </div>
        </div>
      `;
}

GetCardItem();