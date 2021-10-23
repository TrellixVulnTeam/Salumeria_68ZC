import { useContext } from 'react';
import { Context } from '../../App';
import './burgerMenu.scss';
import { NavLink } from 'react-router-dom';
// import facebook from '../../../assets/icons/facebook.png';
// import instagram from '../../../assets/icons/instagram.png';
// import youtube from '../../../assets/icons/youtube.png';
// import whatzapp from '../../../assets/icons/whatzapp.png';
// import mail from '../../../assets/icons/mail.png';
// import telefono from '../../../assets/icons/telefono.png';


function BurgerMenu() {
  const { menuToogle, setMenuToogle } = useContext(Context);

  const handleToggle = () => {
    setMenuToogle((prev) => !prev);
  };
  // const handleToggle = () => {
  //   if (window.innerWidth < 200) {
  //     setMenuToogle((prev) => !prev);
  //   }
  // };

  return (
    <>
      <div id='menuToggle'>
        <input id='menuInput' onClick={handleToggle} />

        <span
          className={`${
            menuToogle ? 'spansOpen firstSpanOpen' : 'firstSpanClose'
          }`}
        ></span>
        <span
          className={`${
            menuToogle ? 'spansOpen secondSpanOpen' : 'secondSpanClose'
          }`}
        ></span>
        <span
          className={`${
            menuToogle ? 'spansOpen thirdSpanOpen' : 'thirdSpanClose'
          }`}
        ></span>

        {menuToogle && (
          <ul id='menu'>
     
            <li>
              <NavLink
                exact={true}
                activeClassName='selected'
                className='link-nav'
                to='/'
              >
                <p onClick={handleToggle}>HOME</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/salumi'
              >
                <p onClick={handleToggle}>SALUMI</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/stabilimento'
              >
                <p onClick={handleToggle}>STABILIMENTO</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/chisiamo'
              >
                <p onClick={handleToggle}>CHI SIAMO</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName='selected'
                className='link-nav'
                to='/contatti'
              >
                <p onClick={handleToggle}>CONTATTI</p>
              </NavLink>
            </li>

            <div className='iconsContainer'>
              <div className='contactsContainer'>
                <a
                  className='navLink'
                  href='https://wa.me/+393488733334'
                  target='blank'
                >
                  <img
                    className='contactIcon'
                    id='whatzapp'
                    // src={whatzapp}
                    alt='whatzapp'
                  />
                </a>
                <a
                  className='navLink'
                  href='mailto:sjmanca@gmail.com'
                  target='blank'
                >
                  <img
                    className='contactIcon'
                    id='mail'
                    // src={mail}
                    alt='mail'
                  />
                </a>
                <a className='navLink' href='tel:+393488733334' target='blank'>
                  <img
                    className='contactIcon'
                    id='telefono'
                    // src={telefono}
                    alt='telefono'
                  />
                </a>
              </div>
            </div>
          </ul>
        )}
      </div>
    </>
  );
}

export default BurgerMenu;
