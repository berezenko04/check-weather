import { Padding } from "@mui/icons-material";
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
                    borderRadius: '4px',
                    border: 'none',
                    fontSize: '14px',
                    textTransform: 'none',
                    fontWeight: 400,
                    boxShadow: 'none',
                    backgroundColor: 'rgba(0, 0, 0, 0.06)',
                    color: '#ffffff !important',
                    '& .MuiInputBase-input': {
                        color: '#ffffff !important',
                        backgroundColor: 'transparent',
                        padding: '15px'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none'
                    },
                    '& .css-1kun5ge-MuiInputBase-root-MuiOutlinedInput-root': {
                        padding: 0
                    },
                    '& .MuiInputBase-formControl': {
                        overflow: 'hidden !important'
                    },
                    '& .MuiFormLabel-root': {
                        color: '#ffffff',
                        background: 'transparent',
                        '&.Mui-focused': {
                            color: '#ffffff !important'
                        }
                    },
                    '& .MuiSvgIcon-root': {
                        fill: '#ffffff'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#a0a0a0 !important'
                    }
                })
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
                paper: {
                    backgroundColor: '#1c5288',
                    borderRadius: 0
                },
                root: ({ }) => ({
                    '& .MuiAutocomplete-option': {
                        color: 'red'
                    }
                }),

            }
        },
        MuiTab: {
            styleOverrides: {
                root: ({ }) => ({
                    color: theme.palette.secondary.light,
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
        },
        MuiLink: {
            styleOverrides: {
                root: ({ }) => ({
                    color: theme.palette.secondary.main,
                    textDecoration: 'none',
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
                }),
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: ({ }) => ({
                    padding: '0 !important',
                }),
            }
        },

        MuiList: {
            styleOverrides: {
                root: ({ }) => ({
                    padding: '0 !important',
                }),
            }
        }
    }
})