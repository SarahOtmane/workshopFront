import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Login from "./screens/backoffice/login";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}