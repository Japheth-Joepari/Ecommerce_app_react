export const CategorySideBar = () => {
  return (
    <>
      <div className="side-menu animate-dropdown outer-bottom-xs">
        <div className="head">
          <i className="icon fa fa-align-justify fa-fw" /> Categories
        </div>
        <nav className="yamm megamenu-horizontal">
          <ul className="nav">
            <li className="dropdown menu-item">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-shopping-bag" aria-hidden="true" />
                Clothing
              </a>
            </li>
            {/* /.menu-item */}
            <li className="dropdown menu-item">
              {" "}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-laptop" aria-hidden="true" />
                Electronics
              </a>
            </li>
            {/* /.menu-item */}
            <li className="dropdown menu-item">
              {" "}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-paw" aria-hidden="true" />
                Shoes
              </a>
            </li>
            {/* /.menu-item */}
            <li className="dropdown menu-item">
              {" "}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-clock-o" />
                Watches
              </a>
            </li>
            {/* /.menu-item */}
            <li className="dropdown menu-item">
              {" "}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-diamond" />
                Jewellery
              </a>
            </li>
            {/* /.menu-item */}
            <li className="dropdown menu-item">
              {" "}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-heartbeat" />
                Health and Beauty
              </a>
            </li>
            <li className="dropdown menu-item">
              {" "}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-paper-plane" />
                Kids and Babies
              </a>
            </li>
            <li className="dropdown menu-item">
              {" "}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-futbol-o" />
                Sports
              </a>
            </li>
            <li className="dropdown menu-item">
              {" "}
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon fa fa-envira" />
                Home and Garden
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
