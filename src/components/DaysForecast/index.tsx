import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/redux/store';

//styles
import 'swiper/css';

//components
import WeatherDay from '../WeatherDay';
import SwiperControls from '../SwiperControls';

//redux
import { weatherSelector } from '@/redux/weather/selectors';
import { setCurrentDay } from '@/redux/weather/slice';


const DaysForecast: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const dispatch = useAppDispatch();
    const swiperRef = useRef<SwiperType>();
    const { currentWeather } = useSelector(weatherSelector);


    const handleSlideClick = (index: number) => {
        setActiveIndex(index);
        swiperRef.current?.slideTo(index);
        dispatch(setCurrentDay(index));
    };

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.activeIndex);
        dispatch(setCurrentDay(swiper.activeIndex));
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
                {currentWeather?.days.map((day, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => handleSlideClick(index)}
                    >
                        <WeatherDay active={index === activeIndex} index={index} {...day} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default DaysForecast