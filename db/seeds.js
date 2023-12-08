const Users  = require("../models/users")
const sequelize = require('../config/connection');
const queries= require("./queries")

data = [
    {email: "example01@gmail.com", recId: [1, 2, 4] ,name: "Chris", password: "1234895037"},
    {email: "example02@gmail.com", recId: [1, 2, 4] ,name: "Mollie", password: "1237655037"},
    {email: "example03@gmail.com", name: "Andrew", password: "1234560327"},
    {email: "example04@gmail.com", recId: [1, 2, 4] ,name: "Cesar", password: "1296573337"},
    {email: "example05@gmail.com", recId: [1, 2, 4] ,name: "Damaris", password: "1234845677"}
]

async function seedData(data) {
    for (let i = 0; i < data.length; i++) {
        const user = await Users.create({ email: data[i].email, recipeIds: data[i].recId, firstName: data[i].name, password: data[i].password });
        console.log("Jane's auto-generated ID:", user.id);
    }
}
seedData(data)
queries.showUsers()