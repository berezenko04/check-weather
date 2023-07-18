type WeatherImageProps = {
    condition: string
};

const WeatherImage: React.FC<WeatherImageProps> = ({ condition }) => {
    let imageSrc = '/WeatherImages/';

    switch (condition.toLowerCase()) {
        case 'rain':
            imageSrc += 'rain.jpg';
            break;
        case 'cloudy':
            imageSrc += 'cloudy.jpg'
            break;
        // case 'hail':
        //     imageSrc += 'hail.png'
        //     break;
        // case 'fog':
        //     imageSrc += 'fog.png'
        //     break;
        case 'partly-cloudy-day':
            imageSrc += 'partly-cloudy-day.jpg'
            break;
        case 'partly-cloudy-night':
            imageSrc += 'partly-cloudy-night.jpg'
            break;
        case 'clear-day':
            imageSrc += 'clear-day.jpg'
            break;
        case 'clear-night':
            imageSrc += 'clear-night.jpg'
            break;
    }

    return <img
        src={imageSrc}
        alt=""
        style={{ objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    />;
};

export default WeatherImage;
