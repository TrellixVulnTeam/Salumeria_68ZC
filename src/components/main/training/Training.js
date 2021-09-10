import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './training.css';
import TrainingNav from './trainingNav/TrainingNav';
import Workout from './workout/Workout';
import Exercise from './exercise/Exercise';

const Training = () => {
  return (
    <Router>
      <div className='Training'>
        <TrainingNav />
        <section className='trainingBody'>
          <Switch>
            <Route path='/exercise'>
              <Exercise />
            </Route>
            <Route path='/'>
              <Workout />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
};

export default Training;
