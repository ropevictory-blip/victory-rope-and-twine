import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";
import BlogHeroSection from "@/components/hero/BlogHeroSection";
import BlogsSection from "@/slices/BlogsSection";
import { notFound } from "next/navigation";

const BlogPost = async ({ params }) => {
  const client = createClient();

  const doc = await client
    .getByUID("blog_post", params.slug)
    .catch(() => notFound());

  return (
    <div style={{ backgroundColor: "#F7F3F4" }}>
      <BlogHeroSection data={doc} />
      <SliceZone
        slices={doc?.data?.slices}
        components={components}
        context={{
          blog: true,
        }}
      />
      <BlogsSection />
    </div>
  );
};

export async function generateStaticParams() {
  const client = createClient();

  const docs = await client.getAllByType("blog_post");

  return docs.map((item) => ({
    slug: item.uid,
  }));
}

export async function generateMetadata({ params }) {
  const client = createClient();

  const page = await client
    .getByUID("blog_post", params.slug)
    .catch(() => notFound());

  return Seo(page);
}

export default BlogPost;
