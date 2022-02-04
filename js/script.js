const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
    e.preventDefault()
        
    const blockID = anchor.getAttribute('href').substr(1)
        
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    })
}


const menuButton = document.querySelector('.menu-button'),
      menuOpen = document.querySelector('.menu__open'),
      menuClose = document.querySelector('.close-button');


    menuClose.addEventListener('click', function(){
        if(menuOpen.classList.contains('menu__open-active')){
            menuOpen.classList.remove('menu__open-active');
            menuButton.style.right = '10px';
        }
    });

    menuButton.addEventListener('click', function (){
            menuOpen.classList.add('menu__open-active');
            menuButton.style.right = '-50px';
    });

    





