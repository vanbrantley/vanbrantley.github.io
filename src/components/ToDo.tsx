import { ReactNode } from 'react';

interface IToDoProps {
    children: ReactNode,
}

const ToDo = (props: IToDoProps) => {

    return (
        <div className="space-y-4">
            <p style={{ fontSize: "24px" }}>To Do</p>
            <div>{props.children}</div>
        </div>
    );

}

export default ToDo;