const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    document.location.replace('/login');
});

signupBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    document.location.replace('/signup')
});