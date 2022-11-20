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
                    <div className="slide-animate home-link">
                        <Link to="about/">
                            <div
                                className="about content white"
                                onMouseEnter={() => setCanShow(false)}
                            />
                        </Link>
                        <div className="about-line" />
                    </div>
                    <div className="slide-animate home-link delay15">
                        <Link to="projects/">
                            <div
                                className="projects content red"
                                onMouseEnter={() => setCanShow(false)}
                            />
                        </Link>
                        <div className="projects-line" />
                    </div>
                    <div className="slide-animate home-link delay30">
                        <Link to="contact/">
                            <div
                                className="contact content red"
                                onMouseEnter={() => setCanShow(false)}
                            />
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
