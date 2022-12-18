import { NavBarCategory } from "./NavBarCategory";
import { NavBarSearch } from "./NavBarSearch";
import { TopNav } from "./TopNav";

export const NavBarContainer = () => {
  return (
    <>
      <header className="header header-intro-clearance header-4">
        {/* End .header-top */}
        <TopNav />
        {/* End .header-middle */}
        <NavBarSearch />
        {/* End .header-bottom */}
        <NavBarCategory />
      </header>
      {/* End .header */}
    </>
  );
};
