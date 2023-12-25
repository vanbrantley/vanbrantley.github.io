import { Tool } from '@/lib/types';
import { useEffect, useState } from 'react';

interface IToolsProps {
    tools: Tool[],
}

const Tools = (props: IToolsProps) => {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Update the state based on the window width
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600); // Adjust the threshold as needed
        };

        // Initial check on mount
        handleResize();

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                            style={{ maxHeight: isMobile ? "50px" : "100px", width: "auto" }}
                        />
                    );

                })
                }
            </div>
        </div>
    );

}

export default Tools;