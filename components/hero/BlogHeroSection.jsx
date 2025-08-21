import { PrismicNextImage } from "@prismicio/next";
import dayjs from "dayjs";
import { FiCalendar } from "react-icons/fi";

const BlogHeroSection = ({ data }) => {
  const { meta_title, meta_description, featured_image, published_date } =
    data.data;

  return (
    <div className="content-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mx-auto">
            <div className="blog-post blog-lg blog-rounded">
              <div>
                <div className="dlab-post-title mb-4">
                  <div className="dlab-post-meta">
                    <ul>
                      {published_date && (
                        <li className="post-date">
                          <FiCalendar
                            style={{
                              marginRight: "5px",
                              fontSize: "16px",
                              marginTop: "-5px",
                            }}
                          />
                          {dayjs(published_date).format("DD MMM YYYY")}
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="dlab-post-title mb-4">
                    <h1 className="post-title mt-0">{meta_title}</h1>
                  </div>
                </div>
                <div className="dlab-post-text">
                  <p>{meta_description}</p>

                  <PrismicNextImage
                    field={featured_image}
                    fallbackAlt={meta_title}
                    className="w-100 h-auto br-md"
                    sizes="(max-width: 575px) 100vw, 570px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
