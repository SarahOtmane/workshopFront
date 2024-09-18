import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Login from "./screens/backoffice/login";
import Header from "./components/header";
import Home from "./screens/frontoffice/home";
import Panel from "./screens/backoffice/panel";
import AddAccessory from "./screens/backoffice/addAccessory";
import AddConsole from "./screens/backoffice/addConsole";

export default function App(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Login />} />
                <Route path="/admin/panel" element={<Panel />} />
                <Route path="/admin/add-accessory" element={<AddAccessory />} />
                <Route path="/admin/add-console" element={<AddConsole />} />
            </Routes>
        </BrowserRouter>
    )
}