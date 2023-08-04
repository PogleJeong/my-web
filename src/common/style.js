import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
`

export const FlexHorizon = styled(Flex)`
    flex-direction: row;
`

export const FlexVertical = styled(Flex)`
    flex-direction: column;
`

export const FlexHorizonCenter = styled(FlexHorizon)`
    justify-content: center;
    align-items: center;
`

export const FlexHorizonLeftCenter = styled(FlexHorizon)`
    justify-content: left;
    align-items: center;
`

export const FlexHorizonRightCenter = styled(FlexHorizon)`
    justify-content: right;
    align-items: center;
`

export const FlexVerticalCenter = styled(FlexVertical)`
    justify-content: center;
    align-items: center;
`

export const FlexVerticalLeftCenter = styled(FlexVertical)`
    justify-content: center;
    align-items: start;
`

export const FlexVerticalRightCenter = styled(FlexVertical)`
    justify-content: center;
    align-items: end;
`