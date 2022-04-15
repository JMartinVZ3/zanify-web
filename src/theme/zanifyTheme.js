import { createTheme } from '@material-ui/core';

export const zanifyTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                }
            }
        },
    },
    palette: {
        primary: {
            main: '#1479FF',
            light: "#ffffff"
        },
        secondary: {
            main: '#0C3976'
        },
        neutral: {
            main: '#FFFFFF',
            contrastText: "#1479FF"
        },
        success: {
            main: '#FFFFFF',
            contrastText: "#1479FF"
        }
    },
    typography: {
        fontFamily: 'Helvetica',
        h1: {
            fontSize: 64,
            fontWeight: 600,
        },
        h2: {
            fontSize: 58,
            fontWeight: 600,
        },
        h3: {
            fontSize: 48,
            fontWeight: 600,
        },
        h4: {
            fontSize: 24,
            fontWeight: 600
        },
        h5: {
            fontSize: 20,
            fontWeight: 600
        },
        Button: {
            fontSize: 24,
            fontWeight: 500,
        }
    }
})