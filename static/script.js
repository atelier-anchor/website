(function () {
    updateNavButtons();
    // updateMainHeight();
})();

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

function updateMainHeight() {
    const footerHeight = document.querySelector("footer").clientHeight + "px"
    const margin = window.getComputedStyle(document.querySelector("body")).marginBottom;
    document.querySelector("main").style.minHeight =
        `calc(100vh - ${footerHeight} - ${margin} * 2)`;
}
