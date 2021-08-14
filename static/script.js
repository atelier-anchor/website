(function () {
    updateFooterHeight();
    updateNavButtons();
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
