/**
 * @typedef {import("@prismicio/client").Content.NavLinksSlice} NavLinksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavLinksSlice>} NavLinksProps
 * @param {NavLinksProps}
 */
const NavLinks = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_links (variation: {slice.variation}) Slices
    </section>
  );
};

export default NavLinks;
