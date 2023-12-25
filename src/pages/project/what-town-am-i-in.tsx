import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Highlights from "@/components/Highlights";
import NextSteps from "@/components/NextSteps";
import Background from "@/components/Background";
import { Tool } from "@/lib/types";
import ImageCarousel from "@/components/ImageCarousel";

const Town = () => {

    const townTools: Tool[] = [
        {
            name: "TypeScript",
            logo: "typescript.png"
        },
        {
            name: "Expo",
            logo: "expo.png"
        },
        {
            name: "Google Cloud",
            logo: "google-cloud.png"
        },
        {
            name: "Jest",
            logo: "jest.png"
        },
    ];

    const townMobileImages = [
        "/town-images/home.png",
        "/town-images/splash.png",
        "/town-images/town.png",
    ];

    return (
        <Project name={"What Town Am I In?"}
            logo={"town-logo.png"}
            githubPath={"what-town-am-i-in"}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>Mobile application that uses your device's location to tell you the town you are currently in</p>
            </div>

            <div className="space-y-8 pt-8">
                <Tools tools={townTools} />

                {townMobileImages.length != 0 && (
                    <div className="flex items-center justify-center">
                        <ImageCarousel images={townMobileImages} mobile={true} />
                    </div>
                )}

                <Highlights>
                    <div>
                        <ul>
                            <li>
                                <p>- First project that I have submitted for review to be deployed on the Apple App Store.</p>
                            </li>
                            <li>
                                <p>- Didn't re-invent the wheel. Clever synthesis of existing tools to provide a helpful service.</p>
                                <p>- Expo simplifies the development experience for React Native.</p>
                                <p>- The expo-location package offers a simple way to work with the device's location.</p>
                                <p>- Google Cloud's Geolocation API returns an address given a pair of coordinates.</p>
                            </li>
                            <li>
                                <p>
                                    - Implemented techniques to prevent incurring unnecessary charges from Google Cloud's API such as
                                    fetching location on a timed interval, and ensuring that a minimum threshold distance is reached
                                    in between intervals before making another API request.
                                </p>
                            </li>
                        </ul>
                    </div>
                </Highlights>

                <Background>
                    <div>
                        <p>For a while, it had been a dream of mine to publish a mobile app on the App Store. It seemed that that is what it would stay as - a dream - as the more I thought about it, the more impractical mobile development seemed to me. Reports showed that people are very reluctant to download new applications and only use a limited number of popular applications, and with responsive design, users can easily access web applications on their mobile devices in the browser without having to install a new app.</p>
                        <p>But much to my delight, an idea finally came to me that made perfect sense to be developed as a mobile application!</p>
                        <p>I was lucky enough to have the opportunity to go on a cross country road trip with a few friends from New Jersey to California and back.</p>
                        <p>As we progressed along the journey, I found myself repeatedly asking myself the question -  “What town are we in?”</p>
                        <p>When attempting to answer this question, I found that there was no immediate way to find out. I could go on a Map app and try to deduce the town from the sectioned areas of the map - but not all towns are labeled on the map. I could also look up the name of a store that we passed and hope to find its location listed.</p>
                        <p>I dreamt of an app that would simply tell me the answer to that question, and nothing more. So that is what I set out to make.</p>
                        <p></p>
                    </div>
                </Background>

                <NextSteps>
                    <div>
                        <p>- Advertise the application and get some users!</p>
                    </div>
                </NextSteps>
            </div>

        </Project>
    );

}

export default Town;