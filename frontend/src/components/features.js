import React from 'react';
function  Features(){
    return(
        <section className="py-5" id="features">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-6 order-md-0 text-center text-md-start"><img className="img-fluid" src="/assets/img/illustrations/feature-bg.png" width="550" alt="" /></div>
            <div className="col-md-7 col-lg-6 px-sm-5 px-md-0">
              <h6 className="fw-bold fs-4 display-3 lh-sm">Awesome apps <br />features</h6>
              <p className="my-4">Increase productivity with a simple to-do app. app for <br className="d-none d-xl-block" />managing your personal budgets.</p>
              <div className="d-flex align-items-center mb-5">
                <div><img className="img-fluid" src="/assets/img/illustrations/fast-performance.png" width="90" alt="" /></div>
                <div className="px-4">
                  <h5 className="fw-bold text-danger">Fast performance</h5>
                  <p>Get your blood tests delivered at <br className="d-none d-xl-block"/> home collect a sample from the <br className="d-none d-xl-block"/> news your blood tests</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div><img className="img-fluid" src="/assets/img/illustrations/prototype.png" width="90" alt="" /></div>
                <div className="px-4">
                  <h5 className="fw-bold text-primary">Prototyping</h5>
                  <p>Get your blood tests delivered at <br className="d-none d-xl-block"/> home collect a sample from the <br className="d-none d-xl-block"/> news your blood tests</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div><img className="img-fluid" src="/assets/img/illustrations/vector.png" width="90" alt="" /></div>
                <div className="px-4">
                  <h5 className="fw-bold text-success">Vector Editing</h5>
                  <p>Get your blood tests delivered at <br className="d-none d-xl-block"/> home collect a sample from the <br className="d-none d-xl-block"/> news your blood tests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Features;

