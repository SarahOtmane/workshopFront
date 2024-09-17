import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Login from "./screens/backoffice/login";
import Header from "./components/header";
import Home from "./screens/frontoffice/home";

export default function App(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}