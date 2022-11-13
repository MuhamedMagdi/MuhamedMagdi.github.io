import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAnalytics } from 'use-analytics';

const App = () => {
    require('./App.css');
    const [canShow, setCanShow] = useState(true);
    const location = useLocation();
    const analytics = useAnalytics();
    useEffect(() => {
        analytics.page();
    }, [location]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Magdi</title>
            </Helmet>
            <div className="App">
                <h1 className="home-font">
                    <div className="slide-animate home-link" onMouseEnter={() => setCanShow(false)}>
                        <Link to="about/">
                            <div className="about content white" />
                        </Link>
                        <div className="about-line" />
                    </div>
                    <div
                        className="slide-animate home-link delay15"
                        onMouseEnter={() => setCanShow(false)}
                    >
                        <Link to="projects/">
                            <div className="projects content red" />
                        </Link>
                        <div className="projects-line" />
                    </div>
                    <div
                        className="slide-animate home-link delay30"
                        onMouseEnter={() => setCanShow(false)}
                    >
                        <Link to="contact/">
                            <div className="contact content red" />
                        </Link>
                        <div className="contact-line" />
                    </div>
                </h1>
            </div>
            {canShow && (
                <div className="notify">
                    <p className="notify-text">Click the text</p>
                </div>
            )}
        </HelmetProvider>
    );
};

export default App;
