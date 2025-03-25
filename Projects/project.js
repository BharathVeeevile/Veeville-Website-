

// Responsive Carousel
function initResponsiveCarousel() {
    const responsiveImages = [
        "https://pentagram-production.imgix.net/95faf668-8f5c-4bda-b953-811566784937/SSF_Blogpost-PackagingV2.jpg",
        "https://pentagram-production.imgix.net/95faf668-8f5c-4bda-b953-811566784937/SSF_Blogpost-Packaging.jpg",
        "https://pentagram-production.imgix.net/95faf668-8f5c-4bda-b953-811566784937/SSF_Blogpost-Packaging-Render.jpg"
    ];

    let currentResponsiveIndex = 0;

    const modalImage = document.getElementById("responsive-modal-image");
    const modal = document.getElementById("responsive-carousel-modal");

    document.querySelectorAll('.responsive-trigger').forEach((trigger, index) => {
        trigger.addEventListener('click', () => {
            currentResponsiveIndex = index;
            modalImage.src = responsiveImages[currentResponsiveIndex];
            modal.style.display = 'flex';
        });
    });

    document.querySelector('.responsive-carousel-prev').addEventListener('click', () => {
        currentResponsiveIndex = (currentResponsiveIndex - 1 + responsiveImages.length) % responsiveImages.length;
        modalImage.src = responsiveImages[currentResponsiveIndex];
    });

    document.querySelector('.responsive-carousel-next').addEventListener('click', () => {
        currentResponsiveIndex = (currentResponsiveIndex + 1) % responsiveImages.length;
        modalImage.src = responsiveImages[currentResponsiveIndex];
    });

    document.querySelector('.responsive-carousel-close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Second Business Card Carousel
function initBusinessCardCarousel() {
    const cardImages = [
        { src: "https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_03.png", alt: "Business Card 1" },
        { src: "https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_05.jpg", alt: "Business Card 2" },
        { src: "https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_02.jpg", alt: "Business Card 3" },
        { src: "https://pentagram-production.imgix.net/899579b9-e90d-4b0a-a8c1-c92062c28778/jhp_lp_graphcore_03.png", alt: "Business Card 4" }
    ];

    const carouselContainer = document.querySelector('.carousel-container');
    const carouselImage = document.getElementById('carousel-display');
    const carouselHeader = document.querySelector('.carousel-header');
    const closeCarouselBtn = document.querySelector('.carousel-close-btn');
    const leftCarouselArrow = document.querySelector('.carousel-arrow-left');
    const rightCarouselArrow = document.querySelector('.carousel-arrow-right');

    let currentImageIndex = 0;

    const updateCarousel = (index) => {
        const selectedImage = cardImages[index];
        carouselImage.src = selectedImage.src;
        carouselImage.alt = selectedImage.alt;
        carouselHeader.textContent = selectedImage.alt;
    };

    document.querySelector('.business-card-layout img').addEventListener('click', () => {
        currentImageIndex = 0;
        updateCarousel(currentImageIndex);
        carouselContainer.style.display = 'flex';
    });

    closeCarouselBtn.addEventListener('click', () => {
        carouselContainer.style.display = 'none';
    });

    leftCarouselArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + cardImages.length) % cardImages.length;
        updateCarousel(currentImageIndex);
    });

    rightCarouselArrow.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % cardImages.length;
        updateCarousel(currentImageIndex);
    });
}

// Initialize All Carousels
function initializeCarousels() {
    initResponsiveCarousel();
    initBusinessCardCarousel();
}

initializeCarousels();
