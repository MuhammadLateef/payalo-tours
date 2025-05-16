import TravelServices from "@/components/travel-services";
import Destination from "@/components/destination/destination-page";
import AchievementsSection from "@/components/achievements-section";
import TourComponents from "@/components/tours-component";
import HeroSlider from "@/components/hero-slider";
import UnforgetAbleMoment from "@/components/UnforgetAbleMoment";
import Adventure from "@/components/Adventure";
const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSlider />
      <TourComponents />
      <Destination />
      {/* <ExploreAdventure /> */}
      <UnforgetAbleMoment />
      <Adventure />
      <TravelServices />
      <AchievementsSection />
    </main>
  )
}

export default Home;