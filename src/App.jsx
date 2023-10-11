import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import TodosPage from "./pages/TodosPage";

export default function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/" Component={ProductsPage}/>
                    <Route path="/login" Component={LoginPage} />
                    <Route path="/register" Component={RegisterPage} />
                    <Route path="/todos" Component={TodosPage} />
                    <Route path="/products/:productId" Component={ProductPage} />
                </Routes>
            </Header>
        </BrowserRouter>
    )
}