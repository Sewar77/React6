import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  // js

  return (
    <>
      {/* components */}
      <Header />
      <div className="min-h-[100vh]">
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
