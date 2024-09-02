const mysql = require('mysql');

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'artistically'
});

// Function to fetch pending requests
const getPendingRequests = (req, res) => {
    const { userEmail } = req.params;

    const fetchPendingRequestsQuery = 'SELECT * FROM connections WHERE receiver_email = ? AND status = ?';

    connection.query(fetchPendingRequestsQuery, [userEmail, 'pending'], (err, results) => {
        if (err) {
            console.error('Error fetching pending requests:', err);
            return res.status(500).json({ error: 'Failed to fetch pending requests' });
        }

        return res.status(200).json(results);
    });
};

module.exports = {
    getPendingRequests
};
