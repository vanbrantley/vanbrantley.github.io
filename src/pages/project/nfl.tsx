import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Highlights from "@/components/Highlights";
import NextSteps from "@/components/NextSteps";
import Background from "@/components/Background";
import { Tool } from "@/lib/types";
import ImageCarousel from "@/components/ImageCarousel";

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

    const nflDesktopImages: string[] = [
        "/nfl-images/Filtered-Logs.png",
        "/nfl-images/Team-Page.png",
        "/nfl-images/Player-Logs.png"
    ];

    return (
        <Project name={"NFL Fantasy Finesser"}
            logo={"nfl-logo.png"}
            githubPath={"nfl"}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>Identify impactful players for your fantasy football team</p>
            </div>

            <div className="space-y-8 pt-8">
                <Tools tools={nflTools} />

                <div>
                    <p>As a longtime player and enjoyer of fantasy football, I've long imagined creating a tool to serve as a trusted analyst for fantasy managers to run successful teams.</p>
                    <p>Fantasy Finesser uses NFL box score game data to help you identify the players worth targeting for your roster.</p>
                </div>

                {nflDesktopImages.length != 0 && (
                    <div className="flex items-center justify-center">
                        <ImageCarousel images={nflDesktopImages} />
                    </div>
                )}

                <Highlights>
                    <div>
                        <ul>
                            <li>
                                <p>- Focused on backend development while another developer took charge of the frontend.</p>
                            </li>
                            <li>
                                <p>- Created a database schema that models the NFL by storing information for players, teams, games, and game logs.</p>
                            </li>
                            <li>
                                <p>- Created SQL scripts to create and delete the database.</p>
                            </li>
                            <li>
                                <p>- Created Python scripts to populate and update the database with data scraped from the web.</p>
                            </li>
                            <li>
                                <p>- Created a REST API with OpenAPI specification documentation for my project partner to reference.</p>
                            </li>
                            <li>
                                <p>- Wrote markdown documentation detailing how to set up and run the application locally.</p>
                            </li>
                            <li>
                                <p>- Used statistics to generate interesting insights from the players' game log data.</p>
                            </li>
                        </ul>
                    </div>
                </Highlights>

                <Background>
                    <div>
                        <p>No matter how hard I try to resist it, every season I become extremely invested in my role as the manager of my fantasy football team.</p>
                        <p>Every week I’m watching the games, scouring the waivers for potential new additions, and scheming up hypothetical trade propositions. </p>
                        <p>Most of my time in the ESPN Fantasy Football app is spent viewing players' game logs and making sense of the numbers in the columns of the table on the screen.</p>
                        <p>While I’ve gotten rather speedy at navigating the inner workings of the app and mentally analyzing players’ game logs, I knew that my insights - and thus my team’s performance as a result - would likely benefit from making a tool that analyzes the data using statistical methods.</p>
                        <p>Shortly after first thinking about making the project, I ran into a friend from high school who also studied computer science, is into fantasy football, and was looking to work on a programming project. He was looking to gain some frontend development experience, and I happened to be seeking an opportunity to focus more on backend development, so it was a perfect match.</p>
                        <p></p>
                        <p></p>
                    </div>
                </Background>

                <NextSteps>
                    <div>
                        <p>- Move the project from our machines up to the cloud. Host our application on AWS so that it can be used by anyone who so wishes to.</p>
                        <p>- Incorporate machine learning to make more valuable insights. Adding game log data from previous years can help improve the models effectiveness.</p>
                    </div>
                </NextSteps>
            </div>

        </Project>
    );

}

export default NFL;