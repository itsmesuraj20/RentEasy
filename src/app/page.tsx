import CommunitySection from "./components/community-section";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import StatsSection from "./components/stats-section";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CommunitySection />
    </>
  );
}