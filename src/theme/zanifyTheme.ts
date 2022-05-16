import { createTheme } from '@material-ui/core';

export const zanifyTheme = createTheme({
    palette: {
        background: {
            default: "#4B5563"
          },
        primary: {
            main: '#1479FF',
            light: "#ffffff"
        },
        secondary: {
            main: '#0C3976'
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
        }
    }
})