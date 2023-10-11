import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material'

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import { ProductsProvider } from './hooks/useProducts';

const myTheme = createTheme({
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
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </ThemeProvider>,
)
