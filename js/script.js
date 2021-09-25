let menuToggle = document.querySelector('.menu-opener')
let menuOpened = document.querySelector('.menu-toggle')


//adiciona um verificador de eventos no menu
menuToggle.addEventListener('click', function(e){
    
    //reseta a ação padrão do click
    e.preventDefault()

    //adiciona e retira classe da lista do menu
    menuOpened.classList.toggle('menu-opened')
    menuToggle.style.transition = 'all 5s'
})
