const loginSection = document.getElementById('login');
const feedSection = document.getElementById('feed');
const roleButtons = document.querySelectorAll('.login .btn');
const logoutButton = document.getElementById('logout');

function showFeed(role) {
    loginSection.classList.add('hidden');
    feedSection.classList.remove('hidden');

    const avatar = feedSection.querySelector('.user-avatar');
    if (avatar && role) {
        const initials = role === 'professor' ? 'PR' : 'AL';
        avatar.textContent = initials;
    }
}

function showLogin() {
    feedSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
}

roleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const role = button.dataset.role;
        showFeed(role);
    });
});

if (logoutButton) {
    logoutButton.addEventListener('click', showLogin);
}
