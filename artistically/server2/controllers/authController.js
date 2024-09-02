// authController.js

// Import necessary modules
const mysql = require('mysql');

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'artistically'
});

// Register a new user
const registerUser = (req, res) => {
    const { firstName, lastName, email, phoneNumber, dateOfBirth, password } = req.body;

    // Check if the email is already registered
    const checkEmailQuery = 'SELECT COUNT(*) AS count FROM users WHERE email = ?';
    connection.query(checkEmailQuery, [email], (err, results) => {
        if (err) {
            console.error('Error checking email:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results[0].count > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Insert new user into the database
        const insertUserQuery = 'INSERT INTO users (firstName, lastName, email, phoneNumber, dateOfBirth, password) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(insertUserQuery, [firstName, lastName, email, phoneNumber, dateOfBirth, password], (err, results) => {
            if (err) {
                console.error('Error registering user:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            return res.status(201).json({ message: 'User registered successfully' });
        });
    });
};

// User login
const loginUser = (req, res) => {
    const { email, password } = req.body;

    // Validate user credentials
    const loginUserQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(loginUserQuery, [email, password], (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = results[0];
        return res.status(200).json({
            message: 'Login successful',
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                id: user.id,
                phone: user.phoneNumber,
                dateOfBirth: user.dateOfBirth
            }
        });
    });
};

module.exports = {
    registerUser,
    loginUser
};
