import { Link } from 'react-router-dom';
import './wellnessNav.css';

const WellnessNav = () => {
  return (
    <ul className='WellnessNav'>
      <Link className='wellnessnavList' to='/'>
        <li>massaggi</li>
      </Link>

      <Link className='wellnessnavList' to='/prezzi'>
        <li>prezzi</li>
      </Link>

      <Link className='wellnessnavList' to='/appuntamenti'>
        <li>appuntamentii</li>
      </Link>

      <Link className='wellnessnavList' to='/luoghi'>
        <li>luoghi</li>
      </Link>

      <div className='wellnessnavInputContainer'>
        <input
          type='search'
          id='site-search'
          name='q'
          aria-label='Search through site content'
        />
        <button>Cerca</button>
      </div>
    </ul>
  );
};

export default WellnessNav;
