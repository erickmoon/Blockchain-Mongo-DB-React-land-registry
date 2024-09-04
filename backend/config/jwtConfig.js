// Load environment variables from .env file
require('dotenv').config();

module.exports = {
    secret: process.env.JWT_SECRET
};
