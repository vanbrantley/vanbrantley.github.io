import Project from "../../components/Project";
import Tools from "@/components/Tools";
import Highlights from "@/components/Highlights";
import NextSteps from "@/components/NextSteps";
import { Tool } from "@/lib/types";

const Crypto = () => {

    const cryptoTools: Tool[] = [];

    return (
        <Project name={"Crypto"}
            logo={"crypto-logo.png"}
            githubPath={""}
            url={""}
        >

            {/* Add specific content for the project */}
            <div className="flex items-center justify-center">
                <p>This is a TBD project that involves blockchain/cryptocurrencies</p>
            </div>

            <div className="space-y-8 pt-8">
                <Tools tools={cryptoTools} />

                <Highlights>
                    <div></div>
                </Highlights>

                <NextSteps>
                    <div></div>
                </NextSteps>
            </div>

        </Project>
    );

}

export default Crypto;