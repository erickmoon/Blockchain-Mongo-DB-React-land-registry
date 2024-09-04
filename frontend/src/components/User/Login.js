// src/components/User/Login.js
import React, { useState, useContext } from 'react'; // Import necessary React hooks
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext to use authentication functions

const Login = () => {
  // Initialize formData state with empty email and password fields
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Get the login function from AuthContext
  const { login } = useContext(AuthContext);

  // Function to handle changes in input fields
  const handleChange = (e) => {
    // Update formData state with the new value for the changed input field
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    try {
      // Call the login function from AuthContext with email and password
      await login(formData.email, formData.password);
      alert('Logged in successfully'); // Show success message
    } catch (error) {
      // Handle any errors that occur during login
      alert(error.response.data.error); // Show error message
    }
  };

  // Render the login form
  return (
    <form onSubmit={handleSubmit}> {/* Attach handleSubmit function to form submission */}
      <input
        type="email" // Input type for email
        name="email" // Name attribute for identifying the input
        placeholder="Email" // Placeholder text for the input field
        value={formData.email} // Set value from formData state
        onChange={handleChange} // Attach handleChange function to input change
      />
      <input
        type="password" // Input type for password
        name="password" // Name attribute for identifying the input
        placeholder="Password" // Placeholder text for the input field
        value={formData.password} // Set value from formData state
        onChange={handleChange} // Attach handleChange function to input change
      />
      <button type="submit">Login</button> {/* Submit button to trigger form submission */}
    </form>
  );
};

export default Login;
