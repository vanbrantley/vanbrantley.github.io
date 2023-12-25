import Project from "../../components/Project";
import { Tool } from "@/lib/types";
import ImageCarousel from '../../components/ImageCarousel';
import Tools from "@/components/Tools";
import Highlights from "@/components/Highlights";
import NextSteps from "@/components/NextSteps";
import Background from "@/components/Background";

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

            <div className="space-y-8 pt-8">
                <Tools tools={avatarTools} />

                <p>Give people a way to manage their wardrobe and easily create outfits.</p>

                {avatarDesktopImages.length != 0 && (
                    <div className="flex items-center justify-center">
                        <ImageCarousel images={avatarDesktopImages} />
                    </div>
                )}

                {avatarMobileImages.length != 0 && (
                    <div className="flex items-center justify-center">
                        <ImageCarousel images={avatarMobileImages} mobile={true} />
                    </div>
                )}

                <Highlights>
                    <div>
                        <ul>
                            <li>
                                <p>- My first web app hosted on AWS, made easy with AWS Amplify.</p>
                            </li>
                            <li>
                                <p>- Utilized Amplify's codegen to automatically generate queries, mutations, and subscriptions from my GraphQL schema.</p>
                            </li>
                            <li>
                                <p>- Went from a project with loosely related but separate functionalities to a much more simple, straightforward, and streamlined application for a specific use case.</p>
                            </li>
                            <li>
                                <p>- Implemented client-side caching with my MobX store to reduce the number of database fetch queries.</p>
                            </li>
                        </ul>
                    </div>
                </Highlights>

                <Background>
                    <div>
                        <p>One day I was getting dressed and realized I didn’t really like a lot of my clothes anymore. It was time to start my wardrobe anew. </p>
                        <p>I started making Avatar as a way to help guide me the process of my wardrobe building journey, first identifying the garments in my wardrobe that would survive, and then to identify pieces that I should acquire next.</p>
                    </div>
                </Background>

                <NextSteps>
                    <div>
                        <p>- Make the Avatar's hat optional, giving users the ability to customize their Avatar's hair style and color.</p>
                        <p>- Enable users to customize the order that garments are listed.</p>
                        <p>- Allow user to create and manage groups of garments.</p>
                    </div>
                </NextSteps>
            </div>

        </Project>
    );

}

export default Avatar;