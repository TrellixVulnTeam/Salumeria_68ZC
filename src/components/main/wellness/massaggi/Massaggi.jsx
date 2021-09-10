import './massaggi.css';
import massaggiData from './massaggiData';

const Massaggi = () => {
  return (
    <div className='Massaggi'>
      <div className='selectmassaggi'>
        <label className='massaggiLabel' for='fasciaMuscolare'>
          FASCIA MUSCOLARE
        </label>
        <select name='massaggiSelectFascia' className='massaggiSelectFascia'>
          <option value='tutti'>tutti</option>
          <option value='petto'>petto</option>
          <option value='spalle'>spalle</option>
          <option value='tricipidi'>tricipidi</option>
          <option value='bicipidi'>bicipidi</option>
          <option value='dorso'>dorso</option>
          <option value='gambe'>gambe</option>
        </select>
        <label className='massaggiLabel' for='livello'>
          TIPO DI MASSAGGIO
        </label>
        <select name='massaggiSelectLevel' className='massaggiSelectLevel'>
          <option value='tutti'>tutti</option>
          <option value='petto'>petto</option>
          <option value='spalle'>spalle</option>
          <option value='tricipidi'>tricipidi</option>
          <option value='bicipidi'>bicipidi</option>
          <option value='dorso'>dorso</option>
          <option value='gambe'>gambe</option>
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
      {massaggiData.map((massaggi) => (
        <div className='massaggiWrapper'>
          <div className='massaggiText'>
            <h2 className='massaggiTitle'>{massaggi.title}</h2>
            <small className='massaggimuscleGroup'>
              {massaggi.muscleGroup}
            </small>
            <small className='massaggiDifficulty'>{massaggi.difficulty}</small>
          </div>
          <img
            className='massaggiImage'
            src={massaggi.image}
            alt={massaggi.imageAlt}
          />
          <p className='massaggiDescription'>{massaggi.description}</p>
        </div>
      ))}
      ;
    </div>
  );
};

export default Massaggi;
