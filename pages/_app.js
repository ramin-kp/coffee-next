import "@/styles/globals.css";

//component
import Navbar from "@/components/module/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
