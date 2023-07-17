import { IconButton } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Swiper as SwiperType } from 'swiper';

//styles
import styles from './SwiperControls.module.scss'


type SwiperControlsProps = {
    swiperRef: React.MutableRefObject<SwiperType | undefined>
}


const SwiperControls: React.FC<SwiperControlsProps> = ({ swiperRef }) => {
    return (
        <>
            <IconButton
                onClick={() => swiperRef.current?.slidePrev()}
                className={styles.prev}
                size='large'
                disabled={swiperRef.current?.isBeginning!}
            >
                <KeyboardArrowLeft color='secondary' />
            </IconButton>
            <IconButton
                onClick={() => swiperRef.current?.slideNext()}
                className={styles.next}
                size='large'
                disabled={swiperRef.current?.isEnd!}
            >
                <KeyboardArrowRight color='secondary' />
            </IconButton>
        </>
    )
}

export default SwiperControls