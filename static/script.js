(function () {
    calcFooterHeight();
    updateNavButtons();
    updateCarousel();
})();

function calcFooterHeight() {
    const footerHeight = document.querySelector("footer").clientHeight + "px";
    document.documentElement.style.setProperty("--footer-height", footerHeight);
}

function updateNavButtons() {
    const toggleButton = document.querySelector("#toggle-sidebar");
    const sidebar = document.querySelector("#sidebar-headings");

    toggleButton.onclick = () => {
        if (sidebar.classList.contains("show")) {
            sidebar.classList.remove("show");
            toggleButton.classList.remove("close");
        } else {
            sidebar.classList.add("show");
            toggleButton.classList.add("close");
        }
    }
}

function updateCarousel() {
    const carouselItems = document.querySelectorAll(".carousel-inner .carousel-item");
    const carouselNum = carouselItems.length;

    const activate = (i) => {
        const elem = carouselItems[i];
        elem.classList.add("show");
        setTimeout(() => { elem.classList.add("visible") }, 0);
    }
    const inactivate = (i) => {
        const elem = carouselItems[i];
        elem.classList.remove("visible");
        elem.classList.remove("show");
    }

    let carouselIndex = Math.floor(Math.random() * carouselNum);
    activate(carouselIndex);

    const showNext = () => {
        inactivate(carouselIndex);
        carouselIndex = carouselIndex === carouselNum - 1 ? 0 : carouselIndex + 1;
        activate(carouselIndex);
    }
    setInterval(showNext, 8000);
}
