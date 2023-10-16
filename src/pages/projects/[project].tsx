
import { useRouter } from 'next/router';

const ProjectDetails = () => {
    const router = useRouter();
    const { project } = router.query;

    // Fetch project details based on the project-name or load it from a data source

    return (
        <div>
            <h1>Project: {project}</h1>
            {/* Render project details here */}
        </div>
    );
};

export default ProjectDetails;
