import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRow}
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
  ${props => props.theme.typeBlock.numberingBig}
  margin-right: 24px;
  @media screen and (max-width: 800px) {
    padding-top: 6px;
    width: 32px;
    margin-right: 0px;
  }
`;

const Title = styled.p`
  padding-top: 20px;
  @media screen and (max-width: 800px) {
    padding-top: 10.6px;
    padding-left: 8px;
    width: calc(100% - 48px);
  }
`

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
      <Title>
        {children}
      </Title>
    </Container>
  )
};

export default SubTitleNumbering;