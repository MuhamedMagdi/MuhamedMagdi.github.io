const ExternalLink = (props) => {
    require('./index.css');
    const { links } = props;
    return (
        <div className="external-links">
            {links.map((link) => (
                <div key={link.title} className="link-slide">
                    <div className="link-title">
                        <a href={link.ref} target="_blank" rel="noreferrer">
                            {link.title}
                        </a>
                    </div>
                    {link.description && <div className="link-description">{link.description}</div>}
                </div>
            ))}
        </div>
    );
};

export default ExternalLink;
