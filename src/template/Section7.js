import styled from 'styled-components';

import ProductCardSlide from '../components/slide/ProductCardSlide';
import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
import SubTitle from '../components/textContainer/SubTitle';
import CardProduct from '../components/card/CardProduct';


import img_prd from '../assets/img/prd/img_prd_name.jpg';
import ic_next from '../assets/img/icon/ic_arrow_next_black.svg';
import ic_prev from '../assets/img/icon/ic_arrow_prev_black.svg';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRowCol}
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.contentMarginBottom2};
`;

const prdList1 = [
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  },
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  },
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  },
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  },
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  },
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  },
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  }
];

const prdList2 = [
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  },
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  },
  {
    img: img_prd,
    prdName: '제품명',
    brandName: '브랜드명'
  }
];

function Section7() {

  return (
    <Container>
      <Section bgColor=''>
        <Title color={'black'}>
          Products
        </Title>
        <ContentBox>
          <SubTitle color={'black'}>
            브랜드 제품
          </SubTitle>
          <ProductCardSlide
            data={prdList1}
          />
        </ContentBox>
        <ContentBox>
          <SubTitle color={'black'}>
            병의원 제품
          </SubTitle>
          <ProductCardSlide
            data={prdList2}
          />
        </ContentBox>
      </Section>
    </Container>
  )
}

export default Section7;