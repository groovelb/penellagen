import styled from 'styled-components';
import ic_arrow_pink_orange from '../../assets/img/icon/ic_arrow_long_pink_orange.svg';


const Container = styled.button`
  display: flex;
  justify-content: flex-start;
  background: none !important;
  align-items: center;
  width: fit-content;
  height: 44px;
  text-decoration: underline;
  ${props => props.theme.typeBlock.body};
  color: ${
    props => props.theme.color.pinkBeige
  };
  img{
    margin-left: 36px;
  }
`;

function ButtonText({
  onClick,
  children,
  className
}) {
  return(
    <Container
      className={className}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default ButtonText;