import React from 'react';

import Navbar from'./landing_page/navbar';
import Company from './landing_page/support';
import Features from  './landing_page/features';
import Additional from  './landing_page/additional';
import Additional_2 from  './landing_page/additional_2';
import Choose from  './landing_page/choose';
import Pricing from  './landing_page/pricing';
import Testimonial from  './landing_page/testimonial';
import Faq from  './landing_page/faq';
import Download from  './landing_page/download';
import Footer from  './landing_page/footer';
function LandingPage()
{
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

export default LandingPage;