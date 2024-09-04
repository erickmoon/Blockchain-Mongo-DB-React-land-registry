// src/components/User/Register.js

// Import React and useState from the React library
import React, { useState } from 'react';
// Import the registerUser function from the API module
import { registerUser } from '../../api';

// Define the Register functional component
const Register = () => {
  // Initialize formData state with empty fields for name, email, and password
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  // Event handler to update formData state when form fields change
  const handleChange = (e) => {
    // Use spread operator to copy current formData and update the specific field
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event handler to handle form submission
  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    try {
      // Call the registerUser function with form data and wait for the response
      await registerUser(formData.name, formData.email, formData.password);
      // Show success message if registration is successful
      alert('User registered successfully');
    } catch (error) {
      // Show error message if registration fails
      alert(error.response.data.error);
    }
  };

  // Return JSX to render the registration form
  return (
    // Form element with onSubmit handler
    <form onSubmit={handleSubmit}>
      {/* Input field for user name */}
      <input
        type="text"  // Specifies the input type as text
        name="name"  // Sets the name attribute to "name"
        placeholder="Name"  // Placeholder text for the input field
        value={formData.name}  // Sets the value of the input field to formData.name
        onChange={handleChange}  // Calls handleChange when input value changes
      />
      {/* Input field for user email */}
      <input
        type="email"  // Specifies the input type as email
        name="email"  // Sets the name attribute to "email"
        placeholder="Email"  // Placeholder text for the input field
        value={formData.email}  // Sets the value of the input field to formData.email
        onChange={handleChange}  // Calls handleChange when input value changes
      />
      {/* Input field for user password */}
      <input
        type="password"  // Specifies the input type as password
        name="password"  // Sets the name attribute to "password"
        placeholder="Password"  // Placeholder text for the input field
        value={formData.password}  // Sets the value of the input field to formData.password
        onChange={handleChange}  // Calls handleChange when input value changes
      />
      {/* Submit button for the form */}
      <button type="submit">Register</button>
    </form>
  );
};

// Export the Register component as the default export
export default Register;
