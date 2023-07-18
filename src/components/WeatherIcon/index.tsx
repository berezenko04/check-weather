export type WeatherIconProps = {
    condition: string;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
    let imageSrc = '/WeatherIcons/';

    switch (condition.toLowerCase()) {
        case 'clear-day':
            imageSrc += 'clear-day.png'
            break;
        case 'clear-night':
            imageSrc += 'clear-night.png'
            break;
        case 'cloudy':
            imageSrc += 'cloudy.png'
            break;
        case 'fog':
            imageSrc += 'fog.png'
            break;
        case 'hail':
            imageSrc += 'hail.png'
            break;
        case 'partly-cloudy-day':
            imageSrc += 'partly-cloudy-day.png'
            break;
        case 'partly-cloudy-night':
            imageSrc += 'partly-cloudy-night.png'
            break;
        case 'rain-snow-showers-day':
            imageSrc += 'rain-snow-showers-day.png'
            break;
        case 'rain-snow-showers-night':
            imageSrc += 'rain-snow-showers-night.png'
            break;
        case 'rain-snow':
            imageSrc += 'rain-snow.png'
            break;
        case 'rain':
            imageSrc += 'rain.png';
            break;
        case 'showers-day':
            imageSrc += 'showers-day.png';
            break;
        case 'showers-night':
            imageSrc += 'showers-night.png';
            break;
        case 'sleet':
            imageSrc += 'sleet.png';
            break;
        case 'snow-showers-day':
            imageSrc += 'snow-showers-day.png';
            break;
        case 'snow-showers-night':
            imageSrc += 'snow-showers-night.png';
            break;
        case 'snow':
            imageSrc += 'snow.png';
            break;
        case 'thunder-rain':
            imageSrc += 'thunder-rain.png'
            break;
        case 'thunder-showers-day':
            imageSrc += 'thunder-showers-day.png'
            break;
        case 'thunder-showers-night':
            imageSrc += 'thunder-showers-night.png'
            break;
        case 'thunder':
            imageSrc += 'thunder.png';
            break;
        case 'wind':
            imageSrc += 'wind.png';
            break;
    }

    return <img src={imageSrc} alt={condition} style={{ width: 64, height: 64, objectFit: 'cover', userSelect: 'none' }} />;
};

export default WeatherIcon;
