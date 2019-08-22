var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal-content');
var closeModal = document.getElementsByClassName('close')[0];
var contactBtn = document.getElementsByClassName('nav-link')[2];
// var modalBtn1 = document.getElementsByClassName('conform')[0];


closeModal.onclick = function() {
    modal.style.transform = 'translateX(-100%)';
    modalContent.style.transform = 'translateX(-100%)';
}

// modalBtn1.onclick = function() {
//     modal.style.transform = 'translateX(0%)';
//     modalContent.style.transform = 'translateX(0%)';
// }

contactBtn.onclick = function() {
    modal.style.transform = 'translateX(0%)';
    modalContent.style.transform = 'translateX(0%)';
    event.preventDefault();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.transform = 'translateX(-100%)';
        modalContent.style.transform = 'translateX(-100%)';
    }
}