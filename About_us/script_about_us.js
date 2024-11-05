document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const close = document.querySelector(".close");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const images = gallery.querySelectorAll("img");
  let currentIndex = 0;

  gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      lightbox.style.display = "flex";
      lightboxImage.src = e.target.src;
      currentIndex = Array.from(images).indexOf(e.target);
    }
  });

  close.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  prev.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    lightboxImage.src = images[currentIndex].src;
  });

  next.addEventListener("click", () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    lightboxImage.src = images[currentIndex].src;
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
