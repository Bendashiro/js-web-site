var nav = document.getElementById('navbar');
var logo = document.getElementById('logo');
var colVide = document.getElementById('vide');
var colFull = document.getElementById('pleine');
var navOffset = nav.offsetTop;
console.log(navOffset)
console.log(window.pageYOffset)
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > navOffset) {
        nav.style.transition = 'all 1s'
        nav.style.position = 'fixed';
        nav.style.zIndex = "1"
        nav.style.padding = '1rem 0'
        nav.style.width = '100%';
        colVide.append(logo)
        logo.classList.remove("my-5");
    } else {
        nav.style.transition = 'all 1s';
        nav.style.position = '';
        nav.style.padding = ''
        nav.style.width = '';
        colFull.append(logo);
        logo.classList.add("my-5");
    }
},'once');