import { useLoaderData } from "react-router-dom";
import AnimatedNumber from "../components/AnimatedNumber/AnimatedNumber";
import EstatesProperty from "../components/EstatesProperty/EstatesProperty";
import HaveQuestion from "../components/HaveQuestion/HaveQuestion";
import HomeHeroSlider from "../components/HomeHeroSlider/HomeHeroSlider";
import ListingCategories from "../components/ListingCategories/ListingCategories";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();

  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pb-20">
      <Helmet>
        <title>Luxinesy | Home</title>
      </Helmet>
      <HomeHeroSlider />
      <ListingCategories />
      <EstatesProperty data={data} />
      <AnimatedNumber />
      <HaveQuestion />
    </div>
  );
};

export default Home;
