function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderCarousel(covers) {
  const wrapper = document.querySelector(".swiper-wrapper");
  const shuffled = shuffle(covers);

  shuffled.forEach(src => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide cd";

    const cover = document.createElement("div");
    cover.className = "u-cover";

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Album Cover";

    const mask = document.createElement("div");
    mask.className = "msk";

    cover.appendChild(img);
    cover.appendChild(mask);
    slide.appendChild(cover);
    wrapper.appendChild(slide);
  });

  new Swiper(".album-carousel", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
      dynamicBullets: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof albumLinks !== "undefined" && Array.isArray(albumLinks)) {
    renderCarousel(albumLinks);
  } else {
    console.warn("albumLinks chưa được định nghĩa hoặc không phải mảng.");
  }

  // JavaScript xử lý popup
  const popup = document.getElementById("popup-link");
  let currentLink = "";

  document.addEventListener("mouseover", e => {
    const slide = e.target.closest(".swiper-slide.cd");
    if (slide) {
      currentLink = douyinLinks[Math.floor(Math.random() * douyinLinks.length)];
      popup.innerHTML = `🎵 Open the song`;
      popup.classList.remove("popup-hidden");
      popup.classList.add("popup-visible");
      popup.style.top = `${e.clientY + 10}px`;
      popup.style.left = `${e.clientX + 10}px`;
    }
  });

  document.addEventListener("mousemove", e => {
    if (popup.classList.contains("popup-visible")) {
      popup.style.top = `${e.clientY + 10}px`;
      popup.style.left = `${e.clientX + 10}px`;
    }
  });

  document.addEventListener("mouseout", e => {
    if (e.target.closest(".swiper-slide.cd")) {
      popup.classList.remove("popup-visible");
      popup.classList.add("popup-hidden");
      currentLink = "";
    }
  });

  document.addEventListener("click", e => {
    if (e.target.closest(".swiper-slide.cd") && currentLink) {
      window.open(
        currentLink,
        "popupWindow",
        "width=681,height=745,left=684,top=0"
      );
    }
  });
});
