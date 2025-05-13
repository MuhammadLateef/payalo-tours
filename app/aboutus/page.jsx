import Timeline from '@/components/timeline';
import {
    Package1,
    Package2,
    Package3,
    Story,
    Culture
} from "@/app/index";
import Image from 'next/image';
import FAQSection from '@/components/faq-section';
const AboutPage = () => {
    return (
        <div>
            <div className="bg-white px-4 py-12 sm:px-8 md:px-16 lg:px-24 space-y-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-sm text-orange-500 font-semibold mb-1">About Payalo Adventures</h2>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                                Your Gateway to Adventure in Gilgit-Baltistan
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Greetings from the gateway to adventure in the magical land of Gilgit-Baltistan! The adventurous traveler is drawn to our location, which presents a variety of experiences against a backdrop of majestic valleys, high hills, and a vibrant cultural mosaic. Gilgit-Baltistan is your ticket to an unmatched world of beauty and excitement...
                            </p>
                        </div>
                        <div>
                            <h4 className="text-md font-semibold text-gray-800 mb-1">Our Story</h4>
                            <p className="text-gray-600">
                                Deep love for Gilgit-Baltistan’s natural splendor and rich culture gave rise to Payalo Adventures. Mazahir Hussain, our founder, was born and raised in this area and has a passion for showcasing the world’s hidden gems...
                            </p>
                        </div>
                    </div>
                    {/* Image */}
                    <div>
                        <Image
                            src={Culture}
                            alt="Waterfall in Gilgit-Baltistan"
                            className=" w-full h-72 object-cover"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>

                {/* Culture Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div>
                        <Image
                            src={Story}
                            alt="Valley in Gilgit-Baltistan"
                            className=" w-full h-72 object-cover"
                            width={600}
                            height={400}
                        />
                    </div>
                    {/* Text */}
                    <div className="space-y-4">
                        <h2 className="text-sm text-orange-500 font-semibold">Our Culture</h2>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                            Join Us in Exploring Gilgit-Baltistan
                        </h3>
                        <p className="text-gray-600">
                            We cordially welcome you to discover Gilgit-Baltistan, a secret treasure tucked away in the northern regions of Pakistan. Prepare yourself for an incredible visual feast. This area is paradise...
                        </p>
                    </div>
                </div>
            </div>

            <Timeline />
            <div className="py-6">
                <FAQSection />
            </div>
        </div>
    )
}

export default AboutPage