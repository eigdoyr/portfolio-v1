import { memo } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../types";

interface ProjectThumbProps {
  project: Project;
}

const ProjectThumb = memo(({ project }: ProjectThumbProps) => (
  <Link to={`/work/${project.slug}`} className="more-card">
    <div className="more-img-wrapper">
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="more-info">
      <span>{project.id}</span>
      <span>{project.title}</span>
    </div>
  </Link>
));

ProjectThumb.displayName = "ProjectThumb";

export default ProjectThumb;
