const LocalLink = (props) => {
    require('./index.css');
    const { to, name } = props;
    return (
        <div className="local-link">
            <a href={to} target="_blank" rel="noreferrer">
                {name}
            </a>
        </div>
    );
};

export default LocalLink;
