import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Highlights from "@/components/Highlights";
import NextSteps from "@/components/NextSteps";
import Background from "@/components/Background";
import { Tool } from "@/lib/types";
import ImageCarousel from "@/components/ImageCarousel";

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
        "/keyboard-images/Desktop-Blank.png",
        "/keyboard-images/Desktop-Config.png",
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
            githubPath={"keyboard"}
            url={"https://keyboard-ivory.vercel.app/"}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>Playable web piano designed to help people learn scales and chords</p>
            </div>

            <div className="space-y-8 pt-8">
                <Tools tools={keyboardTools} />

                {keyboardDesktopImages.length != 0 && (
                    <div className="flex items-center justify-center">
                        <ImageCarousel images={keyboardDesktopImages} />
                    </div>
                )}

                {keyboardMobileImages.length != 0 && (
                    <div className="flex items-center justify-center">
                        <ImageCarousel images={keyboardMobileImages} mobile={true} />
                    </div>
                )}

                <Highlights>
                    <div>
                        <ul>
                            <li>
                                <p>- Made three different UI layouts for Desktop, Mobile, and Mobile Landscape screens.</p>
                            </li>
                            <li>
                                <p>- Utilized HTML audio tags to play note and chord mp3 files.</p>
                            </li>
                        </ul>
                    </div>
                </Highlights>

                <Background>
                    <div>
                        <p>After graduating from college, I took up an interest in music production.</p>
                        <p>One of the first steps for me in exploring this domain was learning basic music theory.</p>
                        <p>When I found out that scales are made by following a set pattern of steps out from the root note, I pictured an array of notes, and envisioned a process of selecting valid notes while traversing the array.</p>
                        <p>Soon after this, I learned that chords for a scale are made by stepping through each note in the scale, and pairing it with the two scale notes that are two and four notes away from it respectively in the scale.</p>
                        <p>These nice systematic formulas that could easily be derived by traversing arrays inspired me to build a tool that given a root note, calculated its scale’s notes and chords.</p>
                        <p>It was a win-win for me, as I got to practice my web development skills and as a result gained a useful tool which immediately helped me progress in my music production journey. </p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </Background>

                <NextSteps>
                    <div>
                        <p>- Add a Progression Mode which allows users to build note and chord progressions within a scale.</p>
                        <p>- Add notes and chords for additional scales other than just major and minor, like Pentonic scales and Dorian Mode scale.</p>
                        <p>- Add additional octaves - one above and one below.</p>
                    </div>
                </NextSteps>
            </div>

        </Project>
    );

}

export default Keyboard;