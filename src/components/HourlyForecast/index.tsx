import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';

//styles
import 'swiper/css';

//components
import WeatherHour from '../WeatherHour';
import SwiperControls from '../SwiperControls';

//redux
import { weatherSelector } from '@/redux/weather/selectors';


const HourlyForecast: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType>();
    const { currentWeather, currentDay } = useSelector(weatherSelector);

    const handleSlideClick = (index: number) => {
        setActiveIndex(index);
        swiperRef.current?.slideTo(index);
    };

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.activeIndex);
    }

    return (
        <div style={{ position: 'relative' }}>
            <SwiperControls swiperRef={swiperRef} />
            <Swiper
                spaceBetween={32}
                slidesPerView={4}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
                {currentWeather?.days[currentDay].hours.map((hour, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => handleSlideClick(index)}
                    >
                        <WeatherHour active={index === activeIndex} index={index} {...hour} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HourlyForecast