import { Users } from './models.js';

async function registerNewUser(name, password) {
    let newUser = await Users.create({ firstName: `${name}`, password: `${password}` });
    console.log(`${name}'s auto-generated ID:`, newUser.id);
}