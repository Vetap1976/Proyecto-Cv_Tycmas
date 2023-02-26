const button = document.querySelector(".hamburger-button");
const menu = document.querySelector(".menu-items");
const menuclose = document.querySelector(".menu__close")
const backToTopButton = document.getElementById("back-to-top-button");
const contents = document.querySelectorAll(".card_show");

button.addEventListener("click", function() {
  menu.classList.toggle("show-menu");
});


window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};


backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


function checkScroll() {
  for (let i = 0; i < contents.length; i++) {
    const content = contents[i];
    const contentTop = content.getBoundingClientRect().top;
    const contentBottom = content.getBoundingClientRect().bottom;
    const isVisible = (contentTop < window.innerHeight) && (contentBottom >= 0);
    if (isVisible) {
      content.style.opacity = 1;
    } else {
      content.style.opacity = 0;
    }
  }
}

window.addEventListener("scroll", checkScroll);
