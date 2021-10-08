/*let menuToggle = document.querySelector('.menu-opener')
let menuOpened = document.querySelector('.menu-toggle')


//adiciona um verificador de eventos no menu
menuToggle.addEventListener('click', function(e){
    
    //reseta a ação padrão do click
    e.preventDefault()

    //adiciona e retira classe da lista do menu
    menuOpened.classList.toggle('menu-opened')
    menuToggle.style.transition = 'all 5s'
})


let menuOpened = document.querySelector('.menuToggle')


//adiciona um verificador de eventos no menu
menuOpened.addEventListener('click', function(e){
    
    //reseta a ação padrão do click
    e.preventDefault()

    //adiciona e retira classe da lista do menu
    menuOpened.classList.toggle('menu-opened')
})*/


/*
window.addEventListener('resize', function () {
    //var altura = window.innerHeight;
    var largura = window.innerWidth;
    if (largura < 960) {

        let iconMenu = document.querySelector('.menuToggle')
iconMenu.addEventListener('click', () => {
    let menu = document.querySelectorAll('.menu')[0]
    if(menu.classList.contains('menu-close')){
        //menu.classList.add('responsive-menu')
        menu.classList.remove('menu-close')
        menu.style.display = 'flex'
    } else {
        menu.classList.add('menu-close')
        //menu.classList.remove('menu-opened')
        menu.style.display = 'none'
        //menu.classList.add('responsive-menu')
    }
})

    }    
});
*/




/*let iconMenu = document.querySelector('.menuToggle')
iconMenu.addEventListener('click', () => {
    let menu = document.querySelectorAll('.responsive-menu')[0]
    if(menu.classList.contains('menu-close')){
        //menu.classList.add('responsive-menu')
        menu.classList.remove('menu-close')
        menu.style.display = 'flex'
    } else {
        menu.classList.add('menu-close')
        //menu.classList.remove('menu-opened')
        //menu.style.display = 'none'
        menu.classList.add('responsive-menu')
    }
})
*/

/*let iconMenu = document.querySelector('.menuToggle')
iconMenu.addEventListener('click', () => {
    let menu = document.querySelectorAll('.menu')[0]
    if(menu.classList.contains('menu-close')){
        menu.classList.remove('menu-close')
        menu.style.display = 'flex'
        //menu.classList.add('responsive-menu')
    } else {
        menu.classList.add('menu-close')
        menu.style.display = 'none'
    }
})
*/
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
