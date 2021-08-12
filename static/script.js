(function () {
    updateMainHeight();
})();

function updateMainHeight() {
    const footerHeight = document.querySelector('footer').clientHeight + 'px'
    const margin = window.getComputedStyle(document.querySelector('body')).marginBottom;
    document.querySelector('main').style.minHeight =
        `calc(100vh - ${footerHeight} - ${margin} * 2)`;
}
