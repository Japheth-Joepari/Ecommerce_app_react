import { FormContainerModal } from "./FormContainerModal";
import { SignInModal } from "./SignIn";

export const TopNav = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <a href="tel:#">
              <i className="icon-phone" />
              Call: +234 7041970128
            </a>
          </div>
          {/* End .header-left */}
          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="#">Links</a>
                <ul>
                  <li>
                    <div className="header-dropdown">
                      <a href="#">USD</a>
                      <div className="header-menu">
                        <ul>
                          <li>
                            <a href="#">Eur</a>
                          </li>
                          <li>
                            <a href="#">Usd</a>
                          </li>
                        </ul>
                      </div>
                      {/* End .header-menu */}
                    </div>
                  </li>
                  <li>
                    <div className="header-dropdown">
                      <a href="#">English</a>
                      <div className="header-menu">
                        <ul>
                          <li>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <a href="#">French</a>
                          </li>
                          <li>
                            <a href="#">Spanish</a>
                          </li>
                        </ul>
                      </div>
                      {/* End .header-menu */}
                    </div>
                  </li>
                  <li>
                    <a href="#signin-modal" data-toggle="modal">
                      Sign in / Sign up
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* End .top-menu */}
          </div>
          {/* End .header-right */}
        </div>
        {/* End .container */}
      </div>
      <FormContainerModal />
    </>
  );
};
