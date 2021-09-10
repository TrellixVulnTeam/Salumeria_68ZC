/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css';
import { Link } from 'react-router-dom';
// import images from '../../data/images.json';

function Header() {
  return (
    <div className='Navbar'>
      <ul className='navBar'>
        <li>
          <Link className='link-nav' to='/'>
            <p>HOME</p>
          </Link>
        </li>
        <li>
          <Link className='link-nav' to='/training'>
            <p>TRAINING</p>
          </Link>
        </li>
        <li>
          <Link className='link-nav' to='/wellness'>
            <p>WELLNESS</p>
          </Link>
        </li>
        <li>
          <Link className='link-nav' to='/about'>
            <p>ABOUT</p>
          </Link>
        </li>
        <li>
          <Link className='link-nav' to='/contact'>
            <p>CONTACT</p>
          </Link>
        </li>
      </ul>

      <nav role='navigation'>
        <div id='menuToggle'>
          <input id='menuInput' type='checkbox' />

          <span></span>
          <span></span>
          <span></span>

          <ul id='menu'>
            <li>
              <Link className='link-nav' to='/'>
                <p>HOME</p>
              </Link>
            </li>

            <li>
              <Link className='link-nav' to='/news'>
                <p>NEWS</p>
              </Link>
            </li>
            <li>
              <Link className='link-nav' to='/training'>
                <p>TRAINING</p>
              </Link>
            </li>
            <li>
              <Link className='link-nav' to='/welLness'>
                <p>WELLNESS</p>
              </Link>
            </li>
            <li>
              <Link className='link-nav' to='/about'>
                <p>ABOUT</p>
              </Link>
            </li>
            <li>
              <Link className='link-nav' to='/contact'>
                <p>CONTACT</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
