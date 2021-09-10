/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css';
import { Link } from 'react-router-dom';
import facebook from '../../assets/icons/facebook.png';
import whatzapp from '../../assets/icons/whatzapp.png';
import mail from '../../assets/icons/mail.png';
import telefono from '../../assets/icons/telefono.png';
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
          <Link className='link-nav' to='/salumi'>
            <p>SALUMI</p>
          </Link>
        </li>
        <li>
          <Link className='link-nav' to='/stabilimento'>
            <p>STABILIMENTO</p>
          </Link>
        </li>
        <li>
          <Link className='link-nav' to='/chisiamo'>
            <p>CHI SIAMO</p>
          </Link>
        </li>
        <li>
          <Link className='link-nav' to='/contatti'>
            <p>CONTATTI</p>
          </Link>
        </li>
        <li>
          <div className='iconsContainer'>
            <a
              className='navLink'
              href='https://it-it.facebook.com/SalumificioArtigianaleMei/'
              target='blank'
            >
              <img
                className='contactIcon'
                id='facebook'
                src={facebook}
                alt='facebook'
              />
            </a>
            <a
              className='navLink'
              href='https://wa.me/+393456380585'
              target='blank'
            >
              <img
                className='contactIcon'
                id='whatzapp'
                src={whatzapp}
                alt='whatzapp'
              />
            </a>
            <a
              className='navLink'
              href='mailto:salumificiomei@hotmail.it'
              target='blank'
            >
              <img className='contactIcon' id='mail' src={mail} alt='mail' />
            </a>
            <a className='navLink' href='tel:+393456380585' target='blank'>
              <img
                className='contactIcon'
                id='telefono'
                src={telefono}
                alt='telefono'
              />
            </a>
          </div>
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
              <Link className='link-nav' to='/salumi'>
                <p>SALUMI</p>
              </Link>
            </li>
            <li>
              <Link className='link-nav' to='/stabilimento'>
                <p>STABILIMENTO</p>
              </Link>
            </li>
            <li>
              <Link className='link-nav' to='/chisiamo'>
                <p>CHI SIAMO</p>
              </Link>
            </li>
            <li>
              <Link className='link-nav' to='/contatti'>
                <p>CONTATTI</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
