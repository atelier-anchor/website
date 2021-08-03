(function () {
    makeColumns();
    updateHeight();
})();

function makeColumns() {
    let rows = [];
    document.querySelectorAll('#content > *').forEach((e) => {
        if (e.tagName === 'H2') {
            rows.push([e, []]);
        } else {
            rows[rows.length - 1][1].push(e);
        }
    });
    document.querySelector('#content').innerHTML = rows.map((e) => {
        const left = `<div class='col-4'>${e[0].outerHTML}</div>`;
        const right = `<div class='col-8'>${e[1].map((x) => x.outerHTML).join('')}</div>`;
        return `<div class='row'>${left}${right}</div>`;
    }).join('');
}

function updateHeight() {
    const footerHeight = document.querySelector('footer').clientHeight + 'px'
    const margin = window.getComputedStyle(document.querySelector('body')).margin;
    document.querySelector('main').style.minHeight =
        `calc(100vh - ${footerHeight} - ${margin} * 2)`;
}
