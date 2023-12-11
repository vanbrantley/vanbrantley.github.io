import { ReactNode } from 'react';

interface IShortcomingsProps {
    children: ReactNode,
}

const Shortcomings = (props: IShortcomingsProps) => {

    return (
        <div className="space-y-4">
            <p style={{ fontSize: "24px" }}>Shortcomings</p>
            <div>{props.children}</div>
        </div>
    );

}

export default Shortcomings;