'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const remove = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const removeWindow = function(){
modal.classList.add('hidden');
overlay.classList.add('hidden');
}
    for(let i = 0; i<showModal.length; i++){
        showModal[i].addEventListener('click', remove);
}
closeModal.addEventListener('click', removeWindow);
overlay.addEventListener('click', removeWindow);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        removeWindow();
    }
})