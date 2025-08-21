import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import Seo from "@/lib/seo/Seo";

const PressRelease = async () => {
  const client = createClient();

  const doc = await client.getSingle("press_release_page");

  return (
    <>
      <SliceZone slices={doc.data.slices} components={components} />
    </>
  );
};

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("press_release_page");

  return Seo(page);
}

export default PressRelease;
