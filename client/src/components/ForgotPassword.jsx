import React, { useState } from 'react';
import { Alert, Button, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would handle the form submission to your backend
    // For now, let's just log the email to the console
    console.log(email);
    // After submitting, you might want to show a message or redirect the user
    setMessage('If an account with that email exists, we have sent a password reset link.');
    // Optionally, redirect the user back to the sign-in page or elsewhere
    // navigate('/sign-in');
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h2 className='mb-4 text-3xl font-bold'>Reset Your Password</h2>
      <form className='w-full max-w-sm' onSubmit={handleSubmit}>
        <TextInput
          id='email'
          type='email'
          placeholder='Enter your email address'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type='submit'>Send Reset Link</Button>
      </form>
      {message && <Alert color='info'>{message}</Alert>}
    </div>
  );
}
