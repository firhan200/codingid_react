import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import DetailProductPage from "./pages/DetailProductPage";

export default function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/" Component={LandingPage} />
                    <Route path="/login" Component={LoginPage} />
                    <Route path="/register" Component={RegisterPage} />
                    <Route path="/product_detail/:productId" Component={DetailProductPage} />
                </Routes>
            </Header>
            <Footer />
        </BrowserRouter>
    )
}