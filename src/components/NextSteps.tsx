import { ReactNode } from 'react';

interface IToDoProps {
    children: ReactNode,
}

const NextSteps = (props: IToDoProps) => {

    return (
        <div className="space-y-4">
            <p style={{ fontSize: "24px" }}>Next Steps</p>
            <div>{props.children}</div>
        </div>
    );

}

export default NextSteps;