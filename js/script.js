function abrirMenu() {
    document.querySelector('.menu-toggle').classList.add('.menu-opened')
    if(document.querySelector('.menu-toggle').classList.contains('.menu-opened') == true) {
        document.querySelector('.menu-toggle').style.display = 'block'
    }
}