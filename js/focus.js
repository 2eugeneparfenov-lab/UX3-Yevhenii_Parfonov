const goToTask = document.querySelector(".little_button2");

goToTask.addEventListener("click", (e) => {
    window.location.href='task_pr.html';
});

const dropdownCards = document.querySelectorAll('.stat_card.dropdown');

dropdownCards.forEach(card => {
    const value = card.querySelector('.stat_value');
    const dropdown = card.querySelector('.lang_dropdown');
    const items = dropdown.querySelectorAll('.lang_item');
    const storageKey = card.dataset.storage;

    const savedValue = localStorage.getItem(storageKey);
    if (savedValue) {
        value.textContent = savedValue;
    }

    card.addEventListener('click', (e) => {
        e.stopPropagation();

        document.querySelectorAll('.lang_dropdown').forEach(d => {
            if (d !== dropdown) d.style.display = 'none';
        });

        dropdown.style.display =
            dropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            value.textContent = item.textContent;
            localStorage.setItem(storageKey, item.textContent);
            dropdown.style.display = 'none';
        });
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.lang_dropdown').forEach(d => {
        d.style.display = 'none';
    });
});

const Modal4 = document.getElementById('modal4');
const openModal4 = document.getElementById('openModal4');
const closeModal4 = document.getElementById('closeModal4');

openModal4.addEventListener('click', () => {
    Modal4.classList.add('show');
});

closeModal4.addEventListener('click', () => {
    Modal4.classList.remove('show');
});

Modal4.addEventListener('click', e => {
    if (e.target === Modal4) Modal4.classList.remove('show');
});

