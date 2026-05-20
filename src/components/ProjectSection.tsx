import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function ProjectSection() {
  return (
    <section id="projects-section" className="projects">
      <div className="projects-content">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
