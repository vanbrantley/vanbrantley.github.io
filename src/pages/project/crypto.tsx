import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Purpose from "../../components/Purpose";
import Highlights from "@/components/Highlights";
import Issues from "@/components/Issues";
import ToDo from "@/components/ToDo";
import Shortcomings from "@/components/Shortcomings";
import { Tool } from "@/lib/types";

const Crypto = () => {

    const cryptoTools: Tool[] = [];

    return (
        <Project name={"Crypto"}
            logo={"crypto-logo.png"}
            desktopImages={[]}
            mobileImages={[]}
            githubPath={""}
            url={""}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>This is a TBD project that involves blockchain/cryptocurrencies</p>
            </div>

            <div className="space-y-16">
                <Tools tools={cryptoTools}>
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

export default Crypto;