import App from './basic/App';

let app,
    modal,
    modalBtn,
    appElem,
    modalRadioElems,
    selectedGenre;

modal = document.getElementById('myModal');
modalBtn = document.getElementsByClassName('modal-button')[0];
appElem = document.getElementsByClassName('l-app')[0];

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

modal.style.display = "block";

modalBtn.onclick = function() {
    modalRadioElems = document.querySelectorAll('.modal-radio');

    for (let i = 0; i < modalRadioElems.length; i++) {
        if (modalRadioElems[i].checked) {
            selectedGenre = modalRadioElems[i].value;
        }
    }

    modal.style.display = "none";
    appElem.style.display = "block";
console.log(selectedGenre);
    app = new App(selectedGenre);
};