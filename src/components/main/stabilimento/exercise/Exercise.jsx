import './exercise.css';
import exerciseData from './exerciseData';

const Exercise = () => {
  return (
    <div className='Exercise'>
      <div className='selectExercise'>
        <label className='exerciseLabel' for='fasciaMuscolare'>
          FASCIA MUSCOLARE
        </label>
        <select name='exerciseSelectFascia' className='exerciseSelectFascia'>
          <option value='tutti'>tutti</option>
          <option value='petto'>petto</option>
          <option value='spalle'>spalle</option>
          <option value='tricipidi'>tricipidi</option>
          <option value='bicipidi'>bicipidi</option>
          <option value='dorso'>dorso</option>
          <option value='gambe'>gambe</option>
        </select>
        <label className='exerciseLabel' for='livello'>
          LIVELLO
        </label>
        <select name='exerciseSelectLevel' className='exerciseSelectLevel'>
          <option value='tutti'>tutti</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <div className='trainingSearch'>
          <input
            type='search'
            className='search'
            name='q'
            aria-label='Search through site content'
          />
          <button className='search'>Cerca</button>
        </div>
      </div>
      {exerciseData.map((exercise) => (
        <div className='exerciseWrapper'>
          <div className='exerciseText'>
            <h2 className='exerciseTitle'>{exercise.title}</h2>
            <small className='exercisemuscleGroup'>
              {exercise.muscleGroup}
            </small>
            <small className='exerciseDifficulty'>{exercise.difficulty}</small>
          </div>
          <img
            className='exerciseImage'
            src={exercise.image}
            alt={exercise.imageAlt}
          />
          <p className='exerciseDescription'>{exercise.description}</p>
        </div>
      ))}
      ;
    </div>
  );
};

export default Exercise;
