import styled from 'styled-components';
import ic_arrow_pink_orange from '../../assets/img/icon/ic_arrow_long_pink_orange.svg';


const Container = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  height: 44px;
  text-decoration: underline;
  color: ${
    props => props.theme.color.pinkBeige
  };
  img{
    margin-left: 36px;
  }
`;

function Button({
  to,
  children,
  className
}) {
  return(
    <Container
      className={className}
      href={to}
      target={'_blank'}
    >
      {children}
    </Container>
  )
}

export default Button;