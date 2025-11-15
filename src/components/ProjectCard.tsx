import {FaCode, FaMobileAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

function ProjectCard ({ project }: ProjectCardProps) {
    return (
        <a href={project.githubUrl} className='project-card' target="_blank" rel='noopener noreferrer'>
            <div className="project-image">
                {project.icon === 'mobile' ? <FaMobileAlt className="placeholder" /> : <FaCode className="placeholder" />}
            </div>

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className='project-description'>{project.description}</p>

                <div className="project tech">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>

                <div className="project-links">
                    <span className="project-link">
                        <FaGithub /> View on GitHub
                    </span>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;