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
]

const seedIngredients = () => Ingredidents.bulkCreate(data);

const seedData = async () => {
    await sequelize.sync({force: true});
    await seedIngredients();
}
seedData();