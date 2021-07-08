import styled from 'styled-components';

const Container = styled.button`
  height: 44px;
  padding: 0px 24px;
  background-color: ${
    props => props.theme.color.beige
  };
  color: ${
    props => props.theme.color.black
  };
`;

function Button({
  onClick,
  children
}) {
  return(
    <Container
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default Button;