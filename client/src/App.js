
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Logi from './components/Logi';
import Profil from './components/Profil';
import Register from './components/Register';
import { userCurrent } from './JS/userSlice/userSlice';
import PrivateRoute from './Routes/PrivateRouter';
import PrivateRouter from './Routes/PrivateRouter';



function App() {
  const isAuth=localStorage.getItem("token");
  const dispatch = useDispatch()
useEffect(() => {
  
    dispatch(userCurrent());
  
}, )
  return (
    <div className="App">
      <div className='header'>
        <h1>App</h1>
      </div>



  <Routes>
        <Route exact path="/register" element={ <Register/> } />
        <Route path="/logi" element={ <Logi/> } />
        <Route element={ <PrivateRoute/> }>
        <Route path="/Profil" element={<Profil/> } />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
