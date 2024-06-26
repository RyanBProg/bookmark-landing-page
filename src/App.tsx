import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesBanner from "./components/FeaturesBanner";
import ExtensionsBanner from "./components/ExtensionsBanner";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturesBanner />
        <ExtensionsBanner />
      </main>
    </div>
  );
}

export default App;
