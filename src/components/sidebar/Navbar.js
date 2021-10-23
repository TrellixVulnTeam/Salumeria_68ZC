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
          <NavLink activeclassName='selected' to='/' exact={true}>
            <p>HOME</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeclassName='selected' to='/salumi'>
            <p>SALUMI</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeclassName='selected' to='/stabilimento'>
            <p>STABILIMENTO</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeclassName='selected' to='/chisiamo'>
            <p>CHI SIAMO</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeclassName='selected' to='/contatti'>
            <p>CONTATTI</p>
          </NavLink>
        </li>
        <li>
          <div activeclassName='iconsContainer'>
            <a
              activeclassName='navNavLink'
              href='https://it-it.facebook.com/SalumificioArtigianaleMei/'
              target='blank'
            >
              <img
                activeclassName='contactIcon'
                id='facebook'
                src={facebook}
                alt='facebook'
              />
            </a>
            <a
              activeclassName='navNavLink'
              href='https://wa.me/+393456380585'
              target='blank'
            >
              <img
                activeclassName='contactIcon'
                id='whatzapp'
                src={whatzapp}
                alt='whatzapp'
              />
            </a>
            <a
              activeclassName='navNavLink'
              href='mailto:salumificiomei@hotmail.it'
              target='blank'
            >
              <img
                activeclassName='contactIcon'
                id='mail'
                src={mail}
                alt='mail'
              />
            </a>
            <a
              activeclassName='navNavLink'
              href='tel:+393456380585'
              target='blank'
            >
              <img
                activeclassName='contactIcon'
                id='telefono'
                src={telefono}
                alt='telefono'
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
