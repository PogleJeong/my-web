import styled from "styled-components";
import { FlexHorizonCenter } from "../common/style";
import { darkTheme, lightTheme } from "../theme";
import { Link } from "react-router-dom";

const Wrapper = styled(FlexHorizonCenter)`
    height: 60px;
    color: ${(props)=>props.theme === darkTheme ? darkTheme.navi.textColor : lightTheme.navi.textColor};
    background-color: ${(props)=>props.theme === darkTheme ? darkTheme.navi.bgColor : lightTheme.navi.bgColor};
    transition: color 1s, background-color 1s;
    nav {
        width: 60%;
        height: 100%;
    }
`

const List = styled(FlexHorizonCenter)`
    width: 100%;
    height: 100%;
`

const Item = styled.li`
    height: 100%;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    color: ${(props)=>props.theme === darkTheme ? darkTheme.navi.textColor : lightTheme.navi.textColor};
    transition: color 1s, background-color 1s;
    &:hover {
        color: ${(props)=>props.theme === darkTheme ? darkTheme.navi.hover.textColor : lightTheme.navi.hover.textColor};
        background-color: ${(props)=>props.theme === darkTheme ? darkTheme.navi.hover.bgColor : lightTheme.navi.hover.bgColor};
    }
`

function Navi() {
    return(
        <Wrapper>
            <nav>
                <List as="ul">
                    <Link to="/about"><Item>About</Item></Link>
                    <Link to="/skill"><Item>Skill</Item></Link>
                    <Link to="/project"><Item>Project</Item></Link>
                </List>
            </nav>
        </Wrapper>
    )
}

export default Navi;