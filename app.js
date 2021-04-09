import scroll from "./scroll";

const link = document.querySelector("#proj-link");

["load", "resize"].forEach((event) => {
  window.addEventListener(event, () => {
    if (window.innerWidth < 600) {
      link.addEventListener("click", () => {
        window.scroll(0, 1500);
      });
    } else {
      scroll();
      link.addEventListener("click", () => {
        window.scroll(0, 550);
      });
    }
  });
});

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll);
  if (scroll < 600) {
    document.querySelector(".contact-img-container").style.display="none";
  } else {
    document.querySelector(".contact-img-container").style.display="flex";
  }
});
