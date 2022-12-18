import { Categories } from "./Categories";

export const NavBarCategory = () => {
  return (
    <>
      <div className="header-bottom sticky-header">
        <div className="container">
          <Categories />
          {/* End .header-left */}
          <div className="header-center">
            <nav className="main-nav">
              <ul className="menu">
                <li className="megamenu-container active">
                  <a href="index.html" className="">
                    Explore
                  </a>
                  {/* End .megamenu */}
                </li>

                <li>
                  <a href="category.html" className=" ">
                    50% Off Items
                  </a>
                  {/* End .megamenu megamenu-md */}
                </li>

                <li>
                  <a href="product.html" className=" ">
                    Products
                  </a>
                  {/* End .megamenu megamenu-sm */}
                </li>
              </ul>
              {/* End .menu */}
            </nav>
            {/* End .main-nav */}
          </div>
          {/* End .header-center */}
          <div className="header-right">
            <i className="la la-lightbulb-o" />
            <p>
              Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
            </p>
          </div>
        </div>
        {/* End .container */}
      </div>
    </>
  );
};
