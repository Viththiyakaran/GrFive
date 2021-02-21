import React from 'react';
var bg = {
    backgroundImage: 'url(/assets/img/illustrations/hero-bg.png)',
    backgroundPosition:'Bottom',
    backgroundSize:'Cover'
};

function Navbar()
{
    return(
        <main className="main" id="top">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 backdrop" data-navbar-on-scroll="data-navbar-on-scroll">
          <div className="container"><a className="navbar-brand d-flex align-items-center fw-bold fs-2" href="#">
              <div className="text-warning">App</div>
              <div className="text-1000">Lab</div>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse  mt-4 mt-lg-0" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                <li className="nav-item"><a className="nav-link fw-medium active" aria-current="page" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link fw-medium" href="#features">Key Features</a></li>
                <li className="nav-item"><a className="nav-link fw-medium" href="#pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link fw-medium" href="#testimonial">Testimonial</a></li>
                <li className="nav-item"><a className="nav-link fw-medium" href="#faq">FAQ</a></li>
              </ul>
              <form className="ps-lg-5">
                <button className="btn btn-lg btn-primary rounded-pill order-0" type="submit">Try for free</button>
              </form>
            </div>
          </div>
        </nav>
        <section className="py-0">
          <div className="bg-holder" style={bg}>
          </div>
        
  
          <div className="container position-relative">
            <div className="row align-items-center py-8">
              <div className="col-md-5 col-lg-6 order-md-1 text-center text-md-end"><img className="img-fluid" src="/assets/img/illustrations/mobile.png" width="350" alt="" /></div>
              <div className="col-md-7 col-lg-6 text-center text-md-start"><span className="badge bg-light rounded-pill text-dark align-items-center d-flex flex-row-reverse justify-content-end mx-auto mx-md-0 ps-0 w-75 w-sm-50 w-md-75 w-xl-50 mb-3">#1 Editiors Choice App of 2020<img className="img-fluid float-start me-3" src="/assets/img/illustrations/arrow-right.png" alt=""/></span>
                <h1 className="mb-4 display-3 fw-bold lh-sm">Best app for your <br className="d-block d-lg-none d-xl-block" />modern lifestyle</h1>
                <p className="mt-3 mb-4 fs-1">Increase productivity with a simple to-do app. app for <br className="d-none d-lg-block" />managing your personal budgets.</p><a className="btn btn-lg btn-primary rounded-pill hover-top" href="#" role="button">Try for free</a><a className="btn btn-link ps-md-4" href="#" role="button"> Watch demo video</a>
              </div>
            </div>
          </div>
        </section>
        </main>
        
    );
}

export default Navbar;