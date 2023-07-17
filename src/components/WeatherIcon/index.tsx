export type WeatherIconProps = {
    condition: string;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
    let imageSrc = '/WeatherIcons/';

    switch (condition.toLowerCase()) {
        case 'rain':
            imageSrc += 'rain.png';
            break;
        case 'cloudy':
            imageSrc += 'cloudy.png'
            break;
        case 'hail':
            imageSrc += 'hail.png'
            break;
        case 'fog':
            imageSrc += 'fog.png'
            break;
        case 'partly-cloudy-day':
            imageSrc += 'partly-cloudy-day.png'
            break;
        case 'partly-cloudy-night':
            imageSrc += 'partly-cloudy-night.png'
            break;
        case 'clear-day':
            imageSrc += 'clear-day.png'
            break;
        case 'clear-night':
            imageSrc += 'clear-night.png'
            break;
    }

    return <img src={imageSrc} alt={condition} style={{ width: 64, height: 64, objectFit: 'cover', userSelect: 'none' }} />;
};

export default WeatherIcon;
