
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from '../src/components/Home';
import { Login } from '../src/components/Login';
import {Link} from 'react-router-dom';
import { Logout } from "../src/components/Logout";
import { NewOrder } from "../src/components/NewOrder";
import { Orders } from "../src/components/Order";
import { ProtectedRoute } from "../src/components/ProtectedRoute";
import { useSelector } from 'react-redux';

function App() {
  const status = useSelector(store=>store.isLoggedIn)
  return (
    <div className="App">
      <div>
        <Link className="nhome" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        {status? 
        <Link className="nlogout" to = "/logout">Logout</Link>:
        <Link className="nlogin" to = "/login">Login</Link>
        }
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/logout" element = {<Logout/>}></Route>
        <Route path = "/orders" element = {<ProtectedRoute><Orders/></ProtectedRoute>}/>
        <Route path = "/neworder" element = {<ProtectedRoute><NewOrder/></ProtectedRoute>}/>

      </Routes>
    </div>
    </div>
  );
}

export default App;
