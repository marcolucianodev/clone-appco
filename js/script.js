
const $menu = document.querySelector('.menuToggle')
$menu.addEventListener('click', () => {
    const $menuOpen = document.querySelector('.menuMobile')
    if($menuOpen.classList.contains('menu-hide')) {
        $menuOpen.classList.remove('menu-hide')
        $menuOpen.classList.add('menu-show')
    } else {
        $menuOpen.classList.add('menu-hide')
        $menuOpen.classList.remove('menu-show')
    }
})


function abrirModal() {
    let abm = document.querySelector('.bg-modal')
    abm.style.top = '0'
}

/*function fecharModal() {
    let fm = document.querySelector('.bg-modal')
    fm.style.top = '-100%'
}


/*let abrirModal = document.querySelector('.btn-video')
abrirModal.addEventListener('click', ()=>{
    abrirModal.style.top = '0'
})

let fecharModal = document.querySelector('.close')
fecharModal.addEventListener('click', ()=> {
    fecharModal.style.top = '-100%'
})*/