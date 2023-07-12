export type WeatherIconProps = {
    condition: string;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
    let imageSrc = '/WeatherIcons/';

    console.log(condition);

    switch (condition.toLowerCase()) {
        case 'clear':
            imageSrc += 'clear-sky.png';
            break;
        case 'clouds':
            imageSrc += 'sun-clouds.png';
            break;
        case 'thunder':
            imageSrc += '';
            break;
    }

    return <img src={imageSrc} alt={condition} style={{ width: 124, height: 124 }} />;
};

export default WeatherIcon;
