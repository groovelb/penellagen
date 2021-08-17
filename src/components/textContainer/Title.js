import styled from '../chart/node_modules/styled-components';

const Container = styled.div`
  position: relative;
  display: grid;
  ${props => props.theme.typeBlock.msgBig}
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
  margin-bottom: ${props => props.theme.spacing.titleMarginBottom};
  p{
    margin-top: ${props => props.theme.spacing.small} !important;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: ${props => props.theme.spacing.titleMarginBottomMobile};
  }
`;

function Title(
  {
    children,
    color,
    className,
  }) {
  return (
    <Container
      color={color}
      className={className}
    >
      {children}
    </Container>
  )
};

export default Title;