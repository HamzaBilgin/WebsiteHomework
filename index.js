function toggle() {
  let x = document.getElementById("navbarLinks");
  let y = document.getElementById("navbar");

  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.height = "auto";
  } else {
    x.style.display = "none";
  }
}

const modal = document.querySelector(".recent__modal");

const modalImgs = document.querySelectorAll(".recent img");
modalImgs.forEach((hata) => {
  console.log(hata);
});

modalImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentImageIndex = index;
    showModal(img.getAttribute('src'));
  });
});

const showModal = (src) => {
  modal.classList.add("show");

  const modalShowHtml = ` 
          <img class="modal__img" src="${src}" alt="">
      `;

  modal.innerHTML += modalShowHtml;

  const img = document.querySelector(".modal__img");

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
      modal.innerHTML = "";
    }
  });
  document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("recent__modal")){
        modal.classList.remove("show");
      modal.innerHTML = "";
    }
  })
};

const closeModal = () => {
  const modal = document.querySelector(".recet__modal");
  modal.classList.remove("show");
  modal.innerHTML = "";
};
