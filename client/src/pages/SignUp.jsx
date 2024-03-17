import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons

export default function SignUp() {
  // const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
          method: 'POST'
        , headers: { 'Content-Type': 'application/json' }
        , body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
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
            <span
              style={{ paddingLeft: '3px' }}
            >
              Mohsenizadeh
            </span>
          </Link>
          <p
            className='text-sm mt-3'
          >
            Please sign up with your email and password or with your Google account.
          </p>
        </div>
        {/* -------------------------------------------------- */}
        {/*                      RIGHT                         */}
        {/* -------------------------------------------------- */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div className='max-w-md'>
              <Label
                value='Username'
              />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div className='max-w-md'>
              <Label
                value='Email'
              />
              <TextInput
                type='email'
                placeholder='j.doe@gmail.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className='max-w-md'>
              <Label
                value='Password'
              />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              className='max-w-md'
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
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
          <div className='flex gap-1 text-sm'>
            <span>
              Already have an account?
            </span>
            <Link
              to='/sign-in'
              className='text-blue-500'
            >
              Sign In
            </Link>
          </div>
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
