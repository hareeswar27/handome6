import  React  from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Students from './Pages/Students';
import ContactUs from './Pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import FillExample from './Components/Navbar';




function App() {
  return (
   <div className='container'>
 <BrowserRouter>
<FillExample/>
 
 <Routes>


 <Route path='/Home' element={<Home/>}/>
 <Route path='/Students' element={<Students/>}/>
 <Route path='/ContactUs' element={<ContactUs/>}></Route>




 </Routes>
 
 </BrowserRouter>
    
 </div>
  );
}

export default App;