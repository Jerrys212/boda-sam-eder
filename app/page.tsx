import FitText from "@/components/client/FitText";
import Parallax from "@/components/client/Parallax";
import Reveal from "@/components/client/Reveal";
import SmoothScroll from "@/components/client/SmoothScroll";
import Breather from "@/components/sections/Breather";
import DressCode from "@/components/sections/DressCode";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Itinerary from "@/components/sections/Itinerary";
import Locations from "@/components/sections/Locations";
import Navbar from "@/components/sections/Navbar";
import Statement from "@/components/sections/Statement";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statement />
      <Itinerary />
      <Breather />
      <Locations />
      <DressCode />
      <Faq />
      <Footer />
      <SmoothScroll />
      <Reveal />
      <Parallax />
      <FitText selector=".footer-word" />
    </>
  );
}
