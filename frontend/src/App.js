import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from'./components/navbar';
import Company from './components/support';
import Features from  './components/features';
import Additional from  './components/additional';
function App() {
  return (
   <div> 
     <Navbar/>
     <Company/>
     <Features/>
     <Additional/>
   </div>
  );
}

export default App;
