import React, { useState } from 'react';


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          name: `${formData.firstName} ${formData.lastName}`,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful! You can now log in.');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div id="sign-up-container">
        <div id="sign-up-form-container">
        <h1>Sign up</h1>
        <input name="firstName" placeholder="first name" type="text" onChange={handleChange} />
        <input name="lastName" placeholder="last name" type="text" onChange={handleChange} />
        <br />
        <input name="email" placeholder="email" type="email" onChange={handleChange} />
        <input name="phone" placeholder="phone number" type="text" onChange={handleChange} />
        <br />
        <input name="password" placeholder="password" type="password" onChange={handleChange} />
        <br />
        <input name="confirmPassword" placeholder="confirm password" type="password" onChange={handleChange} />
        <div id="login-link">
          <a href="/login">Already have an account?</a>
        </div>
        <br />
        <button id="sign-up-button" type="button" onClick={handleSignup}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Signup;
