import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserProvider } from "../context/UserAuthContext";
import "../styles/globals.css";

const client = new ApolloClient({
  // uri: "https://showapi.aapnibachat.in/",
  uri: "https://aws.aapnibachat.in",
  // uri: "http://localhost:4002",
  cache: new InMemoryCache(),
});
const scroll = () => {
  // scroll 50 pixels down
  window.scrollBy(0, 500);
};
function MyApp({ Component, pageProps }) {
  return (
    <>
       
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-VS0TNSZ3DH"
      />
          
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VS0TNSZ3DH');
        `,
        }}
      />
      <ApolloProvider client={client}>
        <UserProvider>
          <Navbar />
          <ToastContainer />
          <Head>
            <title>
            Wedding Planner app - Plan your wedding and events with us 
            </title>
          </Head>
          <Component {...pageProps} />
          <button
            onClick={() => {
              scroll();
            }}
            className="sm:fixed hidden bottom-20 right-36"
          >
            {/* <RiArrowDownSLine className="text-primary text-5xl font-black shadow-primary" /> */}
            <Image
              src="/images/arrow.png"
              height={50}
              width={50}
              quality={100}
              className="text-primary text-5xl font-black shadow-primary"
              alt="banner"
            />
          </button>
          <div className="bg-black">
          <Footer />
          </div>
        </UserProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
