import Heading from "../heading/Heading";
import { ProductItem } from "./ProductsSection";

const extraData = {
  'jute-ropes':
  {
    heading1: 'Jute Rope',
    drescription: 'Biodegradable ropes with a soft, natural texture and excellent grip. Great for packaging, gardening, and DIY crafts.',
  }

}

const CategoryProductsSection = async ({ slice: { primary }, docs }) => {

  return (
    <div className="section-full content-inner-2 bg-gray">
      <div className="container">
        <Heading { ...primary } />
        { docs?.length > 0 ? (
          <div className="row justify-content-center rowGap30">
            { docs.map((item, index) => (
              <ProductItem key={ index } data={ item } index={ index } />
            )) }
          </div>
        ) : (
          <div
            className="text-center"
            style={ {
              fontSize: "1.2rem",
              color: "#7A7B7B",
              marginTop: "6rem",
              marginBottom: "6rem",
            } }
          >
            No Products Found
          </div>
        ) }
      </div>
    </div>
    // <>
    //  <h2>{extraData["jute-ropes"].heading1}</h2>
    //   <p>{extraData["jute-ropes"].drescription}</p>
    // </>
  );
};

export default CategoryProductsSection;
