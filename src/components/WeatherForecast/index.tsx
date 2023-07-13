import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

//styles
import 'swiper/css';
import 'swiper/css/navigation';

//components
import WeatherDay from '../WeatherDay';

const WeatherForecast: React.FC = () => {
    const swiperRef = useRef<SwiperType>();
    return (
        <div style={{ width: '100%' }}>
            <Swiper
                spaceBetween={32}
                slidesPerView={3}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {[...Array(10)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <WeatherDay active={swiperRef.current?.activeIndex === 0} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default WeatherForecast