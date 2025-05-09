import TravelServices from "@/components/travel-services";
import Destination from "@/components/destination/destination-page";
import { Button } from "@/components/ui/button"
import AchievementsSection from "@/components/achievements-section";
const Home = () => {
    return (
      <main>
        <Button>Hell</Button>
        <TravelServices />
        <Destination />
        <AchievementsSection />
      </main>
    )
}

export default Home;