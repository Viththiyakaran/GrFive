import React from 'react';

function Faq()
{
    return(
        <section className="py-8" id="faq">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center mb-3">
              <h6 className="fw-bold fs-4 display-3 lh-sm mb-3">Frequently asked questions</h6>
              <p className="mb-5">The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
            </div>
          </div>
          <div className="row flex-center">
            <div className="col-lg-9">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1"><span className="mb-0 fw-bold text-start fs-1 text-1000">How to contact with riders emergency?</span></button>
                  </h2>
                  <div className="accordion-collapse collapse show" id="collapse1" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-100">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2"><span className="mb-0 fw-bold text-start fs-1 text-1000">App installation failed, how to update system information?</span></button>
                  </h2>
                  <div className="accordion-collapse collapse" id="collapse2" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-100">You can issue either partial or full refunds. There are no fees to refund a charge, but the fees from the original charge are not returned.</div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3"><span className="mb-0 fw-bold text-start fs-1 text-1000">Website reponse taking time, how to improve?</span></button>
                  </h2>
                  <div className="accordion-collapse collapse" id="collapse3" aria-labelledby="heading3" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-100">Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.</div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4"><span className="mb-0 fw-bold text-start fs-1 text-1000">New update fixed all bug and issues</span></button>
                  </h2>
                  <div className="accordion-collapse collapse" id="collapse4" aria-labelledby="heading4" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-100">There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.</div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="heading5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5"><span className="mb-0 fw-bold text-start fs-1 text-1000">How to contact with riders emergency?</span></button>
                  </h2>
                  <div className="accordion-collapse collapse" id="collapse5" aria-labelledby="heading5" data-bs-parent="#accordionExample">
                    <div className="accordion-body bg-100">There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       

      </section>
    )
}

export default Faq;