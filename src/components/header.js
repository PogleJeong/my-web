import styled from "styled-components";
import { FlexHorizonCenter, FlexHorizonLeftCenter } from "../common/style";
import React from "react";
import { darkTheme, lightTheme } from "../theme";
import Navi from "./navigation";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 140px;
    padding: 10px 50px;
    color: ${(props)=>props.theme === darkTheme ? darkTheme.header.textColor : lightTheme.header.textColor};
    background-color: ${(props)=>props.theme === darkTheme ? darkTheme.header.bgColor : lightTheme.header.bgColor};
    transition: color 1s, background-color 1s;
`

const Title = styled(FlexHorizonCenter)`
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2em;
`

const OptionBar = styled(FlexHorizonLeftCenter)`
    background-color: ${(props)=>props.theme === darkTheme ? darkTheme.header.bgColor : lightTheme.header.bgColor};
    transition: background-color 1s;
`

const SwitchDarkMode = styled.svg`
    width: 100px;
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    background-color: transparent;
`

function Header({darkmode, setDarkmode}) {
    const clickDarkmode = () => setDarkmode(prev=>!prev);
    return (
        <Wrapper>
            <span></span>
            <Title>프론트엔드 개발자 지망생 정은성입니다.</Title>
            <OptionBar>
                { 
                darkmode ?
                <SwitchDarkMode onClick={clickDarkmode} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </SwitchDarkMode>
                :
                <SwitchDarkMode onClick={clickDarkmode} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-cloud-moon-fill" viewBox="0 0 16 16">
                    <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
                    <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
                </SwitchDarkMode>
                }
            </OptionBar>
        </Wrapper>
    )
}

export default React.memo(Header);