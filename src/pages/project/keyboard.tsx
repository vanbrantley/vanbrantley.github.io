import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Purpose from "../../components/Purpose";
import Highlights from "@/components/Highlights";
import Issues from "@/components/Issues";
import ToDo from "@/components/ToDo";
import Shortcomings from "@/components/Shortcomings";
import { Tool } from "@/lib/types";

const Keyboard = () => {

    const keyboardTools: Tool[] = [
        {
            name: "TypeScript",
            logo: "typescript.png"
        },
        {
            name: "NextJS",
            logo: "nextjs.png"
        },
        {
            name: "Tailwind CSS",
            logo: "tailwind.png"
        },
        {
            name: "Jest",
            logo: "jest.png"
        },
        {
            name: "Vercel",
            logo: "vercel-2.png"
        }
    ];

    const keyboardDesktopImages = [
        "/keyboard-images/Config-Modal.png",
        "/keyboard-images/Desktop-Chords.png",
        "/keyboard-images/Desktop-Notes.png",
    ];

    const keyboardMobileImages = [
        "/keyboard-images/Mobile-Notes.png",
        "/keyboard-images/Mobile-Landscape-Notes.png",
    ];

    return (
        <Project name={"Keyboard"}
            logo={"keyboard-logo.png"}
            desktopImages={keyboardDesktopImages}
            mobileImages={keyboardMobileImages}
            githubPath={"keyboard"}
            url={"https://keyboard-ivory.vercel.app/"}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>Playable web piano designed to help people learn scales and chords</p>
            </div>

            <div className="space-y-16">
                <Tools tools={keyboardTools}>
                    <div></div>
                </Tools>

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

export default Keyboard;