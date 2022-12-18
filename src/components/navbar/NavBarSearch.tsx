import logo from "../../assets/ecom.png";
import { WishList } from "./WishList";
import { Cart } from "./Cart";

export const NavBarSearch = () => {
  return (
    <>
      <div className="header-middle ">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars" />
            </button>
            <a href="index.html" className="logo">
              <img src={logo} alt="OnTopic" width={140} height={25} />
            </a>
          </div>
          {/* End .header-left */}
          <div className="header-center">
            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
              <a href="#" className="search-toggle" role="button">
                <i className="icon-search" />
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper search-wrapper-wide">
                  <label htmlFor="q" className="sr-only">
                    Search
                  </label>
                  <button className="btn btn-primary" type="submit">
                    <i className="icon-search" />
                  </button>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search product ..."
                    required
                  />
                </div>
                {/* End .header-search-wrapper */}
              </form>
            </div>
            {/* End .header-search */}
          </div>
          <div className="header-right">
            {/* End .compare-dropdown */}
            <WishList />
            {/* End .compare-dropdown */}
            <Cart />
            {/* End .cart-dropdown */}
          </div>
          {/* End .header-right */}
        </div>
        {/* End .container */}
      </div>
    </>
  );
};
