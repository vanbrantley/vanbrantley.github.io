import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Purpose from "../../components/Purpose";
import Highlights from "@/components/Highlights";
import Issues from "@/components/Issues";
import ToDo from "@/components/ToDo";
import Shortcomings from "@/components/Shortcomings";
import { Tool } from "@/lib/types";

const Aux = () => {

    const auxTools: Tool[] = [];

    return (

        <Project name={"AUX"}
            logo={"aux-logo.png"}
            desktopImages={[]}
            mobileImages={[]}
            githubPath={""}
            url={""}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>AUX is a social music application for Spotify</p>
            </div>

            <div className="space-y-16">
                <Tools tools={auxTools}>
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

export default Aux;