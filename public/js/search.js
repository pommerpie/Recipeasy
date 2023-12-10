const searchBtn = document.getElementById('search');
const ingredientList = document.getElementById('options')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.location.replace('/')
})