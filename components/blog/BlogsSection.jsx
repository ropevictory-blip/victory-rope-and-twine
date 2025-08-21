import Link from "next/link";
import Heading from "../heading/Heading";
import { PrismicNextImage } from "@prismicio/next";
import dayjs from "dayjs";
import { createClient } from "@/prismicio";
import { FiCalendar } from "react-icons/fi";

const BlogsSection = async ({ slice }) => {
  const tempPrimary = {
    subheading: "Our Blogs",
    heading: [
      {
        type: "heading2",
        text: "Our Latest Blogs",
        spans: [Array],
        direction: "ltr",
      },
    ],
  };

  const { number } = slice?.primary || {};

  const client = createClient();

  let doc = null;

  if (number) {
    let tempDoc = await client.getByType("blog_post", {
      orderings: {
        field: "my.blog_post.published_date",
        direction: "desc",
      },
      pageSize: number,
    });

    doc = tempDoc?.results;
  } else {
    doc = await client.getAllByType("blog_post", {
      orderings: {
        field: "my.blog_post.published_date",
        direction: "desc",
      },
    });
  }

  return (
    <div
      className="section-full content-inner"
      style={{
        backgroundColor: "#F7F3F4",
      }}
    >
      <div className="container">
        <Heading {...tempPrimary} />

        <div className="row justify-content-center">
          {doc?.map((item, index) => (
            <BlogItem key={index} data={item} uid={item?.uid} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogItem = ({ data, uid, index }) => {
  const {
    meta_title,
    meta_description,
    heading,
    description,
    featured_image,
    published_date,
  } = data?.data;

  const link = `/post/${uid}`;

  return (
    <div
      className="col-lg-4 col-md-6 col-sm-6"
      data-sal="slide-up"
      data-sal-duration="1200"
      data-sal-delay={index * 100}
    >
      <div className="blog-post blog-grid blog-rounded blog-effect1 p-0 h-100">
        <div className="dlab-post-media dlab-img-effect">
          <Link href={link}>
            <PrismicNextImage field={featured_image} className="w-100 h-auto" />
          </Link>
        </div>
        <div className="dlab-info p-a20">
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
                  />{" "}
                  {dayjs(published_date).format("DD MMM, YYYY")}
                </li>
              )}
            </ul>
          </div>
          <div className="dlab-post-title">
            <h3 className="post-title">
              <Link href={link}>{meta_title || heading[0]?.text}</Link>
            </h3>
          </div>
          <div className="dlab-post-text">
            <p>{meta_description || description[0]?.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
