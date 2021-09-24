/*function abrirMenu(){
    document.querySelector('.menu-toggle').style.display = 'block'
    document.querySelector('.menu-toggle').classList.add('.menu-opened')

    let toggle = document.querySelector('.menu-opener').addEventListener('click', function(){
        document.querySelector('.menu-toggle').classList.remove('.menu-opened')
        document.querySelector('.menu-toggle').style.display = 'none'
    })
}*/

function abrirMenu(){
    let openMenu = document.querySelector('.menu-toggle').style.display = 'block'
    if(openMenu.style.display == 'block') {
        document.querySelector('.menu-toggle').style.display = 'block'
    } else {
        document.querySelector('.menu-toggle').addEventListener('click', function(){
            document.querySelector('.menu-toggle').style.display = 'none'
        })
    }
}