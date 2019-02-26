export const hoverBtn = () => {
    let btn = document.getElementById('btnHover');
    
    btn.addEventListener('mouseover', () => {
        btn.style.transition = 'all 1s ease'
        btn.style.backgroundColor = 'black';
        btn.style.width = '10rem'
        btn.innerHTML = 'sale items &nbsp <i class="fas fa-angle-right"></i>'
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transition = 'all 1s ease'
        btn.style.backgroundColor = '';
        btn.style.width = ''
        btn.innerHTML = 'sale items'
    });
};