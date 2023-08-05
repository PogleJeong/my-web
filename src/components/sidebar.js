import styled from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { FlexHorizonCenter, FlexVerticalCenter, FlexVerticalTopCenter } from "../common/style";
import profile from "../image/chatBot1.jpg";
import { useState } from "react";

const Wrapper = styled(FlexVerticalCenter)`
    position: relative;
    box-shadow: 2px 3px 10px 0px;
`

const Side = styled(FlexVerticalCenter)`
    z-index: 3;
    min-width: 300px;
    height: 100%;
    padding: 100px 0px;
    background-color: ${(props)=>props.theme === darkTheme ? darkTheme.body.side.bgColor : lightTheme.body.side.bgColor};
    transition: color 1s, background-color 1s;
    h1 {
        font-family: 'Black Han Sans', sans-serif;
        font-size: 1.5em;
        font-weight: bold;
        color:  ${(props)=>props.theme === darkTheme ? darkTheme.body.side.textColor : lightTheme.body.side.textColor};
        margin-bottom: 20px;
    }
    img {
        width: 150px;
        height: 150px;
        border-radius: 100px;
        margin-bottom: 50px;
        background-size: cover;
    }
`

const SocialBar = styled(FlexHorizonCenter)`
    width: 75%;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 10px;
    background-color: rgba(255,255,255, 0.1);
    box-shadow: 1px 2px 3px 0px;
    a {
        margin: 5px;
        svg {
            color: ${(props)=>props.theme === darkTheme ? darkTheme.icon.bgColor : lightTheme.icon.bgColor};
            width: 30px;
            height: 30px;
            transition: scale 750ms;
            &:hover {
                scale: 1.2;
            }
        }
    }
`

const InfoBar = styled(FlexVerticalTopCenter)`
    span {
        font-family: 'Black Han Sans', sans-serif;
        font-size: 0.8em;
        margin: 10px 0px;
        color: ${(props)=>props.theme === darkTheme ? darkTheme.body.side.textColor : lightTheme.body.side.textColor}
    }
`

const ExitBtn = styled.button`
    position: absolute;
    top: 2px;
    right: -40px;
    width: 40px;
    height: 40px;
    border: none;
    box-shadow: 1px 2px 3px 0px;
    cursor: pointer;
    transition: border 1s;
    &:hover {
        border: 1px solid black;
    }
    svg {
        width: 20px;
        height: 20px;
    }
`

function Sidebar() {
    const [ open, setOpen ] = useState(true);
    const toggleSidebar = () => {
        setOpen((prev)=>!prev);
    }
    return (
        <Wrapper>
            {
            open ? 
            <Side>
                <h1>정은성</h1>
                <img src={profile} alt="" />
                <SocialBar>
                    <a href="https://github.com/PogleJeong" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/pogle_records" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
                        </svg>
                    </a>
                    <a href="https://pogle-jeong.tistory.com/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>
                    </a>
                </SocialBar>
                <InfoBar>
                    <span>Github - PogleJeong</span>
                    <span>Instagram - pogle_records</span>
                    <span>Blog - pogle-jeong.tistory </span>
                    <span>Tel - 010.9259.4958</span>
                </InfoBar>
            </Side>
            :
            null
            }
            {
            open ?
            <ExitBtn onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>
            </ExitBtn>
            :
            <ExitBtn onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </ExitBtn>
            }
        </Wrapper>
    )
}

export default Sidebar;