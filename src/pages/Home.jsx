import { useLoaderData } from "react-router-dom";
import AnimatedNumber from "../components/AnimatedNumber/AnimatedNumber";
import Container from "../components/Container/Container";
import EstatesProperty from "../components/EstatesProperty/EstatesProperty";
import HaveQuestion from "../components/HaveQuestion/HaveQuestion";
import HomeHeroSlider from "../components/HomeHeroSlider/HomeHeroSlider";
import ListingCategories from "../components/ListingCategories/ListingCategories";
import { useEffect } from "react";

const Home = () => {
  const data = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <HomeHeroSlider />
      <ListingCategories />
      <EstatesProperty data={data} />
      <AnimatedNumber />
      <HaveQuestion />
    </Container>
  );
};

export default Home;
