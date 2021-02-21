import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from'./components/navbar';
import Company from './components/support';
import Features from  './components/features';
import Additional from  './components/additional';
import Additional_2 from  './components/additional_2';
import Choose from  './components/choose';
import Pricing from  './components/pricing';
import Testimonial from  './components/testimonial';
import Faq from  './components/faq';
import Download from  './components/download';
import Footer from  './components/footer';
function App() {
  return (
   <div> 
     <Navbar/>
     <Company/>
     <Features/>
     <Additional/>
     <Additional_2/>
     <Choose/>
     < Pricing/>
     <Testimonial/>
     <Faq/>
     <Download/>
     <Footer/>
   </div>
  );
}

export default App;
