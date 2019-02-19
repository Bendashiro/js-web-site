//Import
export const changeTheme = () => {
    var bttBlack = document.querySelectorAll('#form>button')[0];
    var bttWhite = document.querySelectorAll('#form>button')[1];
    var blackElt = document.querySelectorAll('.black');
    var whiteElt = document.getElementsByClassName('white');
    var greyElt = document.getElementsByClassName('grey');
    bttBlack.addEventListener('click',function() {
        document.body.style.transition = 'all 2s';
        document.body.style.backgroundColor = "black";
        for(let i = 0; i < blackElt.length;i++){
            blackElt[i].style.transition = 'all 2s';
            blackElt[i].style[blackElt[i].dataset.style] = "white";
        };
        for(let i = 0; i < whiteElt.length;i++){
            whiteElt[i].style.transition = 'all 2s';
        whiteElt[i].style[whiteElt[i].dataset.style] = "black";
        
    };
    for(let i = 0; i < greyElt.length;i++){
        greyElt[i].style.transition = 'all 2s';
        greyElt[i].style[greyElt[i].dataset.style] = "darkgrey";
        
    };
    });
    bttWhite.addEventListener('click',function() {
        document.body.style.transition = 'all 2s';
        document.body.style.backgroundColor = "";
        for(let i = 0; i < blackElt.length;i++){
            blackElt[i].style[blackElt[i].dataset.style] = "";
            blackElt[i].style.transition = 'all 2s';
        };
        for(let i = 0; i < whiteElt.length;i++){
            whiteElt[i].style[whiteElt[i].dataset.style] = "";
            whiteElt[i].style.transition = 'all 2s';
        };
        for(let i = 0; i < greyElt.length;i++){
            greyElt[i].style[greyElt[i].dataset.style] = "";
            greyElt[i].style.transition = 'all 2s';
        };
    });
}