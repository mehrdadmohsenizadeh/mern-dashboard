import { Button, Navbar, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMoonFill } from "react-icons/bs";

const NavLink = ({ path, label }) => {
    return (
      <Navbar.Link active={path === '/'} as={'div'}>
        <Link to={path}>
          {label}
        </Link>
      </Navbar.Link>
    );
  };

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        {/* -------------------------------------------------- */}
        {/*                MEHRDAD MOHSENIZADEH                */}
        {/* -------------------------------------------------- */}
        <Link
        to="/"
        className='
        self-center
        whitespace-nowrap
        text-sm
        sm:text-xl
        font-semibold
        dark:text-white
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
        {/* -------------------------------------------------- */}
        {/*                     SEARCH BAR                     */}
        {/* -------------------------------------------------- */}
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        {/* -------------------------------------------------- */}
        {/*             DARK/LIGHT & SIGN-IN BUTTONS           */}
        {/* -------------------------------------------------- */}
        <div className='flex gap-2 md:order-2'>
            <Button
                className='w-12 h-10 hidden sm:inline rounded-xl'
                color='gray'
                pill
            >
                <BsFillMoonFill />
            </Button>
            <Link to='/sign-in'>
                <Button className='
                bg-gradient-to-r
                rounded-lg
                border-purple-500'
                gradientDuoTone='purpleToBlue'
                outline
                >
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle />
        </div>
        {/* -------------------------------------------------- */}
        {/*                 HOME/ABOUT/PROJECTS                */}
        {/* -------------------------------------------------- */}
        <Navbar.Collapse>
            <NavLink path='/'         label='Home'     />
            <NavLink path='/about'    label='About'    />
            <NavLink path='/projects' label='Projects' />
            <NavLink path='/papers'   label='Papers'   />
        </Navbar.Collapse>
        {/* -------------------------------------------------- */}
    </Navbar>
  )
}
