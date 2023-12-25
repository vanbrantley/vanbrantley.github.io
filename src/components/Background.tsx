import { ReactNode } from 'react';

interface IBackgroundProps {
    children: ReactNode,
}

const Background = (props: IBackgroundProps) => {

    return (
        <div className="space-y-4">
            <p style={{ fontSize: "24px" }}>Background</p>
            <div>{props.children}</div>
        </div>
    );

}

export default Background;