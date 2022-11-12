import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../components/hero';
import Lines from '../components/lines';
import ExternalLink from '../components/externalLink';
import Logo from '../components/logo';
import contact from '../assets/data/contact';

const Contact = () => {
    require('../style/content.css');
    return (
        <HelmetProvider>
            <Helmet>
                <title>Magdi | Contact</title>
            </Helmet>
            <Logo />
            <Hero title="Let's create something great together!" />
            <Lines />
            <div className="info margin-bottom-extra slide-animate">
                <div className="content-container">
                    <h4 className="content-title">Contact</h4>
                    <p className="content-description">
                        I’m seeking out opportunities to collaborate with companies / agencies /
                        individuals, not just work for them. I want to bring my collective design
                        experience to the table where we can work together to solve real
                        business-problems in a way that optimizes all of our respective experience
                        and knowledge.
                    </p>

                    <p className="content-description">
                        Feel free to reach out through any platforms bellow:
                    </p>
                    <ExternalLink links={contact} />
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Contact;
