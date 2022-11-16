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
                        Feel free to reach out through any platforms bellow:
                    </p>
                    <ExternalLink links={contact} />
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Contact;
