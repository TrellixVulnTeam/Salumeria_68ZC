import './salume.css';
import salumeData from './salumeData';

const Salume = () => {
  return salumeData.map((salume) => (
      <div className='salumeWrapper'>
        <div className='salumeText'>
          <h2 className='salumeTitle'>{salume.title}</h2>
          <small className='salumemuscleGroup'>{salume.muscleGroup}</small>
          <small className='salumeDifficulty'>{salume.difficulty}</small>
        </div>
        <img className='salumeImage' src={salume.image} alt={salume.imageAlt} />
        <p className='salumeDescription'>{salume.description}</p>
      </div>
  ));
};

export default Salume;
