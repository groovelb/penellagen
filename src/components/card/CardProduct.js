
import styled from 'styled-components';
import ic_arrow from '../../assets/img/icon/ic_arrow_long_white.svg';

const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
  background-color: ${props => props.theme.color.white};
  img{
    width: 164px;
    height: 164px;
  }
  .info{
    display: none;
    img{
      width: auto;
      height: 12px;
      margin: 12px 0px;
    }
  }
  :hover>.info{
    display: inline-block;
  }
  @media screen and (max-width: 800px) {
    img{
      width: 124px;
      height: 124px;
    }
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: rgba(170, 131, 123, 0.72);
  color: ${props => props.theme.color.white};
  ${props => props.theme.typeBlock.body}
`;


function CardProduct({
  data,
  width,
  height
}) {
  return(
    <Container
      width={width}
      height={height}
    >
      <Info className='info'>
        <div>{data.prdName}</div>
        <div>{data.brandName}</div>
        <img src={ic_arrow} alt='' />
      </Info>
      <img src={data.img} alt='' />
    </Container>
  )
}

export default CardProduct;