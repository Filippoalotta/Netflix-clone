import { Routes, Route, useNavigate } from 'react-router-dom';
import './assets/css/App.scss';
import Home from './assets/pages/Home';
import LogIn from './assets/pages/LogIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './assets/firebase/firebase';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        console.log('Logged In');
        navigate('/');
      } else {
        console.log('Logged Out');
        navigate('/login');
      }
    });
  },[]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
      </Routes>
    </>
  )
}

export default App
