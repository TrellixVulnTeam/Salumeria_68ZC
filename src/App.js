import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';

function App() {
  return (
    <Router>        
    <div className="App">
      <Navbar />
      <Main />
      
    </div>
  </Router>
  );
}

export default App;
