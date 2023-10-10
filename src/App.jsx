import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/login" Component={LoginPage} />
                <Route path="/register" Component={RegisterPage} />
            </Routes>
        </BrowserRouter>
    )
}