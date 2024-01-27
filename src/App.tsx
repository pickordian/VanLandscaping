import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return (
    <>
      <Header />
      <Home />
      <Services isDarkMode={isDarkMode} />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
