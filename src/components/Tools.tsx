import { Tool } from '@/lib/types';
import { ReactNode } from 'react';

interface IToolsProps {
    tools: Tool[],
}

const Tools = (props: IToolsProps) => {

    return (
        <div className="space-y-4">
            <p style={{ fontSize: "24px" }}>Tools Used</p>

            <div className="flex space-x-4 overflow-auto">
                {props.tools.map((tool, i) => {
                    const { name, logo } = tool;

                    return (
                        <img
                            key={i}
                            src={`/tool-logos/${logo}`}
                            alt={name}
                            title={name}
                            style={{ maxHeight: "100px" }}
                        />
                    );

                })
                }
            </div>
            {/* <div>{props.children}</div> */}
        </div>
    );

}

export default Tools;