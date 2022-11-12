import { Link } from 'react-router-dom';

const Logo = () => {
    require('./index.css');
    return (
        <Link to="../">
            <div className="logo">Magdi.</div>
        </Link>
    );
};

export default Logo;
