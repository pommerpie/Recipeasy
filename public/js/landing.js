const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const signupBtn = document.getElementById('signup');
const myrecipesBtn = document.getElementById('myRecipes');

// logic for login
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        if (e.target === loginBtn) {
            e.stopImmediatePropagation();
            document.location.replace('/login');
        }
    });
}
// logic for signup
if (signupBtn) {
    signupBtn.addEventListener('click', (e) => {
        if (e.target === signupBtn) {
            e.stopImmediatePropagation();
            document.location.replace('/signup');
        }
    });
}
// logic for logout
if (logoutBtn) {
    logoutBtn.addEventListener('click', async (e) => {
        if (e.target === logoutBtn) {
            e.stopImmediatePropagation();
            const response = await fetch('/api/user/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/login');
                alert('You have logged out.');
            } else {
                alert('Failed to logout.');
            }
        }
    });
}
// logic for my recipes button
if (myrecipesBtn) {
    myrecipesBtn.addEventListener('click', (e) => {
        if (e.target === myrecipesBtn) {
            e.stopImmediatePropagation();
            document.location.replace('/myrecipes');
        }
    });
}