const searchBtn = document.getElementById('search');
const ingredientList = document.getElementsByClassName('checkbox')

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const selectedIngredients = [];
    for (let i in ingredientList) {
        if (ingredientList[i].checked) {
            selectedIngredients.push(ingredientList[i].dataset.name);
        };
    };
    const response = await fetch('/api/spoonacular/byIngredient', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedIngredients),
    });
    const data = await response.json();
    document.location.replace('/results')
})
