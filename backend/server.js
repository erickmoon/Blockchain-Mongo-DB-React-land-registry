// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
const connectDB = require('./config/db'); // Import the database connection function

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to the database
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
