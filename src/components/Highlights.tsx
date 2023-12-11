import { ReactNode } from 'react';

interface IHighlightsProps {
    children: ReactNode,
}

const Highlights = (props: IHighlightsProps) => {

    return (
        <div className="space-y-4">
            <p style={{ fontSize: "24px" }}>Highlights</p>
            <div>{props.children}</div>
        </div>
    );

}

export default Highlights;