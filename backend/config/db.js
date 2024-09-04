const mongoose = require('mongoose');
require('dotenv').config(); // Ensure environment variables are loaded

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;
