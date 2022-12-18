import { Footer } from "../footer/Footer";
import { Carousel } from "./Carousel";
import { Recomendations } from "./Recomendations";

export const BodyContainer = () => {
  return (
    <>
      <main className="main">
        <Carousel />
      </main>
      <Recomendations />
      <Footer />
    </>
  );
};
