// import { Navbar } from 'react-bootstrap';
import './App.css';
import NavBar from './components/Navbar/index'
import MainFeed from './components/Feed/index'
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <NavBar />
      <div>
        <MainFeed></MainFeed>
      </div>
    </div>
  );
}

export default App;
