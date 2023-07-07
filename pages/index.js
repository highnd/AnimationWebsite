import { Footer, Navbar } from "../components";
import { About, Explore, GetStarted, Hero } from "../sections";
import Documentaion from "../sections/Documentaion";

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />

    <div className="relative">
      <Documentaion />
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <GetStarted />

    <Footer />
  </div>
);

export default Home;
