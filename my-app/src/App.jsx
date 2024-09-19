import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Login from "./screens/backoffice/login";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./screens/frontoffice/home";
import Personnalisation from "./screens/frontoffice/Personnalisation"; // Importation de la nouvelle page
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Login />} />
                <Route path="/personnalisation" element={<Personnalisation />} /> {/* Ajout de la route pour la personnalisation */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
