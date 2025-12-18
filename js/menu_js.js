document.getElementById("profile").addEventListener("click", () => {
    window.location.href = "profile.html";
});

document.getElementById("practice").addEventListener("click", () => {
    window.location.href = "practice.html";
});

document.getElementById("focus").addEventListener("click", () => {
   window.location.href = "focus.html";
});

document.getElementById("chat").addEventListener("click", () => {
    window.location.href = "chat_bot.html";
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