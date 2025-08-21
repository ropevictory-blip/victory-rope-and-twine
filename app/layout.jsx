import NextTopLoader from "nextjs-toploader";
import StyledJsxRegistry from "@/lib/styledJsx/StyleRegistry";
// ===== import prismic client =====
import { createClient } from "@/prismicio";

// ===== prismic preview toolbar =====
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

// ===== import layout =====
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import WhatsappFormButton from "@/components/WhatsappFormButton";
import Share from "@/components/share";

// ===== Google Fonts import =====
import { Poppins } from "next/font/google";

// ===== import third party scripts =====
import { GoogleAnalytics } from "@next/third-parties/google";

// ===== import styles =====
import "@/styles/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/style.css";
import "@splidejs/react-splide/css";
import "sal.js/dist/sal.css";

import LeadGenerationModal from "@/components/modal/LeadGenerationModal";
import EnquiryBtn from "@/components/layout/enquiry-btn";
import BlockContent from "@/components/block-content";
import CookiePopup from "@/components/CookiePopup";
import { Suspense } from "react";
import SalWrapper from "@/lib/sal-wrapper";

// ===== initialize fonts =====
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Victory Rope and Twine",
  description: "",
};

export default async function RootLayout({ children }) {
  const client = createClient();
  const layout = await client.getSingle("layout");

  return (
    <html lang="en" className={ `${poppins.variable}` }>
      <head>
        {/* ===== Meta Tags ===== */ }
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Victory Rope and Twine - Premium Ropes and Twines for every need."
        />
        <meta
          name="keywords"
          content="ropes, twines, fishing ropes, industrial ropes, Victory Rope"
        />
        <meta name="author" content="Victory Rope and Twine" />
        <meta property="og:title" content="Victory Rope and Twine" />
        <meta
          property="og:description"
          content="High-quality ropes and twines for industrial and personal use."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#ffffff" />

        {/* ===== Google Site Verification ===== */ }
        {/* <!-- End Google Tag Manager --> */ }
        <meta
          name="google-site-verification"
          content="uHl0M4aRXKibql3e080l1Tn1kAnr6TJHdOzO_R7uO-c"
        />

        {/* ===== GTM - Head Opening Section ===== */ }
        {/* <!-- Google Tag Manager --> */ }
        <script
          dangerouslySetInnerHTML={ {
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M4LKTZ8T');`,
          } }
        />

        {/* ===== Favicons ===== */ }
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
      </head>
      <body>
        {/* ===== GTM - Body Opening Section ===== */ }
        {/* <!-- Google Tag Manager (noscript) --> */ }
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4LKTZ8T"
            height="0"
            width="0"
            style={ { display: "none", visibility: "hidden" } }
          ></iframe>
        </noscript>

        {/* <!-- End Google Tag Manager (noscript) --> */ }
        <NextTopLoader color="#02172C" />
        <main>
          <BlockContent>
            <StyledJsxRegistry>
              <Suspense>
                <SalWrapper>
                  <Header data={ layout.data } />
                  <div>{ children }</div>
                  <Footer data={ layout.data } />
                  <EnquiryBtn />
                  <Share />
                  <LeadGenerationModal
                    images={ [
                      "https://images.prismic.io/vrtc/Z4UhHJbqstJ99YeM_SAN_9864.jpg?auto=format,compress",
                      "https://images.prismic.io/vrtc/Z4UhApbqstJ99YeB_SAN_9866.jpg?auto=format,compress",
                      "https://images.prismic.io/vrtc/Z4UhFJbqstJ99YeJ_SAN_9860.jpg?auto=format,compress",
                      "https://images.prismic.io/vrtc/aGaAjXfc4bHWjAlW_WhatsAppImage2025-07-03at6.29.27PM.jpeg?auto=format,compress",
                      "https://images.prismic.io/vrtc/aGaAjXfc4bHWjAlX_WhatsAppImage2025-07-03at6.30.54PM.jpeg?auto=format,compress",
                    ] }
                    content={ {
                      heading: "Get a Free Quote",
                      description:
                        "Fill out the form below and one of our experts will get in touch with you soon.",
                    } }
                  />
                  <WhatsappFormButton
                    number="+916292293301"
                    text="Hello! I'm interested in your products."
                    name="Victory Rope & Twine"
                    icon="https://images.prismic.io/vrtc/aGJdJXfc4bHWi13J_vrtclogo.png?auto=format,compress&w=200"
                    formId="vrtc-website-whatsapp-lead-capture-dlg2qi"
                    message="Hi, Welcome to Victory Rope & Twine. How can I help you?"
                  />
                </SalWrapper>
              </Suspense>
            </StyledJsxRegistry>
          </BlockContent>
        </main>

        <CookiePopup />
        <GoogleAnalytics gaId="G-KGTL5RKT2M" />
        <PrismicPreview repositoryName={ repositoryName } />
      </body>
    </html>

  );
}

