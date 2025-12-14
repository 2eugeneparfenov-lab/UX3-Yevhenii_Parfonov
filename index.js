document.addEventListener('DOMContentLoaded', () => {

    // ===== LOGIN MODAL =====
    const openLogin = document.getElementById('openModal');
    const closeLogin = document.getElementById('closeModal');
    const loginModal = document.getElementById('modal');

    openLogin.addEventListener('click', () => {
        loginModal.classList.add('show');
    });

    closeLogin.addEventListener('click', () => {
        loginModal.classList.remove('show');
    });

    loginModal.addEventListener('click', e => {
        if (e.target === loginModal) loginModal.classList.remove('show');
    });

    // ===== REGISTER MODAL =====
    const openRegister = document.getElementById('openRegister');
    const registerModal = document.getElementById('modal2');
    const backToMenu = document.getElementById('backToManuBtn');

    openRegister.addEventListener('click', () => {
        loginModal.classList.remove('show');
        registerModal.classList.add('show');
    });

    backToMenu.addEventListener('click', () => {
        registerModal.classList.remove('show');
    });

    registerModal.addEventListener('click', e => {
        if (e.target === registerModal) registerModal.classList.remove('show');
    });

    // ===== CONFIRM MAIL MODAL =====
    const openConfirmMailMenu = document.getElementById('continue_btn');
    const registerModal3 = document.getElementById('modal3');
    const closeConfirmMailMenu = document.getElementById('closeConfirmMailMenu');

    openConfirmMailMenu.addEventListener('click', () => {
        registerModal.classList.remove('show');
        registerModal3.classList.add('show');
    });

    closeConfirmMailMenu.addEventListener('click', () => {
        registerModal3.classList.remove('show');
    });

    registerModal3.addEventListener('click', e => {
        if (e.target === registerModal3) registerModal3.classList.remove('show');
    });


});

function goMainMenu() {
    window.location.href = 'main_menu.html';
}



