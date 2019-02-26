export const connexion = () => {
    //Import
    var btnCo = document.getElementById('co');
    var logIn = document.getElementById('logIn');
    var signUp = document.getElementById('signUp');
    var back = document.getElementById('return');
    var close = document.getElementsByClassName('croix');
    var newAccount = document.getElementById('create');
    //Event
    
    btnCo.addEventListener('click',() => {
        logIn.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    newAccount.addEventListener('click', () => {
        logIn.style.display = '';
        signUp.style.display = 'block';
    });
    for(let i = 0; i < close.length; i++){
        close[i].addEventListener('click',() => {
            close[i].parentElement.style.display = '';
            document.body.style.overflow = '';
        });
    }
    back.addEventListener('click', () => {
        signUp.style.display = '';
        logIn.style.display = 'block';
    });
}