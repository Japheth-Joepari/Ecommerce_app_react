export const TagSideBar = () => {
  return (
    <>
      <div className="sidebar-widget product-tag">
        <h3 className="section-title">Product tags</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <div className="tag-list">
            {" "}
            <a className="item" title="Phone" href="category.html">
              Phone
            </a>{" "}
            <a className="item active" title="Vest" href="category.html">
              Vest
            </a>{" "}
            <a className="item" title="Smartphone" href="category.html">
              Smartphone
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
