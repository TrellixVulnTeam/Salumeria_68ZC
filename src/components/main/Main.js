import './main.scss';
import { Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../App';
import Salumi from './salumi/Salumi';
import Stabilimento from './stabilimento/Stabilimento';
import Contact from './contact/Contact';
import About from './about/About';
import Home from './home/Home';

const Main = () => {
  const { menuToogle } = useContext(Context);

  return (
    <div className={`${menuToogle ? 'MainOff' : 'Main'}`}>
      <Switch>
        <Route path='/stabilimento'>
          <Stabilimento />
        </Route>
        <Route path='/salumi'>
          <Salumi />
        </Route>
        <Route path='/chisiamo'>
          <About />
        </Route>
        <Route path='/contatti'>
          <Contact />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
