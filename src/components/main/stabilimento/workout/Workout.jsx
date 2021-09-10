import './workout.css';
import workoutData from './workoutData';

const Workout = () => {
  return (
    <div className='Workout'>
      <div className='selectworkout'>
        <label className='workoutLabel' for='tipoWorkout'>
          TIPO DI ALLENAMENTO
        </label>
        <select name='workoutSelectFascia' className='workoutSelectFascia'>
          <option value='tutti'>tutti</option>
          <option value='forza'>forza</option>
          <option value='tecnica'>tecnica</option>
          <option value='riscaldamento'>riscaldamento</option>
          <option value='allungamento'>allungamento</option>
          <option value='fool body'>fool body</option>
          <option value='burn'>burn</option>
        </select>
        <label className='workoutLabel' for='livello'>
          LIVELLO
        </label>
        <select name='workoutSelectLevel' className='workoutSelectLevel'>
          <option value='tutti'>tutti</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <div className='trainingSearch'>
          <input
            type='search'
            name='q'
            aria-label='Search through site content'
          />
          <button className='search'>Cerca</button>
        </div>
      </div>
      {workoutData.map((workout) => (
        <div className='workoutWrapper'>
          <div className='workoutText'>
            <h2 className='workoutTitle'>{workout.title}</h2>
            <small className='workoutmuscleGroup'>{workout.muscleGroup}</small>
            <small className='workoutDifficulty'>{workout.difficulty}</small>
          </div>
          <img
            className='workoutImage'
            src={workout.image}
            alt={workout.imageAlt}
          />
          <p className='workoutDescription'>{workout.description}</p>
        </div>
      ))}
      ;
    </div>
  );
};

export default Workout;
