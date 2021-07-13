import react, { useState, useEffect } from 'react';
import useWindowSize from '../../hook/useWindowSize';
import CardProduct from '../../components/card/CardProduct';
import styled from 'styled-components';
import ic_next from '../../assets/img/icon/ic_arrow_next_black.svg';
import ic_prev from '../../assets/img/icon/ic_arrow_prev_black.svg';


const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SlideContaier = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height};
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  left: ${props => props.left};
  width: ${props => props.width};
  justify-content: space-between;
  transition: left 0.3s ease-in-out;
`;

const FAB = styled.button`
  position: absolute;
  z-index: 9;
  top: 0;
  width: 40px;
  ${props => props.isLeft && `left: -56px`};
  ${props => props.isRight && `right: -56px`};
  ${props => props.theme.layout.flexCenter}
  img{
    width: 24px;
    height: auto;
  }
  height: 100%;
  background-color: rgba(0,0,0,0);
  @media screen and (max-width: 800px) {
    width: 32px;
    ${props => props.isLeft && `left: 0px`};
    ${props => props.isRight && `right: 0px`};
    img{
      width: 16px;
      height: auto;
    }
    height: 100%;
  }
`;

function CardSlide({
    data,
    // slideWidth
  }) {

  const windowSize = useWindowSize();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(305);
  const [cardHeight, setCardHeight] = useState(324);
  const [cardPadding, setCardPadding] = useState(20);
  const [slideWidth, setCardSlideWidth] = useState(0);

  console.log(windowSize);
  useEffect(() => {
    // Set Mobile Component Size
    if(windowSize.width<=800){
      let cardWidth = (windowSize.width - 48 - 8)/2;
      console.log(cardWidth);
      let cardPadding = 8;
      let cardSlideWidth = cardWidth * data.length + cardPadding * (data.length - 1)
      setIsMobile(true);
      setCardPadding(8);
      setCardWidth(cardWidth);
      setCardHeight(168);
      setCardSlideWidth(cardSlideWidth);
    }
    // Set Desktop Component Size
    else{
      let cardWidth = 305;
      let cardPadding = 20;
      let cardSlideWidth = cardWidth * data.length + cardPadding * (data.length - 1)
      setIsMobile(false);
      setCardPadding(20);
      setCardWidth(cardWidth);
      setCardHeight(324);
      setCardSlideWidth(cardSlideWidth);
    }
  },[windowSize]);

  return (
    <Wrapper>
      <FAB
        isLeft={true}
        disabled={!(0 < slideIndex)}
        onClick={
          () => {
            if (0 < slideIndex) {
              setSlideIndex(slideIndex - 1);
            }
          }
        }
      >
        <img src={ic_prev} alt='' />
      </FAB>
      <SlideContaier 
        height={cardHeight+'px'}>
        <Slide
          left={`calc(${slideIndex}*(-${cardWidth+cardPadding}px))`}
          width={slideWidth + 'px'}
        >
          {
            data.map(prd => (
              <CardProduct 
                width={cardWidth}
                height={cardHeight}
                data={prd} />
            ))
          }
        </Slide>
      </SlideContaier>
      <FAB
        isRight={true}
        disabled={!(slideIndex < data.length - 4)}
        onClick={
          () => {
            if (slideIndex < data.length - 4) {
              setSlideIndex(slideIndex + 1);
            }
          }
        }
      >
        <img src={ic_next} alt='' />
      </FAB>
    </Wrapper>
  )
}

export default CardSlide;