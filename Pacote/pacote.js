// const url = new URL(window.location.href);
// const params = new URLSearchParams(url.search);

// const cardItem = JSON.parse(localStorage.getItem("cardItens"));
// const cardItem0 = cardItem[0]

// const id = params.get("id");

// const specificItem = cardItem0.find((item) => item.id === id);

function menuHamburgOpen() {
    const menuHamburg = document.querySelectorAll(".mh");
    const sla = document.querySelector(".sla");

    sla.classList.toggle("dispFlex");
    menuHamburg.forEach((item) => {
      item.classList.toggle("dispNone");
    });
  }