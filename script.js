const modal = document.querySelector('.modal');
const buttonSpidey = document.querySelector('#button-spidey');
const buttonBatman = document.querySelector('#button-batman');
const buttonRobin = document.querySelector('#button-robin');
const closeButton = document.querySelector('.modal__content--close');

const cards = document.querySelector('.cards');
buttonBatman.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    cards.innerHTML = `
    <label for="radio-1" id="card-1" class="card">
        <img src="./assets/images/batman-1.png" alt="spiderman 1"/>
    </label>
    <label for="radio-2" id="card-2" class="card">
        <img src="./assets/images/batman-2.png" alt="spiderman 2"/>
    </label>
    <label for="radio-3" id="card-3" class="card">
        <img src="./assets/images/batman-3.png" alt="spiderman 3"/>
    </label>
    `;
});
buttonRobin.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    cards.innerHTML = `
    <label for="radio-1" id="card-1" class="card">
        <img src="./assets/images/spidey-1.png" alt="spiderman 1"/>
    </label>
    <label for="radio-2" id="card-2" class="card">
        <img src="./assets/images/spidey-2.png" alt="spiderman 2"/>
    </label>
    <label for="radio-3" id="card-3" class="card">
        <img src="./assets/images/spidey-3.png" alt="spiderman 3"/>
    </label>
    `;
});
buttonSpidey.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    cards.innerHTML = `
    <label for="radio-1" id="card-1" class="card">
        <img src="./assets/images/spidey-1.png" alt="spiderman 1"/>
    </label>
    <label for="radio-2" id="card-2" class="card">
        <img src="./assets/images/spidey-2.png" alt="spiderman 2"/>
    </label>
    <label for="radio-3" id="card-3" class="card">
        <img src="./assets/images/spidey-3.png" alt="spiderman 3"/>
    </label>
    `;
});
closeButton.addEventListener('click', () => {
    // modal.style.display = 'none';

    modal.classList.remove('visible');
    modal.classList.add('hidden');
    cards.innerHTML = `
    <label for="radio-1" id="card-1" class="card">
        <img src="./assets/images/spidey-1.png" alt="spiderman 1"/>
    </label>
    <label for="radio-2" id="card-2" class="card">
        <img src="./assets/images/spidey-2.png" alt="spiderman 2"/>
    </label>
    <label for="radio-3" id="card-3" class="card">
        <img src="./assets/images/spidey-3.png" alt="spiderman 3"/>
    </label>
    `;
});