import { Link, useMatch, useResolvedPath } from 'react-router-dom'
// import search from '../imgs/search.svg'
import { GoSearch } from 'react-icons/go'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className='nav'>
      <div className='nav-inner'>
        <div className='topbar'>
          <div className='nav-top_socials'>
            <Link to='#' className='social-link'>
              <FaInstagram style={{ fontSize: '20px', cursor: 'pointer' }} />{' '}
              <span className='social-handle'>thebestblog</span>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to='#' className='social-link'>
              <FaYoutube style={{ fontSize: '20px', cursor: 'pointer' }} />{' '}
              <span className='social-handle'>thebestblog</span>
            </Link>
          </div>
          <div className='nav-top_search'>
            <p className='takecare'>"take care of yourself"</p>
            {/* <img src={search} alt='search' className='search' /> */}
            <GoSearch style={{ fontSize: '20px', cursor: 'pointer' }} />
          </div>
        </div>

        <div className='nav-primary section'>
          <div className='nav-logo'>
            <Link to='/' className='site-title'>
              The Best Blog.
              <span className='tagline'>really, its the best</span>
            </Link>
          </div>
          <div className='nav-menu'>
            <ul>
              <CustomLink to='/'>Home&nbsp;/&nbsp;Blog</CustomLink>
              <CustomLink to='/about'>About&nbsp;Me</CustomLink>
            </ul>
          </div>
        </div>
        <div className='section'>
          <div className='nav-trending'>
            <p className='trending'>Trending&nbsp;Now</p>
            <p className='trending-topics'>
              Smoothies Are Nutrient Dense &amp; Filling | 11-Workouts in 11
              Days | Chic Summer Style Like Fashions Best
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link to={to} {...props}>
      <li className={isActive ? 'active' : ''}>{children}</li>
    </Link>
  )
}
