import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  ${props => props.theme.typeBlock.body}
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

  margin-bottom: ${props => props.theme.spacing.contentMarginBottom2};
  ${props => props.theme.layout.flexRowCol}
  width: 50%;
  padding-right: 80px;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-right: 0px;
  }
`;

function TextBox2to1(
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

export default TextBox2to1;