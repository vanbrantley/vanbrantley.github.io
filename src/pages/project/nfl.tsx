import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Purpose from "../../components/Purpose";
import Highlights from "@/components/Highlights";
import Issues from "@/components/Issues";
import ToDo from "@/components/ToDo";
import Shortcomings from "@/components/Shortcomings";
import { Tool } from "@/lib/types";

const NFL = () => {

    const nflTools: Tool[] = [
        {
            name: "Python",
            logo: "python.png"
        },
        {
            name: "Flask",
            logo: "flask.webp"
        },
        {
            name: "MySQL",
            logo: "mysql.png"
        },
        {
            name: "Flask SQLAlchemy",
            logo: "sqlalchemy.png"
        },
        {
            name: "NumPy",
            logo: "numpy.png"
        },
        {
            name: "TensorFlow",
            logo: "tensorflow.png"
        },
    ];

    const nflDesktopImages: string[] = [];

    return (
        <Project name={"NFL Fantasy Finesser"}
            logo={"nfl-logo.png"}
            githubPath={"nfl"}
            url={""}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>Identify impactful players for your fantasy football team</p>
            </div>

            <div className="space-y-16">
                <Tools tools={nflTools} />

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

export default NFL;