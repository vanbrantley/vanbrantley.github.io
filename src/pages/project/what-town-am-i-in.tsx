import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Purpose from "../../components/Purpose";
import Highlights from "@/components/Highlights";
import Issues from "@/components/Issues";
import ToDo from "@/components/ToDo";
import Shortcomings from "@/components/Shortcomings";
import { Tool } from "@/lib/types";

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
            url={""}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>Mobile application that uses your device's location to tell you the town you are currently in</p>
            </div>

            <div className="space-y-16">
                <Tools tools={townTools} />

                <Purpose>
                    <div>
                        <p>The purpose of </p>
                    </div>
                </Purpose>

                <Highlights>
                    <div></div>
                </Highlights>

                <Issues>
                    <div></div>
                </Issues>

                <ToDo>
                    <div></div>
                </ToDo>

                <Shortcomings>
                    <div></div>
                </Shortcomings>
            </div>

        </Project>
    );

}

export default Town;