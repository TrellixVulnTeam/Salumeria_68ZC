import { Link } from 'react-router-dom';
import './trainingNav.css';

const TrainingNav = () => {
  return (
    <ul className='TrainingNav'>
      <Link className='trainingnavList' to='/'>
        <li>allenamenti</li>
      </Link>

      <Link className='trainingnavList' to='/tabelle'>
        <li>tabelle</li>
      </Link>

      <Link className='trainingnavList' to='/exercise'>
        <li>esercizi</li>
      </Link>

      <Link className='trainingnavList' to='/appuntamenti'>
        <li>appuntamenti</li>
      </Link>

      <Link className='trainingnavList' to='/luoghi'>
        <li>luoghi</li>
      </Link>

      <Link className='trainingnavList' to='/prodotti'>
        <li>prodotti</li>
      </Link>


    </ul>
  );
};

export default TrainingNav;
