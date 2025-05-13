import TravelServices from "@/components/travel-services";
import Destination from "@/components/destination/destination-page";
import AchievementsSection from "@/components/achievements-section";
import ContactUs from "./contactus/page";
import TourComponents from "@/components/tours-component";
const Home = () => {
  return (
    <main>
      <TourComponents />
      <TravelServices />
      <Destination />
      <AchievementsSection />
      <ContactUs />
    </main>
  )
}

export default Home;