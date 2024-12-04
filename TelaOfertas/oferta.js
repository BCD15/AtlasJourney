function menuHamburgOpen() {
    const menuHamburg = document.querySelectorAll(".mh");
    const sla = document.querySelector(".sla");

    sla.classList.toggle("dispFlex");
    menuHamburg.forEach((item) => {
      item.classList.toggle("dispNone");
    });
}