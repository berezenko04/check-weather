import { Link } from '@mui/material'

//styles
import styles from './Header.module.scss'

//components
import ToggleButtons from '../ToggleButtons'
import SearchBar from '../SearchBar'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <Link
                        href='/'
                        variant='h5'
                        color='secondary'
                        underline='none'
                        textTransform='uppercase'
                    >
                        Weather
                    </Link>
                    <SearchBar />
                    <ToggleButtons />
                </div>
            </div>
        </header>
    )
}

export default Header