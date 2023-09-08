// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes ,Route } from "react-router-dom";

import Dashboard from './Pages/Dashboard';

import SignUp from './SignUp';
import Detail from './Pages/DetailPage';
import DisApproved from './Pages/DisApproved';
import ApprovedDoctor from './Pages/Doctor';
import Pharmacy from './Pages/Pharmacy';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login/>} />
      <Route path='/SignUp' element={ <SignUp/>} />
      <Route path='/Detail' element={ <Detail/>} />
      <Route path='/Dotor' element={ <ApprovedDoctor/>} />
      <Route path='/Pharmacy' element={ <Pharmacy/>} />
      <Route path='/Dashbord' element={ <Dashboard/>} />
     <Route path='/DisApproved' element={ <DisApproved/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
