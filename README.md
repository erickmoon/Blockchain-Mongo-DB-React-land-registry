# Land Registry System implemented in blockchain

This project implements a land registry system using blockchain technology. It allows users to register land, transfer ownership, and manage land records using smart contracts. The application is built with Solidity for smart contracts, Node.js for the backend, React for the frontend, and MongoDB for storing non-public data.

## Table of Contents

- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Smart Contract Details](#smart-contract-details)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)

## Technologies

- **Solidity**: For writing smart contracts.
- **Node.js**: Backend server and API development.
- **Truffle**: Smart contract development framework.
- **Ganache**: Personal blockchain for Ethereum development.
- **React**: Frontend development.
- **Bootstrap**: For styling the frontend.
- **MongoDB**: For storing user data and other non-public information.
- **Web3.js**: To interact with the Ethereum blockchain from Node.js.

## Project Structure

```
land-registry/
│
├── backend/
│   ├── controllers/
│   │   ├── landController.js
│   │   └── userController.js
│   │
│   ├── models/
│   │   └── userModel.js
│   │
│   ├── migrations/
│   │   └── 1_initial_migration.js
│   │
│   ├── contracts/
│   │   ├── LandRegistry.sol
│   │   └── Migrations.sol
│   │
│   ├── routes/
│   │   └── apiRoutes.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── config/
│   │   ├── db.js
│   │   └── jwtConfig.js
│   │
│   ├── utils/
│   │   └── blockchainUtils.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── LandRegistry.js
    │   │
    │   ├── App.js
    │   ├── index.js
    │   └── styles.css
    │
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    │
    ├── package.json
    └── .env
```

## Backend Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Make sure MongoDB is installed and running. You can get it from [mongodb.com](https://www.mongodb.com/try/download/community).
- **Truffle**: Install Truffle globally if you haven't already:
  ```bash
  npm install -g truffle
  ```

### Installation

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install express mongoose cors body-parser jsonwebtoken web3
   npm install --save-dev truffle ganache-cli
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following content:

   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Deploy smart contracts:**

   Make sure Ganache is running, then deploy the contracts using Truffle:

   ```bash
   truffle migrate
   ```

5. **Start the Node.js server:**

   ```bash
   node server.js
   ```

## Frontend Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed as described above.

### Installation

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install axios react-bootstrap bootstrap
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `frontend` directory with the following content:

   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Start the React development server:**

   ```bash
   npm start
   ```

## Running the Project

1. **Start Ganache:**

   Run Ganache to provide a local Ethereum blockchain for development.

2. **Deploy smart contracts:**

   Use Truffle to deploy your contracts to the local blockchain:

   ```bash
   cd backend
   truffle migrate
   ```

3. **Start the backend server:**

   ```bash
   node server.js
   ```

4. **Start the frontend application:**

   ```bash
   cd frontend
   npm start
   ```

Visit `http://localhost:3000` in your web browser to access the frontend application.

## API Endpoints

### User Endpoints

- **Register User**

  - **Endpoint:** `POST /api/register`
  - **Description:** Register a new user.
  - **Request Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Login User**

  - **Endpoint:** `POST /api/login`
  - **Description:** Login a user and receive a JWT token.
  - **Request Body:**
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

### Land Endpoints

- **Register Land**

  - **Endpoint:** `POST /api/register-land`
  - **Description:** Register new land.
  - **Request Body:**
    ```json
    {
      "location": "123 Main St"
    }
    ```

- **Transfer Land**

  - **Endpoint:** `POST /api/transfer-land`
  - **Description:** Transfer land ownership to a new address.
  - **Request Body:**
    ```json
    {
      "id": 1,
      "newOwner": "0x1234567890abcdef1234567890abcdef12345678"
    }
    ```

## Smart Contract Details

### LandRegistry.sol

- **Function: `registerLand(string _location)`**
  Registers a new land with the given location.

- **Function: `transferLand(uint _id, address _newOwner)`**
  Transfers ownership of land with the specified ID to a new owner.

- **Function: `updateLandStatus(uint _id, bool _isAvailable)`**
  Updates the availability status of the land.

- **Function: `getLand(uint _id)`**
  Retrieves details of the land with the specified ID.

## Security Considerations

- **JWT Authentication:** Ensure that JWT tokens are securely stored and validated on each request.
- **Input Validation:** Validate and sanitize all inputs to prevent injection attacks and ensure data integrity.
- **HTTPS:** Use HTTPS for secure communication between the frontend and backend.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes and commit:**

   ```bash
   git commit -am 'Add new feature'
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/your-feature
   ```

5. **Create a new Pull Request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
