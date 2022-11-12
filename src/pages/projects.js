import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import projects from '../assets/data/projects';
import Logo from '../components/logo';

const Projects = () => {
    require('../style/projects.css');
    return (
        <HelmetProvider>
            <Helmet>
                <title>Magdi | Projects</title>
            </Helmet>
            <Logo />
            <div className="projects-container">
                {projects && projects.length > 0
                    ? projects.map((project) => (
                          <Link to={`./${project.slug}`} key={project.slug}>
                              <div className="card slide-animate">
                                  <div className="project-title">{project.title}</div>
                                  <div className="project-description">
                                      {project.shortDescription}
                                  </div>
                              </div>
                          </Link>
                      ))
                    : undefined}
            </div>
        </HelmetProvider>
    );
};

export default Projects;
