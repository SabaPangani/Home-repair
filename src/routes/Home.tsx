import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Ratings from "../components/Ratings";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Ratings />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}
