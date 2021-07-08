import styled from 'styled-components';

const Container = styled.div`
  ${props => props.theme.typeBlock.h1}
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
  margin-bottom: ${props => props.theme.spacing.headlineMarginBottom};
  span{
    margin-left: ${props => props.theme.spacing.medium};
    ${props => props.theme.typeBlock.body}
    color: ${props => props.theme.color.lightBeige};
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