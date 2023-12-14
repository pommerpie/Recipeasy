const searchBtn = document.getElementById('search');
const ingredientList = document.getElementsByClassName('checkbox');

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const selectedIngredients = [];
    for (let i in ingredientList) {
        if (ingredientList[i].checked) {
            selectedIngredients.push(ingredientList[i].dataset.name);
        };
    };
    document.location.replace(`/byingredient/${JSON.stringify(selectedIngredients)}`);
})