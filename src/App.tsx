import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesBanner from "./components/FeaturesBanner";
import ExtensionsBanner from "./components/ExtensionsBanner";
import FAQ from "./components/FAQ";
import SubForm from "./components/SubForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturesBanner />
        <ExtensionsBanner />
        <FAQ />
        <SubForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
