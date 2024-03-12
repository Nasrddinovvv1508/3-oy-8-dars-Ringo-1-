const bars = document.querySelector('.btn-click');
const ul = document.querySelector('#ul');

bars.addEventListener('click', function () {
    ul.classList.add('list');
})