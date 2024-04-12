import Container from "../components/Container/Container";
import EstatesProperty from "../components/EstatesProperty/EstatesProperty";
import HomeHeroSlider from "../components/HomeHeroSlider/HomeHeroSlider";
import ListingCategories from "../components/ListingCategories/ListingCategories";

const Home = () => {
  return (
    <Container>
      <HomeHeroSlider />
      <ListingCategories />
      <EstatesProperty />
    </Container>
  );
};

export default Home;
