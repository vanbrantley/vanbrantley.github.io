import Project from "../../components/Project";
import { Tool } from "@/lib/types";
import ImageCarousel from '../../components/ImageCarousel';
import Tools from "@/components/Tools";
import Purpose from "../../components/Purpose";
import Highlights from "@/components/Highlights";
import Issues from "@/components/Issues";
import ToDo from "@/components/ToDo";
import Shortcomings from "@/components/Shortcomings";

const Avatar = () => {

    const avatarTools: Tool[] = [
        {
            name: "TypeScript",
            logo: "typescript.png"
        },
        {
            name: "NextJS",
            logo: "nextjs.png"
        },
        {
            name: "AWS Amplify",
            logo: "aws-amplify.png"
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

    const avatarDesktopImages = [
        "/avatar-images/Closet.png",
        "/avatar-images/Preview.png",
    ];

    const avatarMobileImages = [
        "/avatar-images/Mobile-Avatar.png",
        "/avatar-images/Mobile-Closet.png",
        "/avatar-images/Mobile-Preview.png",
    ];

    return (
        <Project name={"Avatar"}
            logo={"avatar-logo.png"}
            githubPath={"avatar"}
            url={"https://avatar-blond.vercel.app/"}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>Web closet</p>
            </div>

            <div className="space-y-16">
                <Tools tools={avatarTools} />

                <Purpose>
                    <div>
                        <p>The purpose of </p>
                    </div>
                </Purpose>

                {avatarDesktopImages.length != 0 && (
                    <div className="flex items-center justify-center">
                        <ImageCarousel images={avatarDesktopImages} />
                    </div>
                )}

                {avatarMobileImages.length != 0 && (
                    <div className="flex items-center justify-center">
                        <ImageCarousel images={avatarMobileImages} />
                    </div>
                )}

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

export default Avatar;