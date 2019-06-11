
const db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check if email already exists
    // Save the user to the database, como la clave se llama igual al valor, se puede poner solo {email: email} -> {email}
    db.saveUser({email, password})
    // Send the welcome email
}
