import { Link } from '@mui/material'

//styles
import styles from './Navbar.module.scss'

//components
import ToggleButtons from '../ToggleButtons'
import SearchBar from '../SearchBar'

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.navbar__wrapper}>
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
        </nav>
    )
}

export default Navbar