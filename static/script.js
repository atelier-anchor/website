(function () {
    calcFooterHeight();
    updateNavButtons();
    updateCarousel();
    updateTypography();
})();

function calcFooterHeight() {
    const footerHeight = document.querySelector(".footer").clientHeight + "px";
    document.documentElement.style.setProperty("--footer-height", footerHeight);
}

function updateNavButtons() {
    const toggleButton = document.querySelector("#toggle-sidebar");
    toggleButton.onclick = () => {
        toggleButton.classList.toggle("close");
    }
}

function updateCarousel() {
    const carouselItems = document.querySelectorAll(".carousel-inner .carousel-item");
    const carouselNum = carouselItems.length;

    if (carouselNum !== 0) {
        const activate = (i) => {
            const elem = carouselItems[i];
            elem.classList.add("show");
            setTimeout(() => { elem.classList.add("visible") }, 20);
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
}

function updateTypography() {
    document.querySelectorAll("p").forEach((e) => {
        e.innerText = e.innerText.replace(/([\u4e00-\u9fff][^\u4e00-\u9fff]+)$/g, "\u{2060}$1");
    });
}
