import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
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
          <form className='flex flex-col gap-4'>
            <div className='max-w-md'>
              <Label
                value='Your email'
              />
              <TextInput
                type='text'
                placeholder='Email'
                id='email'
              />
            </div>
            <div className='max-w-md'>
              <Label
                value='Your username'
              />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              />
            </div>
            <div className='max-w-md'>
              <Label
                value='Your password'
              />
              <TextInput
                type='text'
                placeholder='Password'
                id='password'
              />
            </div>
            <div>
              <Button
                gradientDuoTone='purpleToPink'
                type='submit'
                style={{ marginBottom: '0px' }}
              >
                Sign Up
              </Button> 
            </div>   
          </form>
          <div className='flex gap-1 text-sm'>
            <span>
              Have an account?
            </span>
            <Link
              to='/sign-in'
              className='text-blue-500'
            >
              Sign In
            </Link>
          </div>
        </div>
      {/* -------------------------------------------------- */}
      </div>
    </div>
  )
}
