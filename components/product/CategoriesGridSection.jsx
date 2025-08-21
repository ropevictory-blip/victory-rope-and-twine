import Heading from "../heading/Heading";
import { CategoryItem } from "./CategoriesSlider";
import { createClient } from "@/prismicio";

const CategoriesGridSection = async ({ slice: { primary } }) => {
  const client = createClient();

  const docs = await client.getAllByType("category_page", {
    orderings: {
      field: "my.category_page.published_date",
      direction: "desc",
    },
  });

  return (
    <div className="section-full content-inner-2 bg-gray product-categories">
      <div className="container">
        <Heading {...primary} />

        <div
          className="img-carousel service-box-4-area row justify-content-center"
          style={{
            rowGap: "1rem",
          }}
        >
          {docs?.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-6" key={index}>
              <CategoryItem data={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesGridSection;
