/* navbar */
document.addEventListener("DOMContentLoaded", () => {
  highlightActivePage();
  setupHamburgerMenu();
});

function highlightActivePage() {
  const currentPath = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll('.nav-links li a');

  menuItems.forEach(item => {
      if (item.getAttribute('href') === currentPath) {
          item.classList.add("active");
      }
  });
}

function setupHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const hamburgerIcon = document.querySelector('.hamburger i');

  hamburger.addEventListener("click", () => {
      toggleMenu(navLinks, hamburgerIcon, hamburger);
  });
}

function toggleMenu(navLinks, hamburgerIcon, hamburger) {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-xmark");
      hamburger.classList.add("close-style");  // add custom style
  } else {
      hamburgerIcon.classList.remove("fa-xmark");
      hamburgerIcon.classList.add("fa-bars");
      hamburger.classList.remove("close-style");  // remove custom style
  }
}

//Navigation Menu Toggle
// function initializeNavigation() {
//   document.addEventListener("DOMContentLoaded", function () {
//     const hamburger = document.querySelector(".hamburger");
//     const navLinks = document.querySelector(".nav-links");

//     hamburger.addEventListener("click", () => {
//       navLinks.classList.toggle("active");
//       hamburger.classList.toggle("open");
//     });
//   });
// }





// Home Page Carousel
// function initializeHomePageCarousel() {
//   document.addEventListener("DOMContentLoaded", () => {
//     const carouselContainer = document.querySelector(".carousel-container");
//     const slides = document.querySelectorAll(".carousel-slide");
//     const pagination = document.querySelector(".pagination");
//     const leftArrow = document.querySelector(".left-arrow");
//     const rightArrow = document.querySelector(".right-arrow");
//     let currentIndex = 0;

//     function updateCarousel() {
//       carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//       pagination.textContent = `${currentIndex + 1} / ${slides.length}`;
//     }

//     leftArrow.addEventListener("click", () => {
//       currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//       updateCarousel();
//     });

//     rightArrow.addEventListener("click", () => {
//       currentIndex = (currentIndex + 1) % slides.length;
//       updateCarousel();
//     });

//     slides.forEach((slide) => {
//       const video = slide.querySelector(".carousel-video");
//       video.addEventListener("loadeddata", () => console.log("Video loaded and ready to play"));
//       video.addEventListener("error", (e) => console.error("Error loading video:", e));
//     });
//   });
// }



// // Type of Work Carousel
// function initializeWorkCarousels() {
//   document.addEventListener("DOMContentLoaded", () => {
//     const carousels = document.querySelectorAll(".work-carousel-container");

//     carousels.forEach((carousel) => {
//       const track = carousel.querySelector(".work-carousel-track");
//       const items = carousel.querySelectorAll(".work-carousel-item");
//       const leftArrow = carousel.querySelector(".left-arrow");
//       const rightArrow = carousel.querySelector(".right-arrow");

//       let currentIndex = 0;
//       let itemWidth;
//       let itemsPerView;

//       const initializeCarousel = () => {
//         const carouselWidth = carousel.clientWidth;
//         itemWidth = items[0].getBoundingClientRect().width;
//         itemsPerView = Math.floor(carouselWidth / itemWidth);

//         track.style.transform = `translateX(0px)`;
//         track.style.transition = "transform 0.5s ease-in-out";

//         updateArrowVisibility();
//       };

//       const updatePosition = () => {
//         const newPosition = -currentIndex * itemWidth;
//         track.style.transform = `translateX(${newPosition}px)`;
//         updateArrowVisibility();
//       };

//       const moveToNext = () => {
//         if (currentIndex < items.length - itemsPerView) {
//           currentIndex++;
//           updatePosition();
//         }
//       };

//       const moveToPrev = () => {
//         if (currentIndex > 0) {
//           currentIndex--;
//           updatePosition();
//         }
//       };

//       const updateArrowVisibility = () => {
//         leftArrow.style.display = currentIndex > 0 ? "block" : "none";
//         rightArrow.style.display = currentIndex < items.length - itemsPerView ? "block" : "none";
//       };

//       rightArrow.addEventListener("click", moveToNext);
//       leftArrow.addEventListener("click", moveToPrev);

//       // Use ResizeObserver for more reliable size change detection
//       const resizeObserver = new ResizeObserver(() => {
//         initializeCarousel();
//         updatePosition();
//       });

//       resizeObserver.observe(carousel);

//       // Initial setup
//       initializeCarousel();
//     });
//   });
// }

// // Call the function to initialize carousels





// // Accordion Functionality (News Page)
// function initializeAccordion() {
//   document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll(".accordion-header").forEach((header) => {
//       header.addEventListener("click", () => {
//         const isActive = header.classList.contains("active");
//         document.querySelectorAll(".accordion-header").forEach((h) => h.classList.remove("active"));
//         document.querySelectorAll(".accordion-content").forEach((content) => content.style.display = "none");

//         if (!isActive) {
//           header.classList.add("active");
//           header.nextElementSibling.style.display = "block";
//         }
//       });
//     });
//   });
// }

// // Contact Us Page - Slideshow




// // Initialize All Functions
// initializeNavigation();
// // initializeHomePageCarousel();

// initializeWorkCarousels();
// initializeAccordion();


