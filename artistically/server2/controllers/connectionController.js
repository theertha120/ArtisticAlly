

const mysql = require('mysql');

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'artistically' // Replace with your database name
});

// Function to send a connection request
const sendConnectionRequest = (req, res) => {
    const { senderEmail, receiverEmail } = req.body;

    // Check if sender and receiver emails are the same
    if (senderEmail === receiverEmail) {
        return res.status(400).json({ error: 'Invalid request: Sender and receiver emails cannot be the same' });
    }

    // Check if both sender and receiver emails exist in users table
    const checkSenderQuery = 'SELECT email FROM users WHERE email = ?';
    const checkReceiverQuery = 'SELECT email FROM users WHERE email = ?';

    connection.query(checkSenderQuery, [senderEmail], (err, senderResults) => {
        if (err) {
            console.error('Error checking sender email:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (senderResults.length === 0) {
            return res.status(404).json({ error: 'Sender email not found' });
        }

        connection.query(checkReceiverQuery, [receiverEmail], (err, receiverResults) => {
            if (err) {
                console.error('Error checking receiver email:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (receiverResults.length === 0) {
                return res.status(404).json({ error: 'Receiver email not found' });
            }

            // Insert connection request into connections table
            const insertRequestQuery = 'INSERT INTO connections (sender_email, receiver_email, status, created_at) VALUES (?, ?, ?, NOW())';
            connection.query(insertRequestQuery, [senderEmail, receiverEmail, 'pending'], (err, results) => {
                if (err) {
                    console.error('Error sending connection request:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }

                return res.status(200).json({ message: 'Connection request sent successfully' });
            });
        });
    });
};

// Function to accept a connection request
const acceptConnectionRequest = (req, res) => {
    const { requestId } = req.params;

    const acceptRequestQuery = 'UPDATE connections SET status = ? WHERE id = ?';
    connection.query(acceptRequestQuery, ['accepted', requestId], (err, results) => {
        if (err) {
            console.error('Error accepting connection request:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        return res.status(200).json({ message: 'Connection request accepted successfully' });
    });
};

// Function to reject a connection request
const rejectConnectionRequest = (req, res) => {
    const { requestId } = req.params;

    const rejectRequestQuery = 'UPDATE connections SET status = ? WHERE id = ?';
    connection.query(rejectRequestQuery, ['rejected', requestId], (err, results) => {
        if (err) {
            console.error('Error rejecting connection request:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        return res.status(200).json({ message: 'Connection request rejected successfully' });
    });
};

module.exports = {
    sendConnectionRequest,
    acceptConnectionRequest,
    rejectConnectionRequest
};
