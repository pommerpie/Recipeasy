const Users  = require("../models/users")
const sequelize = require('../config/connection');

async function showUsers() {
    const users = await Users.findAll();
    console.log(users.every(user => user instanceof Users)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
}

showUsers()