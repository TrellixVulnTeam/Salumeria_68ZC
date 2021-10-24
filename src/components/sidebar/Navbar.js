/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import facebook from '../../assets/icons/facebook.png';
import whatzapp from '../../assets/icons/whatzapp.png';
import mail from '../../assets/icons/mail.png';
import telefono from '../../assets/icons/telefono.png';

function SideBar() {
  return (
    <div className='Navbar'>
      <ul className='navBar'>
        <li>
          <NavLink activeClassName='selected' to='/' exact={true}>
            <p>HOME</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='selected' to='/salumi'>
            <p>SALUMI</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='selected' to='/stabilimento'>
            <p>STABILIMENTO</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='selected' to='/chisiamo'>
            <p>CHI SIAMO</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='selected' to='/contatti'>
            <p>CONTATTI</p>
          </NavLink>
        </li>

        <div className='iconsContainer'>
          <a
            className='navNavLink'
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
            className='navNavLink'
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
          </div>
        <div className='iconsContainer'>

          <a
            className='navNavLink'
            href='mailto:salumificiomei@hotmail.it'
            target='blank'
          >
            <img className='contactIcon' id='mail' src={mail} alt='mail' />
          </a>
          <a className='navNavLink' href='tel:+393456380585' target='blank'>
            <img
              className='contactIcon'
              id='telefono'
              src={telefono}
              alt='telefono'
            />
          </a>
        </div>
       

      </ul>
    </div>
  );
}

export default SideBar;
