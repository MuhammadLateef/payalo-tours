import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQSection() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Frequently asked questions</h2>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-0">
        <div className="space-y-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-t border-b py-4">
              <AccordionTrigger className="flex items-center justify-between hover:no-underline">
                <span className="text-left font-medium">Do you offer K2 basecamp trekking?</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer guided treks to K2 basecamp. Our experienced guides ensure a safe and memorable journey to
                one of the world's most iconic mountain destinations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b py-4">
              <AccordionTrigger className="flex items-center justify-between hover:no-underline">
                <span className="text-left font-medium">Do you have any office in Islamabad</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes, we maintain a fully operational office in Islamabad where you can meet our team, discuss trip
                details, and make arrangements in person.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b py-4">
              <AccordionTrigger className="flex items-center justify-between hover:no-underline">
                <span className="text-left font-medium">Do you offer Photograhy/Videography Services?</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes, we provide professional photography and videography services to capture your adventure. Our skilled
                photographers can accompany your trek to document the experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b py-4">
              <AccordionTrigger className="flex items-center justify-between hover:no-underline">
                <span className="text-left font-medium">Do you offer customized trips?</span>
              </AccordionTrigger>
              <AccordionContent>
                We specialize in creating customized itineraries tailored to your preferences, timeframe, and interests.
                Contact us to plan your personalized adventure.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="space-y-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-5" className="border-t border-b py-4">
              <AccordionTrigger className="flex items-center justify-between hover:no-underline">
                <span className="text-left font-medium">Are you registered company?</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes, we are a fully registered and licensed tour operator with all necessary permits and certifications
                to conduct trekking expeditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b py-4">
              <AccordionTrigger className="flex items-center justify-between hover:no-underline">
                <span className="text-left font-medium">Do you have licensed guide for Trekking?</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes, all our guides are professionally trained and licensed with extensive experience in high-altitude
                trekking and mountain safety protocols.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b py-4">
              <AccordionTrigger className="flex items-center justify-between hover:no-underline">
                <span className="text-left font-medium">What is the best time to visit Gilgit-Baltistan?</span>
              </AccordionTrigger>
              <AccordionContent>
                The best time to visit Gilgit-Baltistan is from May to October. Summer months (June-August) offer the
                most favorable conditions for trekking and outdoor activities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-b py-4">
              <AccordionTrigger className="flex items-center justify-between hover:no-underline">
                <span className="text-left font-medium">Do you offer any discounts?</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer group discounts, early booking incentives, and special rates for returning customers.
                Contact us for current promotional offers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button className=" bg-green-500 text-white rounded-full border border-green-500  hover:bg-white hover:text-[#F9A826] transition-all duration-300 transform hover:scale-110 px-8 py-6 font-medium text-base">
          CONTACT US
        </Button>
      </div>
    </div>
  )
}
