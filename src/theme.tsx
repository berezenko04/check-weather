import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1c5288',
        },
        secondary: {
            light: 'rgba(255, 255, 255, 0.70)',
            main: '#FFFFFF'
        }
    },
    components: {
        MuiToggleButton: {
            styleOverrides: {
                root: ({ }) => ({
                    color: theme.palette.secondary.main,
                    width: '40px',
                    height: '40px',
                    fontSize: '14px !important',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    lineHeight: 'inherit',
                    '&.Mui-selected': {
                        color: theme.palette.secondary.main,
                        backgroundColor: 'rgba(255, 255, 255, 0.08)'
                    }
                }),
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ }) => ({
                    color: theme.palette.secondary.main,
                }),
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: ({ }) => ({
                    color: theme.palette.secondary.main,
                }),
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: ({ }) => ({
                    '.css-113ntv0-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator': {
                        color: theme.palette.secondary.main,
                    },
                }),
            }
        },
        MuiTab: {
            styleOverrides: {
                root: ({ }) => ({
                    color: theme.palette.secondary.light
                }),
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: ({ }) => ({
                    '.MuiTabs-indicator': {
                        backgroundColor: theme.palette.secondary.main
                    }
                }),
            }
        }
    }
})