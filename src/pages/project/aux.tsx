import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Highlights from "@/components/Highlights";
import NextSteps from "@/components/NextSteps";
import { Tool } from "@/lib/types";

const Aux = () => {

    const auxTools: Tool[] = [];

    return (

        <Project name={"AUX"}
            logo={"aux-logo.png"}
            githubPath={""}
            url={""}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>AUX is a social music application for Spotify</p>
            </div>

            <div className="space-y-8 pt-8">
                <Tools tools={auxTools} />

                <Highlights>
                    <div>

                    </div>
                </Highlights>

                <NextSteps>
                    <div></div>
                </NextSteps>

            </div>

        </Project>

    );

}

export default Aux;