export const SignIn = () => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="signin"
        role="tabpanel"
        aria-labelledby="signin-tab"
      >
        <form action="#">
          <div className="form-group">
            <label htmlFor="singin-email">Username or email address *</label>
            <input
              type="text"
              className="form-control"
              id="singin-email"
              name="singin-email"
              required
            />
          </div>
          {/* End .form-group */}
          <div className="form-group">
            <label htmlFor="singin-password">Password *</label>
            <input
              type="password"
              className="form-control"
              id="singin-password"
              name="singin-password"
              required
            />
          </div>
          {/* End .form-group */}
          <div className="form-footer">
            <button type="submit" className="btn btn-outline-primary-2">
              <span>LOG IN</span>
              <i className="icon-long-arrow-right" />
            </button>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="signin-remember"
              />
              <label className="custom-control-label" htmlFor="signin-remember">
                Remember Me
              </label>
            </div>
            {/* End .custom-checkbox */}
            <a href="#" className="forgot-link">
              Forgot Your Password?
            </a>
          </div>
          {/* End .form-footer */}
        </form>
        <div className="form-choice">
          <p className="text-center">or sign in with</p>
          <div className="row">
            <div className="col-sm-6">
              <a href="#" className="btn btn-login btn-g">
                <i className="icon-google" />
                Login With Google
              </a>
            </div>
            {/* End .col-6 */}
            <div className="col-sm-6">
              <a href="#" className="btn btn-login btn-f">
                <i className="icon-facebook-f" />
                Login With Facebook
              </a>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .form-choice */}
      </div>
    </>
  );
};
