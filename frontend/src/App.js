import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './features/pages/Login'
import Register from './features/pages/Register'
import Dashboard from './features/pages/Dashboard'
import Header from './components/header'


function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>    
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
