/* Created by Tivotal */

let nav = document.querySelector(".nav");
let toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

let aTags = nav.querySelectorAll(".nav ul li a");

aTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    aTags.forEach((aTag) => {
      aTag.classList.remove("active");
    });

    tag.classList.add("active");
  });
});
