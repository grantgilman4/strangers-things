import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components";


createRoot(document.querySelector('#root')).render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
 );