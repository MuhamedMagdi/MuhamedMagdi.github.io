import { useParams, Navigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import projects from '../assets/data/projects';
import Logo from '../components/logo';
import Lines from '../components/lines';
import LocalImage from '../components/localImage';
import ExternalLink from '../components/externalLink';
import Hero from '../components/hero';

const ProjectID = () => {
    require('../style/content.css');
    const { slug } = useParams();
    const project = projects.find((el) => el.slug === slug);
    if (!project) {
        return <Navigate to="/404" replace />;
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>Magdi | {project.title}</title>
            </Helmet>
            <Logo />
            <Hero title={project.title} />
            <Lines />
            <div className="info margin-bottom-extra slide-animate">
                <div className="content-container">
                    <h4 className="content-title">Description</h4>
                    <p className="content-description">{project.description}</p>
                    <h4 className="content-title">Tools</h4>
                    <LocalImage images={project.tools} />
                    <h4 className="content-title">Links</h4>
                    <ExternalLink links={project.links} />
                </div>
            </div>
        </HelmetProvider>
    );
};

export default ProjectID;
