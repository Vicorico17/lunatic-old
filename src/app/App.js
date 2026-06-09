import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import OnePageApp from "./OnePageApp";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";


function PdfRedirect({pdf}) {
    useEffect(() => {
        window.location.replace(pdf);
    }, [pdf]);

    return null;
}


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OnePageApp/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/terms' element={<Terms/>}/>
                <Route
                    path='/white'
                    element={<PdfRedirect pdf='/whitepapers/lunatic-clubhouse-whitepaper.pdf'/>}
                />
                <Route
                    path='/wastelands-of-mars-whitepaper'
                    element={<PdfRedirect pdf='/whitepapers/wastelands-of-mars-whitepaper.pdf'/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
