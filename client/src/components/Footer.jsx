import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGlobe, BsFacebook, BsInstagram, BsYoutube, BsGithub, BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
// ================================================== //
// Define your links as variables
const links = {
      about          : "/about"
    , facebook       : "https://www.facebook.com"
    , github         : "https://github.com/mehrdadmohsenizadeh"
    , home           : "/home"
    , instagram      : "https://www.instagram.com"
    , linkedin       : "https://www.linkedin.com/in/mehrdad-mohsenizadeh"
    , newsletter     : "/newsletter"
    , papers         : "/papers"
    , portfolio      : "https://www.mehrdadmohsenizadeh.com"
    , privacyPolicy  : "/privacy-policy"
    , projects       : "/projects"
    , recentPosts    : "/recent-posts"
    , rssFeed        : "/rss-feed"
    , termsOfService : "/terms-of-service"
    , youtube        : "https://www.youtube.com"
};
// -------------------------------------------------- //
/**
 * Generates an array of Footer.Link components based on the provided links object.
 * Each link is represented by a Footer.Link component with attributes such as href, target, and rel.
 *
 * @param {object} links - An object containing key-value pairs where keys represent link text and values represent link URLs.
 * @returns {Array} An array of Footer.Link components.
 */
const createFooterLinks = (links) => {

    // Convert the links object into an array of key-value pairs and map over them
    return Object.entries(links).map(([key, value]) => (
        
        // For each entry in the links array, create a Footer.Link component
        <Footer.Link
            key={key}                 // Use the key as the unique identifier for each link
            href={value}              // Use the value as the URL for the link
            target="_blank"           // Open the link in a new tab/window
            rel='noopener noreferrer' // Recommended security attributes for external links
        >
            {key}
        </Footer.Link>
    ));
};
// -------------------------------------------------- //
/**
 * Generates a Footer section for a specific link group.
 *
 * @param {string} title - The title of the link group.
 * @param {object} links - An object containing key-value pairs where keys represent link text and values represent link URLs.
 * @returns {JSX.Element} A JSX element representing the Footer section for the link group.
 */
const generateFooterSection = (title, links) => {
    return (
        <div>
            <Footer.Title title={title} className='footer-title' />
            <Footer.LinkGroup col>
                {createFooterLinks(links)}
            </Footer.LinkGroup>
        </div>
    );
};
// -------------------------------------------------- //
/**
 * Function to create an icon link.
 * @param {string} link - The name of the link, used to fetch the URL from the 'links' object.
 * @param {React.Component} IconComponent - The icon component to be rendered.
 * @param {number} [iconSize=24] - The size of the icon (default: 24).
 * @returns {JSX.Element} - The JSX element representing the icon link.
 */
const createIconLink = (link, IconComponent, iconSize = 24) => {
    return (
        <span className={`icon-wrapper-footer ${link}-icon`}>
            <a href={links[link]} target="_blank" rel="noopener noreferrer">
                <IconComponent size={iconSize} />
            </a>
        </span>
    );
};
// ================================================== //
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
                    {/* ================================================== */}
                    {/*                       LOGO                         */}
                    {/* ================================================== */}
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
                    {/* ================================================== */}
                    {/*                       LINKS                        */}
                    {/* ================================================== */}
                    <div className='
                        grid
                        grid-cols-2
                        gap-8
                        mt-4
                        sm:grid-cols-4
                        sm:gap-4
                        '
                    >
                        {/* ----------------------------------------------- */}
                        {/*                    SITE MAP                     */}
                        {/* ----------------------------------------------- */}
                        <div>
                            {generateFooterSection('Site Map', {
                                    'Home'         : links.home
                                  , 'About'        : links.about
                                  , 'Projects'     : links.projects
                                  , 'Recent Posts' : links.recentPosts
                                  , 'Papers'       : links.papers
                                })}
                        </div>
                        {/* ----------------------------------------------- */}
                        {/*                    FOLLOW US                    */}
                        {/* ----------------------------------------------- */}
                        <div>
                            {generateFooterSection('Follow Us', {
                                  'LinkedIn'   : links.linkedin
                                , 'GitHub'     : links.github
                                , 'Portfolio'  : links.portfolio
                                , 'YouTube'    : links.youtube
                                , 'Instagram'  : links.instagram
                            })}
                        </div>
                        {/* ----------------------------------------------- */}
                        {/*                    SUBSCRIBE                    */}
                        {/* ----------------------------------------------- */}
                        <div>
                            {generateFooterSection('Subscribe', {
                                    'Newsletter' : links.newsletter
                                  , 'RSS Feed'   : '#'
                                })}
                        </div>
                        {/* ----------------------------------------------- */}
                        {/*                      LEGAL                      */}
                        {/* ----------------------------------------------- */}
                        <div>
                            {generateFooterSection('Legal', {
                                  'Privacy Policy'   : '#'
                                , 'Terms of Service' : '#'
                            })}
                        </div>
                    </div>
                </div>
                {/* ================================================== */}
                {/*                 COPYRIGHT & ICONS                  */}
                {/* ================================================== */}
                <Footer.Divider />
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='flex items-center gap-6 mt-4'>
                        {createIconLink("linkedin"  , BsLinkedin)}
                        {createIconLink("github"    , BsGithub)}
                        {createIconLink("portfolio" , BsGlobe)}
                        {createIconLink("youtube"   , BsYoutube)}
                        {createIconLink("instagram" , GrInstagram)}
                    </div>
                    <div className="mt-6 text-center">
                        <Footer.Copyright
                            href='/home'
                            by="Mehrdad Mohsenizadeh"
                            year={new Date().getFullYear()}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    )
}