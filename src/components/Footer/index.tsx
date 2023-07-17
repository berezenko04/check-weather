import { Grid, Link, List, ListItem, Stack, Typography } from '@mui/material'

//styles
import styles from './Footer.module.scss'

//icons
import { ReactComponent as FacebookIcon } from '@/assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '@/assets/icons/instagram.svg'
import { ReactComponent as TwitterIcon } from '@/assets/icons/twitter.svg'
import { ReactComponent as LinkedinIcon } from '@/assets/icons/linkedin.svg'
import { ReactComponent as TiktokIcon } from '@/assets/icons/tiktok.svg'
import { ReactComponent as TelegramIcon } from '@/assets/icons/telegram.svg'

const Footer: React.FC = () => {
    const socialIcons = [
        <FacebookIcon />,
        <InstagramIcon />,
        <TwitterIcon />,
        <LinkedinIcon />,
        <TiktokIcon />,
        <TelegramIcon />
    ];

    const products = [
        'For Business',
        'For Partners',
        'For Advertising',
        'Weather APIs'
    ];

    const contacts = [
        { title: 'romanberezenko8@gmail.com', path: 'mailto:romanberezenko8@gmail.com' },
        { title: 'Hadyach city, Hetmanska street 62', path: 'https://goo.gl/maps/hAm33nKuQutQpJSG8' },
        { title: '+380662284162', path: 'tel:+380662284162' }
    ]

    const info = [
        'Terms of Use',
        'Terms of Sale',
        'Privacy & Cookie Policy',
        'Cookie Settings'
    ]

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__main}>
                    <div className={styles.footer__main__wrapper}>
                        <Stack direction='column' spacing='24px'>
                            <Typography variant='h5' textTransform='uppercase'>
                                Weather
                            </Typography>
                            <Stack direction='row' spacing='12px'>
                                {socialIcons.map((icon, index) => (
                                    <Link
                                        href=''
                                        key={index}
                                        rel='noopener noreferrer'
                                        target='_blank'
                                    >
                                        {icon}
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack direction='column' spacing='24px'>
                            <Typography variant='h5' textTransform='uppercase'>
                                Products & Services
                            </Typography>
                            <List sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {products.map((item, index) => (
                                    <ListItem key={index}>
                                        <Link href='#'>
                                            {item}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>
                        <Stack direction='column' spacing='24px'>
                            <Typography variant='h5' textTransform='uppercase'>
                                Apps & Downloads
                            </Typography>
                            <List sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <ListItem>
                                    <Link href='#'>
                                        IPhone App
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href='#'>
                                        Android App
                                    </Link>
                                </ListItem>
                            </List>
                        </Stack>
                        <Stack direction='column' spacing='24px'>
                            <Typography variant='h5' textTransform='uppercase'>
                                Contacts
                            </Typography>
                            <List sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {contacts.map((item, index) => (
                                    <ListItem key={index}>
                                        <Link href={item.path} target='_blank' rel='noopener noreferrer'>
                                            {item.title}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Stack>
                    </div>
                </div>
            </div>
            <div className={styles.footer__info}>
                <div className="container">
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                        justifyContent='space-between'
                        gap='32px'
                    >
                        <Typography>
                            © 2023 Weather, All Rights Reserved
                        </Typography>
                        <List
                            sx={{
                                display: 'flex',
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row'
                                },
                                alignItems: 'center',
                                gap: '24px',
                            }}
                        >
                            {info.map((item, index) => (
                                <ListItem key={index}>
                                    <Link href='#' noWrap>
                                        {item}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                </div>
            </div>
        </footer>
    )
}

export default Footer