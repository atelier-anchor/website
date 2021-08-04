(function () {
    updateHeight();
})();

function updateHeight() {
    const footerHeight = document.querySelector('footer').clientHeight + 'px'
    const margin = window.getComputedStyle(document.querySelector('body')).margin;
    document.querySelector('main').style.minHeight =
        `calc(100vh - ${footerHeight} - ${margin} * 2)`;
}
