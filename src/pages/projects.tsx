import Link from 'next/link';
import { ProjectDetails } from '@/lib/types';

const projects: ProjectDetails[] = [
    {
        name: "Avatar",
        logo: "avatar-logo",
        path: "avatar"
    },
    {
        name: "Keyboard",
        logo: "keyboard-logo",
        path: "keyboard"
    },
    {
        name: "What Town Am I In?",
        logo: "town-logo",
        path: "what-town-am-i-in"
    },
    {
        name: "NFL Fantasy Finesser",
        logo: "nfl-logo",
        path: "nfl"
    },
    {
        name: "AUX",
        logo: "aux-logo",
        path: "aux"
    },
    {
        name: "Crypto",
        logo: "crypto-logo",
        path: "crypto"
    }
];

const Projects = () => {
    return (
        <div className="h-screen">

            <div className="h-full">

                {projects.map((project, i) => {

                    return (
                        <Link key={i} href={`/project/${project.path}`}>

                            <div className="flex flex-col justify-center items-center text-center p-24 space-y-12 hover:bg-zinc-900 cursor-pointer">
                                <img src={`/project-logos/${project.logo}.png`} height="250" width="250" />
                                <br />
                                <p style={{ fontSize: "36px" }}>{project.name}</p>
                            </div>
                        </Link>
                    );
                })}

            </div>

        </div>
    );
}

export default Projects;