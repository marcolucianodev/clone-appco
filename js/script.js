/*Menu Toggle Area*/
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

/*Modal Area*/
const abrirModal = document.querySelectorAll('.btn-video')[1]
abrirModal.addEventListener('click', () => {
    const modalOpen = document.querySelector('.bg-modal')
    modalOpen.style.top = '0'
})

const fecharModal = document.querySelector('.close')
fecharModal.addEventListener('click', () => {
    const closeModal = document.querySelector('.bg-modal')
    closeModal.style.top = '-100%'
})


/*Accordeon Area*/
const accordion = document.querySelectorAll('.questions')
for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

//Slider Area
let counter = 1;
document.querySelector("#radio1").checked = true;

setInterval(() => {
  nextImage();
}, 5000)

const nextImage = () => {
  counter++;
  if(counter > 4) {
    counter = 1
  }

  document.querySelector(`#radio${counter}`).checked = true;
}