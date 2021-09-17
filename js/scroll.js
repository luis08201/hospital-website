


window.addEventListener('scroll',function(){
            const header = document.querySelector('header');
            header.classList.toggle("sticky",window.scrollY > 0)
            const menuToggle = document.getElementById('menuToggle');
            menuToggle.classList.remove('active');
            const nav = document.getElementById('nav');
            nav.classList.remove('active')
        })

window.addEventListener('scroll', function(){
    const nav = document.querySelector('.header__nav');
      nav.classList.toggle("moveMenu",window.scrollY > 0)
})
