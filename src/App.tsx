import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesBanner from "./components/FeaturesBanner";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturesBanner />
      </main>
    </div>
  );
}

export default App;
