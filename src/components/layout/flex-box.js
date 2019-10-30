import styled from '@emotion/styled'

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  align-content: ${props =>
    props.alignContent ? props.alignContent : 'flex-start'};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`

export { FlexBox }
