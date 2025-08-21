import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
// TODO: Update the routes array to match your project's route structure.
const routes = [
  {
    type: "home_page",
    path: "/",
  },
  {
    type: "about_page",
    path: "/about",
  },
  {
    type: "products_page",
    path: "/products",
  },
  {
    type: "product_page",
    path: "/:uid",
  },
  {
    type: "custom_page",
    path: "/:uid",
  },
  {
    type: "gallery_page",
    path: "/gallery",
  },
  {
    type: "categories_page",
    path: "/categories",
  },
  {
    type: "press_release_page",
    path: "/press-release",
  },
  {
    type: "blogs_page",
    path: "/blogs",
  },
  {
    type: "blog_post",
    path: "/post/:uid",
  },
  {
    type: "category_page",
    path: "/category/:uid",
  },
  {
    type: "contact_page",
    path: "/contact",
  },
  {
    type: "terms_and_conditions_page",
    path: "/terms-and-conditions",
  },
  {
    type: "privacy_policy_page",
    path: "/privacy-policy",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */
// process.env.NODE_ENV === "production"
//   ? { next: { tags: ["prismic"] }, cache: "force-cache" }
//   : { next: { revalidate: 5 } },

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes,
    fetchOptions: { next: { tags: ["prismic"], revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
