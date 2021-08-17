import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.typeBlock.body}
  color: ${props => {
    switch (props.bodyColor) {
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
  /* justify-content: space-between; */
  width: 50%;
  padding-right: 48px;
  @media screen and (max-width: 800px) {
    padding-right: 0px;
    width: 100%;
    padding-right: 0px;
  }
`;

const Title = styled.div`
  ${props => props.theme.typeBlock.h2}
  white-space: pre-line;
  color: ${props => {
    switch (props.titleColor) {
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
  max-width: ${props => props.theme.spacing.horizonTitle};
  margin-right: 32px;
  @media screen and (max-width: 800px) {
    width: 100% !important;
    margin-right: 0px;
    /* white-space: nowrap; */
    margin-bottom: ${props => props.theme.spacing.headlineMarginBottom};
  }
`;

const Content = styled.div`
  width: ${props => props.theme.spacing.horizonContent};
  span{
    color: ${props => {
    switch (props.titleColor) {
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
  }
  @media screen and (max-width: 800px) {
    width: 100% !important;
  }
`;



function TextBox2to1(
  {
    title,
    titleColor,
    bodyColor,
    children,
  }) {
  return (
    <Container bodyColor={bodyColor}>
      <Title titleColor={titleColor}>
        {title}
      </Title>
      <Content titleColor={titleColor}>
        {children}
      </Content>
    </Container>
  )
};

export default TextBox2to1;