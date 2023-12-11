import { ReactNode } from 'react';

interface IPurposeProps {
    children: ReactNode,
}

const Purpose = (props: IPurposeProps) => {

    return (
        <div className="space-y-4">
            <p style={{ fontSize: "24px" }}>Purpose</p>
            <div>{props.children}</div>
        </div>
    );

}

export default Purpose;