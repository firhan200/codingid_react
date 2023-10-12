import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material'

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

const myTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '200px'
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#790B0A"
        }
    },
    typography: {
        fontFamily: [
            "Young Serif"
        ]
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={myTheme}>
        <App />
    </ThemeProvider>,
)
