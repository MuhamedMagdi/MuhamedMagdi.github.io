const LocalImage = (props) => {
    require('./index.css');
    const { images } = props;
    return (
        <div className="images">
            {images.map((image) => (
                <img
                    key={image.title}
                    className="image"
                    src={require(`../../assets/images/${image.name}.jpg`)}
                    alt={image.title}
                    title={image.title}
                />
            ))}
        </div>
    );
};

export default LocalImage;
