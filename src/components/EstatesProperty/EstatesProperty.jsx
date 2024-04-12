import SectionTitle from "../SectionTitle/SectionTitle";
import SingleEstate from "./../SingleEstate/SingleEstate";

const EstatesProperty = () => {
  return (
    <div>
      <SectionTitle
        title="Estates Property"
        desctiption="Explore our prestigious collection of estate properties, where luxury meets sophistication in every detail. Discover your dream home among our meticulously curated listings, each offering unparalleled elegance and opulence."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-16">
        <SingleEstate />
        <SingleEstate />
        <SingleEstate />
        <SingleEstate />
        <SingleEstate />
        <SingleEstate />
      </div>
    </div>
  );
};

export default EstatesProperty;
