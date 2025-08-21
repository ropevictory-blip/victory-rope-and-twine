import Heading from "../heading/Heading";
import { ProductItem } from "./ProductsSection";
import JuteRope from "./JuteRope";
import ManillaRope from "./ManilaRopes";
import SisalRopes from "./SisalRopes";


const CategoryProductsSection = async ({ slice: { primary }, docs }) => {
  console.log(docs);

  return (
    <div className="section-full content-inner-2 bg-gray">
      <div className="container">
        <Heading { ...primary } docs={ docs } />

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

        { docs?.[0]?.uid === "jute-rope" && (
          <JuteRope />
        ) }
         { docs?.[0]?.uid === "manila-ropes" && (
          <ManillaRope />
        ) }
        { docs?.[0]?.uid === "sisal-rope" && (
          <SisalRopes />
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
