import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import Footer from './components/footer/Footer';
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
