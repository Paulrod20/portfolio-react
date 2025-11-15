import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
    return (
        <section id="project-section" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
