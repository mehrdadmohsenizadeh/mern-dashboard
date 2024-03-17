import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { RiLock2Fill } from "react-icons/ri";


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const [loading, setLoading] = useState(false);

  // const [formData, setFormData] = useState({});

  const [formData, setFormData] = useState({
    confirmPassword: '',
  });  

  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

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
        // If there's a failure (e.g., username already taken), stop the spinner and show error
        setErrorMessage(data.message);
      } else {
        // If signup is successful, redirect the user
        navigate('/sign-in');
      }
    } catch (error) {
      // If there's an exception during sign up, stop the spinner and show error
      setErrorMessage(error.message);
    }
    // Stop the loading process regardless of the outcome
    setLoading(false); 
  };
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
          md:pr-6
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
          <p className='text-sm mt-3'>
            Please sign up with your email and password or with your Google account.
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
                icon={FaUser} />
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {/*                        EMAIL                       */}
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className='max-w-md'>
              <TextInput
                id='email'
                type='email'
                placeholder='j.doe@gmail.com'
                onChange={handleChange}
                icon={FaEnvelope} />
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
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                {showConfirmPassword ? (
                  <FiEyeOff
                    className='cursor-pointer'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <FiEye
                    className='cursor-pointer'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </div>
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
          </form>
          {/* -------------------------------------------------- */}
          {/*                    HAVE ACCOUNT?                   */}
          {/* -------------------------------------------------- */}
          <div className='flex gap-1 text-sm'>
            <span> Already have an account? </span>
            <Link to='/sign-in' className='text-blue-500'> Sign In </Link>
          </div>
          {/* -------------------------------------------------- */}
          {/*                   FORGOT PASSWORD?                 */}
          {/* -------------------------------------------------- */}
          <div className='flex gap-1 text-sm'>
            <Link to='/forgot-password' className='text-blue-500'>
              Forgot Password?
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
        </div>
      </div>
    </div>
  );
}

