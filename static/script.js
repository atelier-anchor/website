(function () {
    updateFooterHeight();
    updateNavButtons();
    updateCarouselButtons();
})();

function updateFooterHeight() {
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

function updateCarouselButtons() {
    const carouselItems = document.querySelectorAll(".carousel-inner .carousel-item");
    const carouselIndicators = document.querySelectorAll(".carousel-indicators button");
    const carouselNum = carouselItems.length;

    const activate = (index) => {
        carouselItems[index].classList.add("active");
        carouselIndicators[index].classList.add("active");
    }
    const inactivate = (index) => {
        carouselItems[index].classList.remove("active");
        carouselIndicators[index].classList.remove("active");
    }

    if (carouselNum > 0) {
        // let carouselIndex = 0;
        let carouselIndex = Math.floor(Math.random() * carouselNum);
        activate(carouselIndex);

        document.querySelector(".carousel-control-prev").onclick = () => {
            inactivate(carouselIndex);
            carouselIndex = carouselIndex === 0 ? carouselNum - 1 : carouselIndex - 1;
            activate(carouselIndex);
        }
        document.querySelector(".carousel-control-next").onclick = () => {
            inactivate(carouselIndex);
            carouselIndex = carouselIndex === carouselNum - 1 ? 0 : carouselIndex + 1;
            activate(carouselIndex);
        }
    }
}
