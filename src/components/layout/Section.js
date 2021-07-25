import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  padding:${
    props => props.theme.spacing.sectionPadding
  } ${
    props => `calc((100% - ${props.theme.spacing.liveArea})/2)`
  };
  background-image: ${props => props.bgImg};
  background-color: ${props => {
    switch (props.bgColor) {
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
  @media screen and (max-width: 1280px) {
    width: 100%;
    padding:${
      props => props.theme.spacing.sectionPadding
    } 24px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding:${
      props => props.theme.spacing.sectionPaddingMobile
    } 24px;
  }
`;

function Section({
    children,
    bgColor,
    bgImg,
    className
  }) {
  return (
    <Container
      bgColor={bgColor}
      bgImg={bgImg}
      className={className}
    >
      {children}
    </Container>
  )
}

Section.protoTypes = {
  children: PropTypes.element.isRequired,
  bgColor: PropTypes.string,
  bgImg: PropTypes.string
}

export default Section;