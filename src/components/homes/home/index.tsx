import CtaAreaHomeOne from "./CtaAreaHomeOne";
import TeamAreaHomeOne from "./TeamAreaHomeOne";
import FactAreaHomeOne from "./FactAreaHomeOne";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import ServicesAreaHome from "./ServicesAreaHome";
import HeroSliderHomeOne from "./HeroSliderHomeOne";
import PricingAreaHomeOne from "./PricingAreaHomeOne";
import LatestNewsAreaHomeOne from "./LatestNewsAreaHomeOne";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import GoogleReview from "../../reviews/GoogleReview";

const HomeOne = () => {
  // const placeId = 'ChIJmU9YgdXOj4ARK-lYOG6ZmZ0'; // Replace with your Google Place ID
  // const apiKey = 'AIzaSyClBuSWmag9j9xgyTHwy-5yLPs6Q6e7t4s'; // Replace with your Google API Key
  return (
    <>
      <HeaderOne />
      <main>
        <HeroSliderHomeOne />
        <AboutAreaHomeOne />
        <ServicesAreaHome />
        {/* <TeamAreaHomeOne /> */}
        {/* <FactAreaHomeOne /> */}
        {/* <PricingAreaHomeOne /> */}
        <CtaAreaHomeOne />
        {/* <GoogleReview placeId={placeId} apiKey={apiKey} /> */}
        <LatestNewsAreaHomeOne  style={false} />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
