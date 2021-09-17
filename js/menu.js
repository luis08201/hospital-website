const menuToggle = document.getElementById('menuToggle');



menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active');
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
})