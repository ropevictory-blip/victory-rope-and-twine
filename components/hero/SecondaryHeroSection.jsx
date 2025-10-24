const SecondaryHeroSection = ({ slice: { primary } }) => {
  const { heading, description, background_image, super_text } = primary;

  return (
    <div
      className="dlab-bnr-inr overlay-black-middle bg-pt"
      style={{
        backgroundImage: `url(${background_image.url})`,
      }}
    >
      <div className="container" data-sal="slide-up" data-sal-duration="1200">
        <div className="secondary-hero-content">
          <div className="content-box">
            <h6 className="text-white text-left">{super_text?.[0]?.text || ''}</h6>
            <h1 className="text-white text-left">{heading[0].text}</h1>
            <p className="text-white text-left">{description[0].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeroSection;
