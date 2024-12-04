function menuHamburgOpen() {
    const menuHamburg = document.querySelectorAll(".mh");
    const sla = document.querySelector(".sla");
    const bdy = document.querySelector("body");

    sla.classList.toggle("dispFlex");
    menuHamburg.forEach((item) => {
      item.classList.toggle("dispNone");
    });
    bdy.classList.toggle("overHidden");
}