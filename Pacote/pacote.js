const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

const cardItem = JSON.parse(localStorage.getItem("cardItens"));
const cardItem0 = cardItem[0]

const id = params.get("id");

const specificItem = cardItem0.find((item) => item.id === id);