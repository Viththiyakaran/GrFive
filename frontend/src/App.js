import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from'./components/landing_page/navbar';
import Company from './components/landing_page/support';
import Features from  './components/landing_page/features';
import Additional from  './components/landing_page/additional';
import Additional_2 from  './components/landing_page/additional_2';
import Choose from  './components/landing_page/choose';
import Pricing from  './components/landing_page/pricing';
import Testimonial from  './components/landing_page/testimonial';
import Faq from  './components/landing_page/faq';
import Download from  './components/landing_page/download';
import Footer from  './components/landing_page/footer';
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
