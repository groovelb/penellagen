import styled from 'styled-components';

const Container = styled.p`
  display: inline-block;
  ${props => props.theme.typeBlock.body}
  margin-bottom: 0px;
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
`;

function Exp(
  {
    children,
    color,
    className
  }) {
  return (
    <Container className={className} color={color}>
      {children}
    </Container>
  )
};

export default Exp;