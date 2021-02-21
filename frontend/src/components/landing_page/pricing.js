import React from 'react';

function Pricing()
{
    return(
        <section className="py-8" id="pricing">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xxl-5 text-center mb-3">
              <h6 className="fw-bold fs-4 display-3 lh-sm mb-3">Get awesome features, without extra charges</h6>
              <p className="mb-4">The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
            </div>
          </div>
          <div className="row flex-center">
            <div className="col-12 mb-3">
            </div>
            <div className="col-lg-4">
              <div className="card shadow-lg mb-4 border-0">
                <div className="card-header border-bottom-0 pt-7 pb-5">
                  <div className="d-flex justify-content-center">
                    <h1 className="fw-bold">$0</h1><span className="d-flex align-items-center">/month</span>
                  </div>
                  <h5 className="fw-bold text-center">Business ClassName</h5><span className="text-700 text-center d-block">For small teams or office</span>
                </div>
                <div className="card-body mx-auto">
                  <ul className="list-unstyled mb-4">
                    <li className="text-700 py-2 text-secondary">Darg &amp; Drop Builder</li>
                    <li className="text-700 py-2 text-secondary">1,000's of Templates</li>
                    <li className="text-700 py-2 text-secondary">Blog Support Tools</li>
                    <li className="text-700 py-2 text-secondary">eCommerce Store </li>
                  </ul><a className="btn btn-lg btn-primary rounded-pill mb-3" href="#">Start free trial</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card shadow-lg mb-4">
                <div className="card-header border-bottom-0 pt-7 pb-5">
                  <div className="d-flex justify-content-center">
                    <h1 className="fw-bold">$99</h1><span className="d-flex align-items-center">/month</span>
                  </div>
                  <h5 className="fw-bold text-center">Pro Master</h5><span className="text-700 text-center d-block">For small teams or office</span>
                </div>
                <div className="card-body mx-auto">
                  <ul className="list-unstyled mb-4">
                    <li className="text-700 py-2 text-secondary">Darg &amp; Drop Builder</li>
                    <li className="text-700 py-2 text-secondary">1,000's of Templates</li>
                    <li className="text-700 py-2 text-secondary">Blog Support Tools</li>
                    <li className="text-700 py-2 text-secondary">eCommerce Store </li>
                  </ul>
                  <div className="d-flex flex-column"> <a className="btn btn-lg btn-primary rounded-pill mb-3" href="#">Start free trial</a><a href="#">Or Start 14 days trail</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Pricing;