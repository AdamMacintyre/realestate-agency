import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { Home, Listings, Buyers, Sellers, AboutUs, Communities, Contact, SiteMap, Property1, Property2, 
  RanchoSantaFe, DelMar, CardiffSea, CarmelValley, Encinitas, LaJolla, PointLoma, SolanaBeach, Carlsbad, 
  Property3, Property4, Property5, Property6, Property7, Property8, Property9, Property10, Property11, 
  YourAdv, Property0 } 
  from './helpers/importerPage'
  
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
       <Router>
         <Navbar />
         <Routes>
           <Route exact path='/' element={<Home />} />
           <Route exact path='/listings' element={<Listings />} />

           <Route exact path='/buyers' element={<Buyers />} />
           <Route exact path='/buyeradvantage' element={<YourAdv />} />


           <Route exact path='/sellers' element={<Sellers />} />


           <Route exact path='/communities' element={<Communities />} />
           <Route exact path='/aboutus' element={<AboutUs />} />
           <Route exact path='/contact' element={<Contact />} />

           <Route exact path='/sitemap' element={<SiteMap />} />


           <Route exact path='/ranchosantafe' element={<RanchoSantaFe />} />
           <Route exact path='/delmar' element={<DelMar />} />
           <Route exact path='/cardiffsea' element={<CardiffSea />} />
           <Route exact path='/carlsbad' element={<Carlsbad />} />
           <Route exact path='/carmelvalley' element={<CarmelValley />} />
           <Route exact path='/encinitas' element={<Encinitas />} />
           <Route exact path='/lajolla' element={<LaJolla />} />
           <Route exact path='/pointloma' element={<PointLoma />} />
           <Route exact path='/solanabeach' element={<SolanaBeach />} />





           <Route exact path='/property0' element={<Property0 />} />
           <Route exact path='/property1' element={<Property1 />} />
           <Route exact path='/property2' element={<Property2 />} />
           <Route exact path='/property3' element={<Property3 />} />
           <Route exact path='/property4' element={<Property4 />} />
           <Route exact path='/property5' element={<Property5 />} />
           <Route exact path='/property6' element={<Property6 />} />
           <Route exact path='/property7' element={<Property7 />} />
           <Route exact path='/property8' element={<Property8 />} />
           <Route exact path='/property9' element={<Property9 />} />
           <Route exact path='/property10' element={<Property10 />} />
           <Route exact path='/property11' element={<Property11 />} />



         </Routes>
         <Footer />
        </Router>
    </div>
  );
}

export default App;
