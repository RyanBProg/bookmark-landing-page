import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesBanner from "./components/FeaturesBanner";
import ExtensionsBanner from "./components/ExtensionsBanner";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturesBanner />
        <ExtensionsBanner />
        <FAQ />
      </main>
    </div>
  );
}

export default App;
