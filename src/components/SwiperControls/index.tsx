import { IconButton } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Swiper as SwiperType } from 'swiper';

//styles
import styles from './SwiperControls.module.scss'


type SwiperControlsProps = {
    swiperRef: React.MutableRefObject<SwiperType | undefined>
}


const SwiperControls: React.FC<SwiperControlsProps> = ({ swiperRef }) => {
    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }


    return (
        <>
            <IconButton
                onClick={handlePrevClick}
                className={styles.prev}
                size='large'
                disabled={!swiperRef.current || swiperRef.current?.isBeginning!}
            >
                <KeyboardArrowLeft color='secondary' />
            </IconButton>
            <IconButton
                onClick={handleNextClick}
                className={styles.next}
                size='large'
                disabled={!swiperRef.current || swiperRef.current?.isEnd!}
            >
                <KeyboardArrowRight color='secondary' />
            </IconButton>
        </>
    )
}

export default SwiperControls