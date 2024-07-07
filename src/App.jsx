// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import WhyF4U from './pages/WhyF4U';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

import {Route,BrowserRouter,Routes} from "react-router-dom"


function App() {


  return(
  <>
   <div className="App">
      <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route index element={<Home/>} path='/'/>
        <Route  element={<WhyF4U/>} path='/why-f4u'/>
        <Route  element={<ContactUs/>} path='/contact-us'/>
        <Route  element={<Services/>} path='/services'/>
      </Routes>
      </BrowserRouter>
    </div>
  </>
  )

}




export default App; 

