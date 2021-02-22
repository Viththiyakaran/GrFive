import React, { Component } from 'react';

class Additional extends Component{
  render(){
    return(
      <section className="py-5">

      <div className="container">
        <div className="row align-items-center mb-6">
          <div className="col-md-5 col-lg-4 offset-lg-1">
            <h1 className="fw-bold lh-base">Smart jackpots that you may love this anytime &amp; anywhere</h1>
          </div>
          <div className="col-md-6 col-lg-5 offset-lg-1 border-start py-5 ps-5">
            <p className="mb-0">The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
            <div className="py-4"><img className="img-fluid" src="/assets/img/illustrations/automatic.png" width="90" alt="" /></div>
            <h5 className="fw-bold text-danger">Fast performance</h5>
            <p className="mt-2 mb-0">Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
          </div>
          <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
            <div className="py-4"><img className="img-fluid" src="/assets/img/illustrations/network.png" width="90" alt="" /></div>
            <h5 className="fw-bold text-primary">Prototyping</h5>
            <p className="mt-2 mb-0">Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
          </div>
          <div className="col-md-4 col-lg-3 offset-lg-1 mb-4">
            <div className="py-4"><img className="img-fluid" src="/assets/img/illustrations/rewards.png" width="90" alt="" /></div>
            <h5 className="fw-bold text-success">Vector Editing</h5>
            <p className="mt-2 mb-0">Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
          </div>
        </div>
      </div>
    </section>
  )
  }
}

export default Additional;