(function () {
    calcFooterHeight();
    updateNavButtons();
    updateCarousel();
    updateTypography();

    new Pjax({
        selectors: [
            "title",
            "#toggle-sidebar",
            "#sidebar-nav",
            "#article",
        ],
        cacheBust: false,
    });
    document.addEventListener("pjax:complete", function () {
        updateNavButtons();
        updateCarousel();
        updateTypography();
    });
})();

function calcFooterHeight() {
    const footer = document.querySelector("#footer");
    if (footer) {
        const footerHeight = footer.clientHeight + "px";
        document.documentElement.style.setProperty("--footer-height", footerHeight);
    }
}

function updateNavButtons() {
    const toggleButton = document.querySelector("#toggle-sidebar");
    const nav = document.querySelector("#sidebar-nav");
    toggleButton.onclick = () => {
        toggleButton.classList.toggle("close");
        nav.classList.toggle("show");
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
        setInterval(showNext, 6000);
    }
}

function updateTypography() {
    document.querySelectorAll("p").forEach((e) => {
        e.innerHTML = e.innerHTML.replace(/([\u4e00-\u9fff]{2}[^a-zA-Z0-9\u4e00-\u9fff]+)$/g, "<span class='nowrap'>$1</span>");
    });
    document.querySelectorAll(".post-content a, .dash-subscription-notice a").forEach((e) => {
        e.classList.add("url");
    });
}
