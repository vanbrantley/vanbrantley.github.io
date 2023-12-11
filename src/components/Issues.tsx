import { ReactNode } from 'react';

interface IIssuesProps {
    children: ReactNode,
}

const Issues = (props: IIssuesProps) => {

    return (
        <div className="space-y-4">
            <p style={{ fontSize: "24px" }}>Issued Faced</p>
            <div>{props.children}</div>
        </div>
    );

}

export default Issues;