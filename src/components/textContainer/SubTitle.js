import styled from 'styled-components';

const Container = styled.div`
  ${props => props.theme.typeBlock.h1}
  position: relative;
  color: ${props => {
    switch (props.color) {
      case 'lightBeige':
        return props.theme.color.lightBeige;
      case 'beige':
        return props.theme.color.beige;
      case 'pinkBeige':
        return props.theme.color.pinkBeige;
      case 'emeraldGreen':
        return props.theme.color.emeraldGreen;
      case 'greenTea':
        return props.theme.color.greenTea;
      case 'pinkOrange':
        return props.theme.color.pinkOrange;
      case 'white':
        return props.theme.color.white;
      case 'black':
        return props.theme.color.black;
    }
  }};
  margin-bottom: ${props => `calc(${props.theme.spacing.headlineMarginBottom} + 24px)`};
  p{
    margin-left: ${props => props.theme.spacing.small};
    ${props => props.theme.typeBlock.body}
    color: ${props => props.theme.color.lightBeige};
    @media screen and (max-width: 800px) {
      /* position: absolute; */
      left: 0;
      margin-left: 0;
      /* bottom: -24px; */
    }
  }
`;

function SubTitle(
  {
    children,
    color
  }) {
  return (
    <Container color={color}>
      {children}
    </Container>
  )
};

export default SubTitle;