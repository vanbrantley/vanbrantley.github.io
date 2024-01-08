import { ReactNode } from 'react';
import Head from 'next/head';

interface IProjectProps {
    children: ReactNode,
    name: string,
    logo: string,
    githubPath: string,
    url?: string,
}

const Project = (props: IProjectProps) => {

    return (
        <div className="flex flex-col h-full w-screen p-16">

            <Head>
                <title>{props.name}</title>
            </Head>

            <div className="flex flex-col items-center justify-center space-y-4">

                <div className="flex items-center justify-center">
                    <img src={`/project-logos/${props.logo}`} alt={`${props.name} Logo`} style={{ maxWidth: '200px' }} />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-4">
                    <p className="text-center sm:text-left" style={{ fontSize: "28px" }}>{props.name}</p>
                    <a href={`https://github.com/vanbrantley/${props.githubPath}`} target="_blank" rel="noopener noreferrer" className="sm:!mt-0">
                        <img src="/github-logo.png" alt="GitHub Logo" style={{ borderRadius: "50%", height: "30px", width: "30px" }} className="cursor-pointer" />
                    </a>
                </div>

                <main>{props.children}</main>

            </div>

        </div>
    );
};

export default Project;
