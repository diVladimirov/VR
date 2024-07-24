import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

export default function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </Layout>
    </>
  );
}
