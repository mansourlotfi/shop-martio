import Dialog from "@mui/material/Dialog";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export default function Login({ open, handleClose }: IProps) {
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xs">
      <div className="modal-body">
        <div className="modal-inner">
          <div className="row">
            <div className="col-md-12">
              <div className="modal-inner-box">
                <div className="autho-model-header text-center">
                  <a href="javascript:void(0);">
                    <img
                      src="assets/images/index1/big_logo.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                  <p className="autho-model-sttl">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است.
                  </p>
                  <h2 className="autho-model-ttl">ورود </h2>
                </div>

                <div className="autho-model-filed">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="e-form-field mb-20">
                          <label>ایمیل </label>
                          <input className="e-field-inner" type="email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="e-form-field mb-20">
                          <label>رمز عبور </label>
                          <input className="e-field-inner" type="Password" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="e-form-field mb-20">
                          <ul className="e-rememberforgot-list">
                            <li>
                              <div className="e-checkbox-wrap">
                                <input
                                  className="e-checkbox-input"
                                  type="checkbox"
                                  id="remember_me"
                                />
                                <label className="e-checkbox">
                                  مرا به خاطر بسپار
                                </label>
                              </div>
                            </li>
                            <li>
                              <a
                                href="forgot_password.html"
                                className="e-comn-link"
                              >
                                فراموشی رمز عبور؟
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="">
                          <a href="index.html" className="e-btn">
                            ورود
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="autho-close"
          onClick={handleClose}
          style={{ cursor: "pointer" }}
        >
          &times;
        </button>
      </div>
    </Dialog>
  );
}
