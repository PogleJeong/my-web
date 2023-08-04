import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/header";
import Navi from "./components/navigation";
import Footer from "./components/footer";
import { darkTheme, lightTheme } from "./theme";

function Root() {
    const [ darkmode, setDarkmode ] = useState(false);
    console.log(darkmode);
    return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme} >
        <Header darkmode={darkmode} setDarkmode={setDarkmode} />
        <Navi />
        <Outlet />
        <Footer />
    </ThemeProvider>
    )
}

export default Root;