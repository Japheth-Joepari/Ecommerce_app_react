import { NavBarContainer } from "../components/navbar/NavBarContainer";
import { Container } from "../components/container/Container";
import { MobileMenu } from "../components/navbar/MobileMenu";
import { BodyContainer } from "../components/bodysection/BodyContainer";

export const HomePage = () => {
  return (
    <>
      <div className="page-wrapper">
        <NavBarContainer />
      </div>

      <div className="mobile-menu-container mobile-menu-light">
        <MobileMenu />
      </div>

      <div>
        <BodyContainer />
      </div>
    </>
  );
};
