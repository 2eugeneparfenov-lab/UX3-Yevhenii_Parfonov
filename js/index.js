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

    // ===== MODAL5 & MODAL6 =====
    const modal5 = document.getElementById('modal5');
    const closeModal5 = document.getElementById('closeConfirmMail');
    const continueModal5 = modal5.querySelector('.login-btn'); // кнопка Continue у modal5
    const modal6 = document.getElementById('modal6');
    const closeModal6 = document.getElementById('closeConfirmMailConf');

    closeModal5.addEventListener('click', () => modal5.classList.remove('show'));
    modal5.addEventListener('click', e => { if (e.target === modal5) modal5.classList.remove('show'); });

    continueModal5.addEventListener('click', () => {
        modal5.classList.remove('show');
        modal6.classList.add('show');
    });

    closeModal6.addEventListener('click', () => modal6.classList.remove('show'));
    modal6.addEventListener('click', e => { if (e.target === modal6) modal6.classList.remove('show'); });

    // ===== OPEN MODAL5 FROM "Forgot password?" =====
    const forgotPassword = document.querySelector('.forgot-password a');

    forgotPassword.addEventListener('click', (e) => {
        e.preventDefault(); // щоб не було переходу за посиланням
        loginModal.classList.remove('show'); // ховаємо логін, якщо відкритий
        modal5.classList.add('show');        // показуємо модал5
    });

});

function goMainMenu() {
    window.location.href = 'pages/menu_page.html';
}

function goMainMenuJack() {
    const usernameInput = document.querySelector('#modal input[type="text"]').value;
    const passwordInput = document.querySelector('#modal input[type="password"]').value;

    if (usernameInput === 'Jack' && passwordInput === '123') {
        // правильний логін
        window.location.href = 'pages/menu_page.html';
    } else {
        alert('Incorrect username or password!');
    }
}




