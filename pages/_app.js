import "@/styles/globals.css";

//component
import Navbar from "@/components/module/Navbar/Navbar";
import Footer from "@/components/module/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
