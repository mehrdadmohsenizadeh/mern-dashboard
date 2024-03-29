import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TbUserFilled } from "react-icons/tb";
import { HiMiniEnvelope } from "react-icons/hi2";
import { RiLock2Fill } from "react-icons/ri";
import { FiEye, FiEyeOff } from 'react-icons/fi';
// ==================================================
{/*
TO TEST THE SIGN UP PAGE, YOU MUST RUN "npm run dev" TWICE IN TWO SEPARATE TERMINALS:
1. The server (http://localhost:3000/api/user/test) from the root folder
2. The client (http://localhost:5173/sign-up) from the /client folder
*/}
// ==================================================
export default function SignUp() {
  // -------------------------------------------------------
  //                         CONST
  // -------------------------------------------------------
  const navigate                                      = useNavigate();
  const [loading, setLoading]                         = useState(false);
  const [formData, setFormData]                       = useState({confirmPassword: '',});  
  const [errorMessage, setErrorMessage]               = useState(null) ;
  const [showPassword, setShowPassword]               = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // -------------------------------------------------------
  //                     HANDLE CHANGE
  // -------------------------------------------------------
  // Handle change in the input fields
  const handleChange = (e) => {
    setFormData({
        ...formData
      , [e.target.id]: e.target.value.trim()
    });
  };
  // -------------------------------------------------------
  //                     HANDLE CLICK
  // -------------------------------------------------------
  // Prevent the default behavior of the anchor tag
  const handleClick = (event) => {
    event.preventDefault();
  }
  // -------------------------------------------------------
  //                    PASSWORD TOGGLE
  // -------------------------------------------------------
  // Password toggle component
  const PasswordToggle = ({ showPassword, setShowPassword }) => {
    return (
      <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
        {showPassword ? (
          <FiEyeOff
            className='cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <FiEye
            className='cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    );
  };
  // -------------------------------------------------------
  //                     HANDLE SUBMIT
  // -------------------------------------------------------
  // Handle form submission
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      return setErrorMessage('Please fill out all fields.');
    }
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage('Passwords do not match.');
    }
    
    try {
      setLoading(true);
      setErrorMessage(null);

      // Attempt to sign up the user
      const res = await fetch('/api/auth/signup', {
          method: 'POST'
        , headers: { 'Content-Type': 'application/json' }
        , body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        // If there's a failure (e.g., invalid email), stop the spinner and show error
        setErrorMessage(data.message);
      } else {
        // If signup is successful, show a success toast and redirect user to Sign In page
        navigate('/sign-in');
      }
    } catch (error) {
      // If there's an exception during sign up, stop the spinner and show error
      setErrorMessage(error.message);
    }
    // Stop the loading process regardless of the outcome
    setLoading(false); 
  };
  // -------------------------------------------------------
  return (
    <div className='
      min-h-screen
      mt-20
    '
    >
      {/* -------------------------------------------------- */}
      {/*                    LEFT & RIGHT                    */}
      {/* -------------------------------------------------- */}
      <div className='
        flex
        p-3
        max-w-3xl
        mx-auto
        flex-col
        md:flex-row
        md:items-center
        gap-10
      '
      >
        {/* -------------------------------------------------- */}
        {/*                      LEFT                          */}
        {/* -------------------------------------------------- */}
        <div className='
          flex-1
          md:border-r-2
          md:pr-6 mb-24
          md:border-solid
          md:border-gray-200
          '
        >
          <Link
            to='/'
            className='
            font-bold
            dark:text-white
            text-4xl
            '
            onClick={handleClick}
            style={{ cursor: 'default' }}
          >
            <span className='
              px-2
              py-1
              bg-gradient-to-r
              from-indigo-500
              via-purple-500
              to-pink-500
              rounded-lg
              text-white
              '
            >
              Mehrdad
            </span>
            <span style={{ paddingLeft: '3px' }}>
              Mohsenizadeh
            </span>
          </Link>
          <p className='text-sm mt-4'>
            Please sign up with your email and password or with Google.
          </p>
        </div>
        {/* -------------------------------------------------- */}
        {/*                      RIGHT                         */}
        {/* -------------------------------------------------- */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/*                       USERNAME                     */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className="max-w-md">
              <TextInput
                id='username'
                type='text'
                placeholder='Username'
                onChange={handleChange}
                icon={TbUserFilled}
              />
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/*                        EMAIL                       */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className='max-w-md'>
              <TextInput
                id='email'
                type='email'
                placeholder='Email'
                onChange={handleChange}
                icon={HiMiniEnvelope} 
              />
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/*                       PASSWORD                     */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className='relative max-w-md'>
              <TextInput
                id='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                onChange={handleChange}
                icon={RiLock2Fill}
              />
              <PasswordToggle
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/*                   CONFIRM PASSWORD                 */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className='relative max-w-md'>
              <TextInput 
                id='confirmPassword' 
                type={showConfirmPassword ? 'text' : 'password'} 
                placeholder='Confirm Password' 
                onChange={handleChange}
                icon={RiLock2Fill}
                onPaste={(e) => e.preventDefault()} // prevent pasting password
              />
              <PasswordToggle
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
              />
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/*                       SIGN UP                      */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <Button type='submit' className='max-w-md' gradientDuoTone='purpleToPink' disabled={loading} >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            </form>
          {/* -------------------------------------------------- */}
          {/*                    HAVE ACCOUNT?                   */}
          {/* -------------------------------------------------- */}
          <div className='flex gap-1 text-sm'>
            <span>
              Already have an account?
            </span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {/* -------------------------------------------------- */}
          {/*                    ERROR MESSAGE                   */}
          {/* -------------------------------------------------- */}
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
          {/* -------------------------------------------------- */}
          </div>
      </div>
    </div>
  );
}

