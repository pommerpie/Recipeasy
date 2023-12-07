const { Users, Recipes }  = require("../models")
const sequelize = require('../config/connection');

async function insertUser(email, name, password) {
    const user = await Users.create({ email: `${email}`, firstName: `${name}`, password: `${password}` });
    console.log("User's auto-generated ID:", user.id);
}

async function showUsers() {
    const users = await Users.findAll();
    console.log(users.every(user => user instanceof Users)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
}

async function addRecipe(recName, stepsJson, recId, userId) {
    const recipe = await Recipes.create({ recipeName: `${recName}`, steps: stepsJson });
    await Users.update({ recipeIds: recId }, {
        where: {
          id: userId
        }
      });
}

module.exports = {
    insertUser,
    showUsers,
    addRecipe
}
