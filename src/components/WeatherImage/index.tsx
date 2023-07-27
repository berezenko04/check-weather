type WeatherImageProps = {
    condition: string
};

const WeatherImage: React.FC<WeatherImageProps> = ({ condition }) => {
    let imageSrc = './WeatherImages/';

    switch (condition.toLowerCase()) {
        case 'clear-day':
            imageSrc += 'clear-day.webp'
            break;
        case 'clear-night':
            imageSrc += 'clear-night.webp'
            break;
        case 'cloudy':
            imageSrc += 'cloudy.webp'
            break;
        case 'fog':
            imageSrc += 'fog.webp'
            break;
        case 'hail':
            imageSrc += 'hail.webp'
            break;
        case 'partly-cloudy-day':
            imageSrc += 'partly-cloudy-day.webp'
            break;
        case 'partly-cloudy-night':
            imageSrc += 'partly-cloudy-night.webp'
            break;
        case 'rain-snow-showers-day':
            imageSrc += 'snow.webp'
            break;
        case 'rain-snow-showers-night':
            imageSrc += 'snow.webp'
            break;
        case 'rain-snow':
            imageSrc += 'snow.webp'
            break;
        case 'rain':
            imageSrc += 'rain.webp';
            break;
        case 'showers-day':
            imageSrc += 'rain.webp';
            break;
        case 'showers-night':
            imageSrc += 'rain.webp';
            break;
        case 'sleet':
            imageSrc += 'sleet.webp';
            break;
        case 'snow-showers-day':
            imageSrc += 'snow.webp';
            break;
        case 'snow-showers-night':
            imageSrc += 'snow.webp';
            break;
        case 'snow':
            imageSrc += 'snow.webp';
            break;
        case 'thunder-rain':
            imageSrc += 'thunder-rain.webp'
            break;
        case 'thunder-showers-day':
            imageSrc += 'thunder-rain.webp'
            break;
        case 'thunder-showers-night':
            imageSrc += 'thunder-rain.webp'
            break;
        case 'thunder':
            imageSrc += 'thunder.webp';
            break;
        case 'wind':
            imageSrc += 'wind.webp';
            break;
    }

    return <img
        src={imageSrc}
        alt=""
        style={{ objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    />;
};

export default WeatherImage;
