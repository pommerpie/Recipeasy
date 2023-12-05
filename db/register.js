import { Users } from '../models/users.js';

async function registerNewUser(email, name, password) {
    let newUser = await Users.create({ email: `${email}`, firstName: `${name}`, password: `${password}` });
    console.log(`${name}'s auto-generated ID:`, newUser.id);
}