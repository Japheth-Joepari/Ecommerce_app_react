export const Recomendations = () => {
  return (
    <div>
      <div className="container for-you">
        <div className="heading heading-flex mb-1">
          <div className="heading-left">
            <h2 className="title">On Sale Items</h2>
            {/* End .title */}
          </div>
          {/* End .heading-left */}
          <div className="heading-right">
            <a href="#" className="title-link">
              View All Recommendadion <i className="icon-long-arrow-right" />
            </a>
          </div>
          {/* End .heading-right */}
        </div>
        {/* End .heading */}
        <div className="products">
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-10.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Headphones</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Beats by Dr. Dre Wireless Headphones
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$279.99</span>
                    <span className="old-price">Was $349.99</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "40%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#666666" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#ff887f" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#6699cc" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#f3dbc1" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-11.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Cameras &amp; Camcorders</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$349.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-12.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-4/products/product-12-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Smartwatches</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Apple - Apple Watch Series 3 with White Sport Band
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$214.49</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "0%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 0 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#e2e2e2" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#f2bc9e" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-13.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Lenovo - 330-15IKBR 15.6"</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="out-price">$339.99</span>
                    <span className="out-text">Out Of Stock</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-14.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Digital Cameras</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Sony - Alpha a5100 Mirrorless Camera
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$499.99</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "50%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-15.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Laptops</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Home Mini - Smart Speaker with Google Assistant
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$49.00</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 24 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#ef837b" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#333333" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#e2e2e2" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-sale">
                    Sale
                  </span>
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-16.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Audio</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      WONDERBOOM Portable Bluetooth Speaker
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">$99.99</span>
                    <span className="old-price">Was $129.99</span>
                  </div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "40%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#666666" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#ff887f" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#6699cc" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#f3dbc1" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#eaeaec" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
            <div className="col-6 col-md-4 col-lg-3">
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-4/products/product-17.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    />
                  </div>
                  {/* End .product-action */}
                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Smart Home</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Google - Home Hub with Google Assistant
                    </a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$149.00</div>
                  {/* End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                      {/* End .ratings-val */}
                    </div>
                    {/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                  {/* End .rating-container */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .col-sm-6 col-md-4 col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .products */}
      </div>
      {/* End .container */}
    </div>
  );
};
