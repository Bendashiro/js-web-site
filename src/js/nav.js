export const navPosition = () => {
    console.log('l\'importation fonction');
    let section1 = document.getElementById('main')
    let nav = document.getElementById('navbar');
    let logo = document.getElementById('logo');
    let colVide = document.getElementById('vide');
    let colFull = document.getElementById('pleine');
    let navOffset = section1.offsetTop;
    console.log(navOffset)
    console.log(window.pageYOffset)
    window.addEventListener("scroll", () => {
        console.log('on scroll');
        nav.style.transition = 'all 1s'
        if (window.scrollY > navOffset) {
            nav.style.position = 'fixed';
            nav.style.zIndex = "1"
            nav.style.padding = '1rem 0'
            nav.style.width = '100%';
            colVide.append(logo)
            logo.classList.remove("my-5");
        } else {
            nav.style.position = '';
            nav.style.padding = ''
            nav.style.width = '';
            colFull.append(logo);
            logo.classList.add("my-5");
        }
    });
}