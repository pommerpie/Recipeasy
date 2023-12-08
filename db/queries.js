const Users  = require("../models/users")
const Recipe = require("../models/Recipe")
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

async function addRecipe(recName, recIngr, recInstr, recFile, recDesc, userId, recId) {
    const recipe = await Recipe.create({ 
        name: `${recName}`,
        ingredients: `${recIngr}`,
        instructions: `${recInstr}`,
        filename: `${recFile}`,
        description: `${recDesc}`
        });
    
    const recKey = recipe.id
    const user = await Users.findOne({ where: { id: userId } });
    let userRecId = user.recipeIds 
    
    if (userRecId === null) {
        user.recipeIds = {recKey: recId}
    } else {
        user.recipeIds[recKey] = recId
    }
    console.log(user.recipeIds)    
}

addRecipe("rec", "rec", "rec", "rec", "rec", 3, "5546")


module.exports = {
    insertUser,
    showUsers,
    addRecipe
}
