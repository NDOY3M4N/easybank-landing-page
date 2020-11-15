const menu = document.querySelector('.navbar__menu')
const iconImg = menu.querySelector('img')
const navbarLinks = document.querySelector('.navbar__links')

let openMenu = false

console.log(iconImg.src)

menu.addEventListener('click', () => {
  openMenu = !openMenu

  if (openMenu) {
    navbarLinks.classList.add('active')
    document.body.classList.add('overlay')
    iconImg.src = 'images/icon-close.svg'
  } else {
    navbarLinks.classList.remove('active')
    document.body.classList.remove('overlay')
    iconImg.src = 'images/icon-hamburger.svg'
  }
})

