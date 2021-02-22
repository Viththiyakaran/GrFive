import React, { Component } from 'react';

import Navbar from'./navbar';
import Company from './support';
import Features from  './features';
import Additional from  './additional';
import Additional_2 from  './additional_2';
import Choose from  './choose';
import Pricing from  './pricing';
import Testimonial from  './testimonial';
import Faq from  './faq';
import Download from  './download';
import Footer from  './footer';

class LandingPage extends Component{
    render(){
        return(
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
        )
    }
}
export default LandingPage;