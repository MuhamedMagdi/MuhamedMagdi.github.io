const Hero = (props) => {
    require('./index.css');
    const { title } = props;
    return (
        <div className="info margin-top slide-animate">
            <div className="hero">
                <h2 className="hero-title">{title}</h2>
            </div>
        </div>
    );
};

export default Hero;
