import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/Component/Home.jsx'
import TopPackage from './Component/TopPackage'
import ChooseToor from './Component/ChooseToor'
import HotDeals from './Component/HotDeals'
import SpecialOffers from './Component/SpecialOffers'
import Blog from './Component/Blog'
import Experiences from './Component/Experiences'
import Gallery from './Component/Gallery'
import Hero from './Component/Hero'
import Headers from './Component/Headers'
import Footer from './Component/Footer'

function App() {
  

  return (
    
    <BrowserRouter>
      <Headers/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/package" element={<TopPackage/>}/>
          <Route path="/holidays" element={<ChooseToor/>}/>
          <Route path="/hotel" element={<HotDeals/>}/>
          <Route path="/visa" element={<SpecialOffers/>}/>
          <Route path="/services" element={<Blog/>}/>
          <Route path="/sports" element={<Experiences/>}/>
          <Route path="/child" element={<Gallery/>}/>
          <Route path="/groceries" element={<Hero/>}/>
          <Route path="/health" element={<Home/>}/>

        </Routes>
        <Footer/>
    </BrowserRouter> 
    
  )
}

export default App
