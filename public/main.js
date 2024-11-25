/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const beverages = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");
const chickens = document.querySelectorAll(".chicken");
const combos = document.querySelectorAll(".combo");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabval == "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "beverage") {
      beverages.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "chicken") {
      chickens.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "combo") {
      combos.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondaryColor");
  } else {
    header.classList.remove("border-b", "border-secondaryColor");
  }
};
window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};

window.addEventListener('scroll', activeLink)

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
})
function showLearnMore() {
  var content = document.getElementById('learn-more-content');
  content.style.display = 'block';
}
sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "bottom" });

sr.reveal(".category__card", { interval: 300 })

sr.reveal(".promo__card-1", { origin: "left" });
sr.reveal(".promo__card-2", { origin: "right" });

sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".menu__items", { origin: "left" });

sr.reveal(".customer__review", { origin: "right" });

sr.reveal(".footer");
const buyburger = document.getElementById('buy-burger');
if (buyburger) {
  buyburger.addEventListener('click', function (event) {
    event.preventDefault();
    var clickBurger = document.getElementById('click-burger');
    if (clickBurger) {
      clickBurger.scrollIntoView({ behavior: "smooth" });
      clickBurger.click();
    }
  });
}

const buychicken = document.getElementById('buy-chicken');
if (buychicken) {
  buychicken.addEventListener('click', function (event) {
    event.preventDefault();
    var clickChicken = document.getElementById('click-chicken');
    if (clickChicken) {
      clickChicken.scrollIntoView({ behavior: "smooth" });
      clickChicken.click();
    }
  });
}
const buybeverage = document.getElementById('buy-beverage');
if (buybeverage) {
  buybeverage.addEventListener('click', function (event) {
    event.preventDefault();
    var clickbeverage = document.getElementById('click-beverage');
    if (clickbeverage) {
      clickbeverage.scrollIntoView({ behavior: "smooth" });
      clickbeverage.click();
    }
  });
}
const buysnack = document.getElementById('buy-snack');
if (buysnack) {
  buysnack.addEventListener('click', function (event) {
    event.preventDefault();
    var clicksnack = document.getElementById('click-snack');
    if (clicksnack) {
      clicksnack.scrollIntoView({ behavior: "smooth" });
      clicksnack.click();
    }
  });
}
const buycombo = document.getElementById('buy-combo');
if (buycombo) {
  buycombo.addEventListener('click', function (event) {
    event.preventDefault();
    var clickcombo = document.getElementById('click-combo');
    if (clickcombo) {
      clickcombo.scrollIntoView({ behavior: "smooth" });
      clickcombo.click();
    }
  });
}
const containerabout = document.getElementById("containerabout");
const btnaboutus = document.getElementById("btnaboutus");

// Hàm xử lý sự kiện click
function handleClick(event) {
  // Kiểm tra xem phần tử mà sự kiện đã xảy ra có phải là con của containerabout hay không
  const isClickedInsideContainer = containerabout.contains(event.target);

  // Kiểm tra xem sự kiện click đã xảy ra trên nút "btnaboutus" hay không
  const isClickedOnButton = event.target === btnaboutus;

  // Nếu click không phải là trên containerabout hoặc trên nút "btnaboutus", ẩn containerabout đi
  if (!isClickedInsideContainer && !isClickedOnButton) {
    containerabout.style.display = "none";
  } else {
    // Nếu click là trên nút "btnaboutus", hiển thị containerabout
    containerabout.style.display = "block";
  }
}

// Gắn sự kiện click cho toàn bộ tài liệu
document.addEventListener("click", handleClick);
