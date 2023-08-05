import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./theme";
import Header from "./components/header";
import Navi from "./components/navigation";
import Footer from "./components/footer";
import Body from "./components/body";

function Root() {
    const [ darkmode, setDarkmode ] = useState(true);
    return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme} >
        <Header darkmode={darkmode} setDarkmode={setDarkmode} />
        <Navi />
        <Body />
        <Footer />
    </ThemeProvider>
    )
}

export default Root;