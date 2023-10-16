import Link from 'next/link';

type ProjectDetails = {
    name: string,
    logo: string,
    path: string
}

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
        name: "NFL",
        logo: "nfl-logo",
        path: "nfl"
    },
    {
        name: "NHL",
        logo: "nhl-logo",
        path: "nhl"
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
        <div className="h-screen bg-yellow-600">

            <p>Project page</p>

            <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">

                {projects.map((project, i) => {

                    return (

                        <div className="flex justify-center items-center">
                            <Link href={`/projects/${project.path}`}>
                                {project.name}

                                <img src={`/logos/${project.logo}.png`} height="150" width="150" />

                            </Link>

                        </div>

                    );
                })}

            </div>

        </div>
    );
}

export default Projects;