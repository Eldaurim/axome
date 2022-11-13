const categories = document.querySelectorAll(".footer__cat");

categories.forEach(category => {
  category.onclick = () => {

    if(category.classList.contains("open")) {
      category.classList.remove("open");
      category.children[1].style.display = "none";
    } else {
      category.classList.add("open");
      category.children[1].style.display = "block";
    }
  }
});