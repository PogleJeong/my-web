import styled from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { FlexVertical, FlexVerticalTopCenter } from "../common/style";

const Wrapper = styled(FlexVerticalTopCenter)`
    width: 100%;
    min-height: 100%;
    padding: 100px;
    background-color: ${(props)=>props.theme === darkTheme ? darkTheme.body.page.bgColor : lightTheme.body.page.bgColor};
`

const Title = styled.div`
    height: 60px;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
`

const InfoCard = styled(FlexVertical)`
    width: 800px;
    height: 400px;
    padding: 25px;
    border: 2px solid white;
    border-radius: 10px;
    background-color: ${(props)=>props.theme === darkTheme ? darkTheme.body.page.card.bgColor : lightTheme.body.page.card.bgColor};;
    box-shadow: 2px 3px 5px 0px;
`

function About() {
    return (
        <Wrapper>
            <Title>About</Title>
            <InfoCard>
                아하하..
                <h1>하이</h1>
            </InfoCard>
        </Wrapper>
    )
}

export default About;