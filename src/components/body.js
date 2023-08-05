import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { FlexHorizon } from "../common/style";
import Sidebar from "./sidebar";

const Wrapper = styled(FlexHorizon)`
    min-height: 800px;
`

function Body() {
    return (
        <Wrapper>
            <Sidebar />
            <Outlet />
        </Wrapper>
    )
}

export default Body;