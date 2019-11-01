import styled from '@emotion/styled'

const Spacing = styled.div`
  margin-left: ${props =>
    props.marginLeft ? props => props.marginLeft : 0}rem;
  margin-top: ${props => (props.marginTop ? props => props.marginTop : 0)}rem;
  margin-bottom: ${props =>
    props.marginBottom ? props => props.marginBottom : 0}rem;
  margin-right: ${props =>
    props.marginRight ? props => props.marginRight : 0}rem;

  padding-left: ${props =>
    props.paddingLeft ? props => props.paddingLeft : 0}rem;
  padding-top: ${props =>
    props.paddingTop ? props => props.paddingTop : 0}rem;
  padding-bottom: ${props =>
    props.paddingBottom ? props => props.paddingBottom : 0}rem;
  padding-right: ${props =>
    props.paddingRight ? props => props.paddingRight : 0}rem;
`

export { Spacing }
