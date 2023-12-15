const { Ingredidents }  = require("../models")
const sequelize = require('../config/connection');

data = [
    {name: 'Chicken breasts', ing_id: 5062},
    {name: 'Milk', ing_id: 1077},
    {name: 'Butter', ing_id: 1001},
    {name: 'Steaks', ing_id: 23232},
    {name: 'Cheese', ing_id: 1041009},
    {name: 'Canned black beans', ing_id: 16018},
    {name: 'Bread', ing_id: 18064},
    {name: 'Corn', ing_id: 11168},
    {name: 'Cooked pasta', ing_id: 20421},
    {name: 'Flour tortillas', ing_id: 10218364},
    {name: 'Potatoes', ing_id: 11362},
    {name: 'Lettuce', ing_id: 11252},
    {name: 'Bacon', ing_id: 10123},
    {name: 'Carrots', ing_id: 11124},
    {name: 'Onion', ing_id: 11282},
    {name: 'Ground beef', ing_id: 10023572},
    {name: 'Tomatoes', ing_id: 11529},
    {name: 'Bell pepper', ing_id: 10211821},
    {name: 'Beans', ing_id: 16069},
    {name: 'Garlic', ing_id: 11215},
    {name: 'Free range eggs', ing_id: 1123},
    {name: 'Taco seasoning mix', ing_id: 2073},
    {name: 'Ranch dressing', ing_id: 4639},
    {name: 'BBQ sauce', ing_id: 6150},
    {name: 'Ketchup', ing_id: 11935},
    {name: 'Garlic salt', ing_id: 1062047},
]

const seedIngredients = () => Ingredidents.bulkCreate(data);

const seedData = async () => {
    await sequelize.sync({force: true});
    await seedIngredients();
}
seedData();