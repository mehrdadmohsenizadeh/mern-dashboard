import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsFacebook, BsInstagram, BsYoutube, BsGithub, BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

export default function FooterCom() {
    return(
        <Footer
        container
        className='
        border-t-8
        border-teal-500
        '
        >
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1 footer-link-group'>
                    <div className='mt-5 pr-5'>
                        <Link
                            to="/"
                            className='
                            footer-logo-link
                            self-center
                            whitespace-nowrap
                            text-lg
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
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-4 sm:gap-4'>
                        {/* -------------------------------------------------- */}
                        {/*                       ABOUT                        */}
                        {/* -------------------------------------------------- */}
                        <div>
                            <Footer.Title title='About' className='footer-title' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://www.mehrdad-mohsenizadeh.com"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    Portfolio
                                </Footer.Link>
                                <Footer.Link
                                    href="/about"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        {/* -------------------------------------------------- */}
                        {/*                     FOLLOW US                      */}
                        {/* -------------------------------------------------- */}
                        <div>
                            <Footer.Title title='Follow Us' className='footer-title' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://github.com/mehrdadmohsenizadeh/"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    GitHub
                                </Footer.Link>
                                <Footer.Link
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    YouTube
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        {/* -------------------------------------------------- */}
                        {/*                      CONTACT                       */}
                        {/* -------------------------------------------------- */}
                        <div>
                            <Footer.Title title='Contact' className='footer-title' />
                            <Footer.LinkGroup col>
                            <Footer.Link
                                    href="https://www.linkedin.com/in/mehrdad-mohsenizadeh/"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    LinkedIn
                                </Footer.Link>
                                <Footer.Link
                                    href="https://www.instagram.com"
                                >
                                    Instagram
                                </Footer.Link>
                                <Footer.Link
                                    href="https://www.facebook.com"
                                >
                                    Facebook
                                </Footer.Link>
                                <Footer.Link
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel='noopener noreferrer'
                                >
                                    Twitter
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        {/* -------------------------------------------------- */}
                        {/*                       LEGAL                        */}
                        {/* -------------------------------------------------- */}
                        <div>
                            <Footer.Title title='Legal' className='footer-title' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="#"
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href="#"
                                >
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>                        
                    </div>
                </div>
                {/* ================================================== */}
                {/*                       ICONS                        */}
                {/* ================================================== */}
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href='/home'
                        by="Mehrdad's Blog"
                        year={new Date().getFullYear()}
                    />
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <span className="icon-wrapper-footer linkedin-icon">
                            <a href="https://www.linkedin.com/in/mehrdad-mohsenizadeh" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin size={24} />
                            </a>
                        </span>
                        <span className="icon-wrapper-footer github-icon">
                            <a href="https://github.com/mehrdadmohsenizadeh" target="_blank" rel="noopener noreferrer">
                                <BsGithub size={24} />
                            </a>
                        </span>
                        <span className="icon-wrapper-footer youtube-icon">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <BsYoutube size={28} />
                            </a>
                        </span>
                        <span className="icon-wrapper-footer facebook-icon">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <BsFacebook size={24} />
                            </a>
                        </span>
                        <span className="icon-wrapper-footer instagram-icon">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <GrInstagram size={24} />
                            </a>
                        </span>
                        <span className="icon-wrapper-footer twitter-icon">
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX size={24} />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </Footer>
    )
}