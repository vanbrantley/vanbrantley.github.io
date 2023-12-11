import { ReactNode } from 'react';
import Head from 'next/head';
import ImageCarousel from './ImageCarousel';

interface IProjectProps {
    children: ReactNode,
    name: string,
    logo: string,
    desktopImages: string[],
    mobileImages: string[],
    githubPath: string,
    url: string,
}

const Project = (props: IProjectProps) => {

    return (
        <div>

            <Head>
                <title>{props.name}</title>
            </Head>

            <div className="flex flex-col items-center justify-center space-y-8">

                <div className="flex items-center justify-center pt-16">
                    <img src={`/project-logos/${props.logo}`} alt={`${props.name} Logo`} style={{ maxWidth: '200px' }} />
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <p style={{ fontSize: "28px" }}>{props.name}</p>
                    <a href={`https://github.com/vanbrantley/${props.githubPath}`} target="_blank" rel="noopener noreferrer">
                        <img src="/github-logo.png" alt="GitHub Logo" style={{ borderRadius: "50%", height: "30px", width: "30px" }} className="cursor-pointer" />
                    </a>
                </div>
            </div>

            {/* {props.desktopImages.length != 0 && (
                <div className="flex items-center justify-center">
                    <ImageCarousel images={props.desktopImages} />
                </div>
            )}

            {props.mobileImages.length != 0 && (
                <div className="flex items-center justify-center">
                    <ImageCarousel images={props.mobileImages} />
                </div>
            )} */}

            <main>{props.children}</main>
        </div>
    );
};

export default Project;
