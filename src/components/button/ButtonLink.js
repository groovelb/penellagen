import styled from 'styled-components';
import ic_arrow_pink_orange from '../../assets/img/icon/ic_arrow_long_pink_orange.svg';


const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  /* height: 44px; */
  padding: 12px 24px;
  ${
    props => props.theme.typeBlock.button
  }
  background-color: ${
    props => props.theme.color.white
  };
  color: ${
    props => props.theme.color.pinkOrange
  };
  img{
    margin-left: 36px;
  }
  @media screen and (max-width: 800px) {
    img{
      margin-top: 2px;
      margin-left: 31px;
    }
  }
`;

function Button({
  to,
  children
}) {
  return(
    <Container
      href={to}
      target={'_blank'}
    >
      {children}
      <img src={ic_arrow_pink_orange} alt='' />
    </Container>
  )
}

export default Button;