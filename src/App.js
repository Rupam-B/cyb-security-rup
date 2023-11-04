
// import './App.css';
// import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import MainContent from './components/MainContent/MainContent';
import LowerNavbar from './components/Navbar/LowerNavbar';
import Navbar from './components/Navbar/Navbar';
import RightContent from './components/RightContent/RightContent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LowerNavbar/>
      <Home/>
      <MainContent/>
      <RightContent/>
      
    </div>
  );
}

export default App;
