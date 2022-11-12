import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../components/logo';

const Error404 = () => {
    require('../style/error404.css');
    return (
        <HelmetProvider>
            <Helmet>
                <title>Magdi | 404</title>
            </Helmet>
            <Logo />
            <div className="error">
                <h1 className="error-code">404</h1>
                <h4 className="error-message">The page you are looking for cannot be found.</h4>
            </div>
        </HelmetProvider>
    );
};

export default Error404;
