import styled from 'styled-components';

const Container = styled.div`
  ${props => props.theme.typeBlock.msgMiddle}
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
  @media screen and (max-width: 800px) {
    margin-bottom: ${props => props.theme.spacing.headlineMarginBottomMobile};
  }
  
`;

const Num = styled.span`
  color: ${props => {
    switch (props.colorNum) {
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
  ${props => props.theme.typeBlock.numberingHuge}
  margin-bottom: ${props => props.theme.spacing.headlineMarginBottom};
  @media screen and (max-width: 800px) {
    margin-bottom: ${props => props.theme.spacing.headlineMarginBottomMobile};
  }
`;

function SubTitleNumbering(
  {
    num,
    colorNum,
    children,
    color
  }) {
  return (
    <Container color={color}>
      <Num colorNum={colorNum}>
        {num}
      </Num>
      <div>{children}</div>
    </Container>
  )
};

export default SubTitleNumbering;