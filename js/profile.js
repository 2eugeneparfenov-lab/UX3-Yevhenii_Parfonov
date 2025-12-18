const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab_content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

const settingsForm = document.getElementById('settingsForm');
const usernameField = document.getElementById('username');
const bioField = document.getElementById('bio');

const profileName = document.getElementById('nickName');
const profileBio = document.getElementById('bioInfo');

function loadProfileData() {
    const savedUsername = localStorage.getItem('username');
    const savedBio = localStorage.getItem('bio');

    if (savedUsername) {
        profileName.textContent = savedUsername;
        usernameField.value = savedUsername;
    }

    if (savedBio) {
        profileBio.textContent = savedBio;
        bioField.value = savedBio;
    }
}

settingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUserName = usernameField.value.trim();
    const newBio = bioField.value.trim();

    if(newUserName.length < 3){
        alert('Username must be at least 3 characters');
        return;
    }
    localStorage.setItem('username', newUserName);
    localStorage.setItem('bio', newBio);

    profileName.textContent = newUserName;
    profileBio.textContent = newBio;

    showMessage();
});

function showMessage(){
    const msg = document.createElement('div');
    msg.textContent = '✅ Changes saved';
    msg.style.position = 'fixed';
    msg.style.bottom = '30px';
    msg.style.right = '30px';
    msg.style.background = '#ffcc00';
    msg.style.color = '#1e1e1e';
    msg.style.padding = '12px 20px';
    msg.style.borderRadius = '8px';
    msg.style.fontWeight = '600';
    msg.style.zIndex = '999';

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 2500);
}

loadProfileData();

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

