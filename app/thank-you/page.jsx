const ThankYouPage = () => {
  return (
    <div
      className="thank-you-page"
      style={{
        height: "100vh",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <img
              loading="lazy"
              src="https://images.prismic.io/vrtc/aG4940MqNJQqHtvc_image.png"
              alt=""
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .thank-you-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          padding: 60px 0;
        }

        .thank-you-content {
          padding: 50px 30px;
          background: white;
          border-radius: 12px;
        }

        .success-icon-wrapper {
          margin-bottom: 15px;
        }

        .success-icon {
          display: inline-block;
          animation: successPulse 0.6s ease-out;
        }

        .thank-you-title {
          font-size: 48px;
          font-weight: 700;
          color: #232323;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .thank-you-description {
          font-size: 18px;
          color: #6f6f6f;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .thank-you-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .thank-you-page {
            padding: 40px 0;
            min-height: 70vh;
          }

          .thank-you-content {
            padding: 40px 20px;
          }

          .thank-you-title {
            font-size: 36px;
          }

          .thank-you-description {
            font-size: 16px;
            margin-bottom: 30px;
          }

          .thank-you-actions {
            flex-direction: column;
            align-items: center;
          }

          .thank-you-actions .site-button {
            width: 100%;
            max-width: 200px;
          }
        }

        @media (max-width: 480px) {
          .thank-you-title {
            font-size: 28px;
          }

          .thank-you-description {
            font-size: 15px;
          }

          .success-icon svg {
            width: 48px;
            height: 48px;
          }
        }
      `}</style> */}
    </div>
  );
};

export default ThankYouPage;
