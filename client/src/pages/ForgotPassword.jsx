import React, { useState } from 'react';
import { Alert, Button, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

import { CodeSnippetComponent } from '../components/CodeSnippet.jsx';
// ---------------------------------------------------
export default function ForgotPassword() {
  // --------------------------------------------------
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would handle the form submission to your backend
    // For now, let's just log the email to the console
    console.log(email);
    // After submitting, you might want to show a message or redirect the user
    setMessage('If an account with that email exists, we have sent a password reset link.');
    // Optionally, redirect the user back to the sign-in page or elsewhere
    navigate('/sign-in');
  };
  // --------------------------------------------------
  return (
    <div className='min-h-screen flex flex-col mt-10 items-center'>
      <h2 className='mb-4 text-4xl font-bold'>
        Reset Your Password
      </h2>
      <form className='w-full max-w-md px-4 py-6 bg-white shadow-lg rounded-lg'>
        <div className='mb-4'>
          <TextInput
            id='email'
            type='email'
            placeholder='Please enter your email address'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type='submit' className='w-full'>
          Send Reset Link
        </Button>
      </form>
      {message && <Alert color='info' className='mt-4'>{message}</Alert>}
    </div>
  );
}
