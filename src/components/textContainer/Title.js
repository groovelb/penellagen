import styled from 'styled-components';

const Container = styled.div`
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
    ${props => props.theme.typeBlock.subtitle}
  }
  @media screen and (max-width: 800px) {
    margin-bottom: ${props => props.theme.spacing.titleMarginBottomMobile};
  }

  // Transition
  margin-top: ${props => props.isTrigger?'0px':'0px'};
  transition: margin-top 1s ease-out;
`;

function Title(
  {
    children,
    color,
    className,
    isTrigger
  }) {
  return (
    <Container
      color={color}
      className={className}
      isTrigger={isTrigger}
    >
      {children}
    </Container>
  )
};

export default Title;