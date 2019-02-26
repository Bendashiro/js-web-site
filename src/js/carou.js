export const caroussel = () => {
    let row = document.querySelector("#slide");
    let icons = document.querySelectorAll("#icons i");
    let ul = document.querySelector('#icons');
    console.log(ul);
    //FCT
    window.addEventListener('resize', () => {
        var largeur = window.innerWidth;
        // console.log(largeur);
        if (largeur < 992 && ul.childElementCount == 4) {
            let ico = document.createElement('i');
            ico.setAttribute('class', 'fa-circle');
            ico.classList.add('far');
            ul.appendChild(ico);
            console.log(ul);
            console.log('largeur < 992');
        }
        else if (largeur >= 992 && ul.childElementCount >= 5) {
            ul.removeChild(ul.lastChild);
        }
        else if (largeur < 768 && ul.childElementCount == 5) {
            let ico1 = document.createElement('i');
            ico1.setAttribute('class', 'fa-circle');
            ico1.classList.add('far');
            ul.appendChild(ico1);
            console.log('largeur < 768');
        }
        else if (largeur >= 768 && ul.childElementCount >= 6) {
            ul.removeChild(ul.lastChild);
        }
        else if (largeur < 576 && ul.childElementCount == 6) {
            let ico2 = document.createElement('i');
            ico2.setAttribute('class', 'fa-circle');
            ico2.classList.add('far');
            ul.appendChild(ico2);
        }
        else if (largeur >= 576 && ul.childElementCount >= 7) {
            ul.removeChild(ul.lastChild);
        }
    });
    window.addEventListener('load', () => {
        // console.log(largeur);
        if (window.innerWidth < 992) {
            let ico = document.createElement('i');
            ico.setAttribute('class', 'fa-circle');
            ico.classList.add('far');
            ul.appendChild(ico);
            if (window.innerWidth < 768) {
                let ico1 = document.createElement('i');
                ico1.setAttribute('class', 'fa-circle');
                ico1.classList.add('far');
                ul.appendChild(ico1);
                if (window.innerWidth < 576) {
                    let ico2 = document.createElement('i');
                    ico2.setAttribute('class', 'fa-circle');
                    ico2.classList.add('far');
                    ul.appendChild(ico2);
                }
            }
        }
    });
    for (let i = 0; i < ul.childElementCount; i++) {
        console.log(ul.children);
        ul.children[i].addEventListener("click", () => {
            console.log(icons);
            // if (window.innerWidth >= '992px') {
            row.style.transform = `translateX(${-(i * 25)}%)`;
            // }
            ul.children.forEach(element => {
                element.classList.add("far");
                element.classList.remove("fas");
            });
            ul.children[i].classList.add("fas");
            ul.children[i].classList.remove("far");
        });
    };
}