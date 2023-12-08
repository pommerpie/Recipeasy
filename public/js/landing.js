const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
    if (e.target === loginBtn) {
        e.stopImmediatePropagation();
        document.location.replace('/login');
    }
});

signupBtn.addEventListener('click', (e) => {
    if (e.target === signupBtn) {
        e.stopImmediatePropagation();
        document.location.replace('/signup');
    }
});