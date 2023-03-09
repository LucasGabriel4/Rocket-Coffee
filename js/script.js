const menuMobile = document.getElementById('menu-mobile');
const imgMenuHamburguer = document.querySelector('#menu-mobile > img');
const menu = document.getElementById('menu')
menuMobile.addEventListener('click', openMenu)


function openMenu(){
    if(menu.classList.contains('hide')){
        imgMenuHamburguer.setAttribute('src', 'assets/menu-buguer-close.svg')
        menu.classList.add('show')
        menu.classList.remove('hide')
    }else if(menu.classList.contains('show')){
        imgMenuHamburguer.setAttribute('src', 'assets/menu-buguer-open.svg')
        menu.classList.add('hide')
        menu.classList.remove('show')
    }  

  
}
  