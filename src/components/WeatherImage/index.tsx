type WeatherImageProps = {
    condition:
    | 'clear sky'
    | 'few clouds'
    | 'scattered clouds'
    | 'broken clouds'
    | 'shower rain'
    | 'rain'
    | 'thunderstorm'
    | 'snow'
    | 'mist';
};

const WeatherImage: React.FC<WeatherImageProps> = ({ condition }) => {
    let imageSrc = '../../assets/img/';

    switch (condition) {
        case 'clear sky':
            imageSrc += 'clear.jpg';
            break;
        case 'few clouds':
            imageSrc += 'few-clouds.jpg';
            break;
        case 'scattered clouds':
            imageSrc += 'scattered-clouds.jpg';
            break;
        case 'broken clouds':
            imageSrc += 'broken-clouds.jpg';
            break;
        case 'shower rain':
            imageSrc += 'shower-rain.jpg';
            break;
        case 'rain':
            imageSrc += 'rain.jpg';
            break;
        case 'thunderstorm':
            imageSrc += 'thunderstorm.jpg';
            break;
        case 'snow':
            imageSrc += 'snow.jpg';
            break;
        case 'mist':
            imageSrc += 'mist.jpg';
            break;
        default:
            imageSrc += 'default.jpg';
            break;
    }

    return <img src={imageSrc} alt="" />;
};

export default WeatherImage;
