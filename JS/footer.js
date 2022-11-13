const categories = document.querySelectorAll(".footer__cat");
var width = window.screen.width;

categories.forEach(category => {
  category.onclick = () => {

    if(category.classList.contains("open") && width <= 768) {
      category.classList.remove("open");
      category.children[1].style.display = "none";
    } else {
      category.classList.add("open");
      category.children[1].style.display = "block";
    }
  }
});