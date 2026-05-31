import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

const categoryLabel: Record<Project['category'], string> = {
  web: 'Web',
  mobile: 'Mobile',
  game: 'Game',
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card-inner">
        <div className="project-card-top">
          <span className="project-category">{categoryLabel[project.category]}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-card-bottom">
          <div className="project-tech">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          <span className="project-link">View on GitHub →</span>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
