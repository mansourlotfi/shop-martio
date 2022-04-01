import React from "react";

function ContactBox() {
  return (
    <section className="e-contact-wrap mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="e-contact-info">
              <div className="lbel-wrap">
                <h2 className="e-contact-lbel">دفاتر ما در واقع شده اند</h2>
              </div>
              <ul className="cntc-infobox-list">
                <li>
                  <div className="contact-infobox">
                    <h4 className="cmn-brdr-ttle">ایران</h4>
                    <p className="cntc-infobox-des">
                      خ دانش، ک شهید عباسی / منطقه شهرک,
                      <br />
                      شهر شاهین دژ
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 align-self-center">
            <div className="e-contact-box">
              <h4 className="cmn-brdr-ttle">
                برای تماس با ما احساس رایگان کنید
              </h4>
              <p className="contact-box-des">
                رعایت نکات برجسته چربی ، خستگی ناپذیر و سرزندگی ، به طوری که
                زحمت و غم و اندوه ، برخی از کارهای مهم برای انجام ایسود. چه کسی
                آن بسکتبال باردار را توصیه کرده است.
              </p>
              <form>
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="e-form-field mb-26">
                      <label>نام کوچک </label>
                      <input
                        className="e-field-inner require"
                        type="text"
                        name="first_name"
                        id="first_name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="e-form-field mb-26">
                      <label>نام خانوادگی </label>
                      <input
                        className="e-field-inner require"
                        type="text"
                        name="last_name"
                        id="last_name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="e-form-field mb-26">
                      <label>ایمیل </label>
                      <input
                        className="e-field-inner require"
                        type="email"
                        name="email"
                        id="email"
                        data-valid="email"
                        data-error="ایمیل باید معتبر باشد."
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="e-form-field mb-26">
                      <label>وب سایت</label>
                      <input
                        className="e-field-inner require"
                        type="text"
                        name="website"
                        id="website"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="e-form-field mb-26">
                      <label>پیام </label>
                      <textarea
                        className="e-field-inner require"
                        name="message"
                        id="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="">
                      <button type="button" className="e-btn submitForm">
                        در تماس باشید
                      </button>
                      <div className="response"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBox;
