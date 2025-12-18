    // знаходимо кнопку
    const attemptBtn = document.querySelector('.btn.green');
    // знаходимо готовий прямокутник
    const readyRect = document.querySelector('.ready-rect');

    const outpt = document.querySelector('.aaa');

    attemptBtn.addEventListener('click', () => {
    // перемикаємо видимість
    readyRect.style.display = 'block';
    outpt.style.display = 'block';
    // або якщо хочеш toggle:
    // readyRect.style.display = readyRect.style.display === 'block' ? 'none' : 'block';
});
