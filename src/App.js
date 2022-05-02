
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from '../../u5s4/src/components/Home';
import { Login } from '../../u5s4/src/components/Login';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
