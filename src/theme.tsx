import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1c5288'
        },
        secondary: {
            main: '#FFFFFF'
        }
    },
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: ({ }) => ({
                    color: '#FFFFFF',
                    width: '40px',
                    height: '40px',
                    fontSize: '14px !important',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    lineHeight: 'inherit',
                    '&.Mui-selected': {
                        color: '#FFFFFF',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)'
                    }
                }),
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ }) => ({
                    color: '#FFFFFF',
                }),
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: ({ }) => ({

                }),
            }
        }
    }
})