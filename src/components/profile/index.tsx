function ProfileComponent() {
  return (
    <div className="e-profile-wrap e-profile-cloth">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="e-profile-inner">
              <div className="e-profile-img">
                <div className="e-userpro-img">
                  <img src="assets/images/user_profile.jpg" alt="image" />
                  <input type="file" id="user_profile" />
                  <label>
                    <span>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        viewBox="0 0 485.219 485.22"
                        // style={{enableBackground:"new 0 0 485.219 485.22"}}
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            fill="#ffffff"
                            d="M467.476,146.438l-21.445,21.455L317.35,39.23l21.445-21.457c23.689-23.692,62.104-23.692,85.795,0l42.886,42.897
                                          C491.133,84.349,491.133,122.748,467.476,146.438z M167.233,403.748c-5.922,5.922-5.922,15.513,0,21.436
                                          c5.925,5.955,15.521,5.955,21.443,0L424.59,189.335l-21.469-21.457L167.233,403.748z M60,296.54c-5.925,5.927-5.925,15.514,0,21.44
                                          c5.922,5.923,15.518,5.923,21.443,0L317.35,82.113L295.914,60.67L60,296.54z M338.767,103.54L102.881,339.421
                                          c-11.845,11.822-11.815,31.041,0,42.886c11.85,11.846,31.038,11.901,42.914-0.032l235.886-235.837L338.767,103.54z
                                              M145.734,446.572c-7.253-7.262-10.749-16.465-12.05-25.948c-3.083,0.476-6.188,0.919-9.36,0.919
                                          c-16.202,0-31.419-6.333-42.881-17.795c-11.462-11.491-17.77-26.687-17.77-42.887c0-2.954,0.443-5.833,0.859-8.703
                                          c-9.803-1.335-18.864-5.629-25.972-12.737c-0.682-0.677-0.917-1.596-1.538-2.338L0,485.216l147.748-36.986
                                          C147.097,447.637,146.36,447.193,145.734,446.572z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <div className="e-profile-box">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="e-form-field mb-26">
                      <label>نام کوچک </label>
                      <input
                        className="e-field-inner require"
                        type="text"
                        placeholder="جعفر"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="e-form-field mb-26">
                      <label>نام خانوادگی </label>
                      <input
                        className="e-field-inner require"
                        type="text"
                        placeholder="عباسی"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="e-form-field mb-26">
                      <label>ایمیل </label>
                      <input
                        className="e-field-inner require"
                        type="email"
                        placeholder="John@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="e-form-field mb-26">
                      <label>شماره تلفن</label>
                      <input
                        className="e-field-inner require"
                        type="text"
                        placeholder="+(98) 9902799593"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="e-form-field mb-26">
                      <label>آدرس</label>
                      <textarea
                        className="e-field-inner require"
                        placeholder="jabasi26@gmail.com"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="">
                      <button type="button" className="e-btn">
                        ذخیره
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
