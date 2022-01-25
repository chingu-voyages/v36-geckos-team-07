// import { Navbar } from 'react-bootstrap';
import './App.css';
import NavBar from './components/Navbar/index';
import About from './components/About/index';
import MainFeed from './components/Feed/index'
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <NavBar />
      
      <div>
        <About />
        <MainFeed></MainFeed>
      </div>
    </div>
  );
}

export default App;
