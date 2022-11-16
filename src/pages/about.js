import { Helmet, HelmetProvider } from 'react-helmet-async';
import tools from '../assets/data/tools';
import competitions from '../assets/data/competitions';
import Logo from '../components/logo';
import Lines from '../components/lines';
import LocalLink from '../components/localLink';
import LocalImage from '../components/localImage';
import ExternalLink from '../components/externalLink';
import Hero from '../components/hero';

const About = () => {
    require('../style/content.css');
    return (
        <HelmetProvider>
            <Helmet>
                <title>Magdi | About</title>
            </Helmet>
            <Logo />
            <Hero title="I Build & Deploy Backend Applications" />
            <Lines />
            <div className="info margin-bottom-extra slide-animate">
                <div className="content-container">
                    <h4 className="content-title">About</h4>
                    <p className="content-description">
                        Hi, I’m Mohamed Magdi. I’m a junior Backend developer with a passion for
                        learning new programming languages and developing innovative applications.
                        Focusing on Node.js.
                    </p>

                    <p className="content-description">
                        Before deciding to be a Backend developer, I was interested in Reverse
                        Engineering and participated in a couple of CTFs. I got a lot of skills by
                        doing it, like reading code that is not mine and understanding it, debugging
                        code, and seeing potential bugs by looking at the source code.
                    </p>

                    <p className="content-description">
                        Currently, I’m interested in some technologies and tools like
                        [Golang, gRCP, GraphQL, Bun, Astro, Prisma, ...]
                    </p>
                    <LocalLink
                        to={require('../assets/documents/Mohamed Magdi Mohamed.pdf')}
                        name="My CV"
                    />
                    <h4 className="content-title">Skills</h4>
                    <LocalImage images={tools} />
                    <h4 className="content-title">Competitions</h4>
                    <ExternalLink links={competitions} />
                </div>
            </div>
        </HelmetProvider>
    );
};

export default About;
