
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Body/Body';
import About from './Components/About/About';


function App() {
  return (
    <div>
    {/* <Header name="Text convertor"
           button="Light mode"/>
    <Body/>
    <Footer/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home name="Text convertor"
           button="Light mode"/>}/>
      <Route path='/about'element={<About/>}/>
    </Routes>
    </BrowserRouter>
    



      
    
    </div>
  );
}

export default App;
