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
            main: '#1479FF'
        },
        secondary: {
            main: '#0C3976'
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
            fontWeight: 500,
        },
        h3: {
            fontSize: 48,
            fontWeight: 500,
        },
        h4: {
            fontSize: 24,
            fontWeight: 600
        },
        h5: {
            fontSize: 24,
            fontWeight: 400
        },
        Button: {
            fontSize: 24,
            fontWeight: 500,
        }
    }
})