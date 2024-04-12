import Container from "../components/Container/Container";
import EstatesProperty from "../components/EstatesProperty/EstatesProperty";
import HaveQuestion from "../components/HaveQuestion/HaveQuestion";
import HomeHeroSlider from "../components/HomeHeroSlider/HomeHeroSlider";
import ListingCategories from "../components/ListingCategories/ListingCategories";

const Home = () => {
  return (
    <Container>
      <HomeHeroSlider />
      <ListingCategories />
      <EstatesProperty />
      <HaveQuestion />
    </Container>
  );
};

export default Home;
