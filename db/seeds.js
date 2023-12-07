const Users  = require("../models/users")
const sequelize = require('../config/connection');

async function seedData() {
    const jane = await Users.create({ email: "emailexample01@gmail.com", firstName: "Jane", password: "1239434545" });
    console.log("Jane's auto-generated ID:", jane.id);
}

seedData()