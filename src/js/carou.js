export const caroussel = () => {
    let row = document.querySelector("#slide");
    let icons = document.querySelectorAll("#icons i");
    let ul = document.querySelector('#icons');
    console.log(ul);
    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", () => {
            console.log(icons);
            if (window.innerWidth >= 992) {
                row.style.transform = `translateX(${-(i * 25)}%)`;
            }
            else if (window.innerWidth < 992 && window.innerWidth >= 768) {
                row.style.transform = `translateX(${-(i * (100 / 3))}%)`;
            }
            else if (window.innerWidth < 768 && window.innerWidth >= 576) {
                row.style.transform = `translateX(${-(i * 50)}%)`;
            }
            else if (window.innerWidth < 567) {
                row.style.transform = `translateX(${-(i * 100)}%)`;
            }
            icons.forEach(element => {
                element.classList.add("far");
                element.classList.remove("fas");
            });
            icons[i].classList.add("fas");
            icons[i].classList.remove("far");
        });
    };
}
// window.addEventListener('resize', () => {
//     var largeur = window.innerWidth;
//     // console.log(largeur);
//     if (largeur < 992 && ul.childElementCount == 4) {
//         let ico = document.createElement('i');
//         ico.setAttribute('class', 'fa-circle');
//         ico.classList.add('far');
//         ul.appendChild(ico);
//         console.log(ul);
//         console.log('largeur < 992');
//     }
//     else if (largeur >= 992 && ul.childElementCount >= 5) {
//         ul.removeChild(ul.lastChild);
//     }
//     else if (largeur < 768 && ul.childElementCount == 5) {
//         let ico1 = document.createElement('i');
//         ico1.setAttribute('class', 'fa-circle');
//         ico1.classList.add('far');
//         ul.appendChild(ico1);
//         console.log('largeur < 768');
//     }
//     else if (largeur >= 768 && ul.childElementCount >= 6) {
//         ul.removeChild(ul.lastChild);
//     }
//     else if (largeur < 576 && ul.childElementCount == 6) {
//         let ico2 = document.createElement('i');
//         ico2.setAttribute('class', 'fa-circle');
//         ico2.classList.add('far');
//         ul.appendChild(ico2);
//     }
//     else if (largeur >= 576 && ul.childElementCount >= 7) {
//         ul.removeChild(ul.lastChild);
//     }
// });
// window.addEventListener('load', () => {
//     // console.log(largeur);
//     if (window.innerWidth < 992) {
//         let ico = document.createElement('i');
//         ico.setAttribute('class', 'fa-circle');
//         ico.classList.add('far');
//         ul.appendChild(ico);
//         if (window.innerWidth < 768) {
//             let ico1 = document.createElement('i');
//             ico1.setAttribute('class', 'fa-circle');
//             ico1.classList.add('far');
//             ul.appendChild(ico1);
//             if (window.innerWidth < 576) {
//                 let ico2 = document.createElement('i');
//                 ico2.setAttribute('class', 'fa-circle');
//                 ico2.classList.add('far');
//                 ul.appendChild(ico2);
//             }
//         }
//     }
// });