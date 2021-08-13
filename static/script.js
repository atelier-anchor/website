(function () {
    updateNavButtons();
    // updateMainHeight();
})();

function updateNavButtons() {
    const showButton = document.querySelector('#show-sidebar');
    const closeButton = document.querySelector('#close-sidebar');
    const sidebar = document.querySelector('#sidebar-headings');

    showButton.onclick = () => {
        sidebar.classList.add('show');
        showButton.classList.remove('show');
        closeButton.classList.add('show');
    }
    closeButton.onclick = () => {
        sidebar.classList.remove('show');
        showButton.classList.add('show');
        closeButton.classList.remove('show');
    }
}

function updateMainHeight() {
    const footerHeight = document.querySelector('footer').clientHeight + 'px'
    const margin = window.getComputedStyle(document.querySelector('body')).marginBottom;
    document.querySelector('main').style.minHeight =
        `calc(100vh - ${footerHeight} - ${margin} * 2)`;
}
