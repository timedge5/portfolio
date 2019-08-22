var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal-content');
var closeModal = document.getElementsByClassName('close')[0];
var modalBtn1 = document.getElementById('conform');


closeModal.onclick = function() {
    modal.style.transform = 'translateY(100%)';
    modalContent.style.transform = 'translateY(100%)';
}

modalBtn1.onclick = function() {
    modal.style.transform = 'translateY(0%)';
    modalContent.style.transform = 'translateY(0%)';
    event.preventDefault();
}

// contactBtn.onclick = function() {
//     modal.style.transform = 'translateX(0%)';
//     modalContent.style.transform = 'translateX(0%)';
//     event.preventDefault();
// }

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.transform = 'translateY(100%)';
        modalContent.style.transform = 'translateY(100%)';
    }
}