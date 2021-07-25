import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import ProductCardSlide from '../components/slide/ProductCardSlide';
import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
import SubTitle from '../components/textContainer/SubTitle';
import CardProduct from '../components/card/CardProduct';

import ToTop from '../components/motion/ToTop';

import img_prd from '../assets/img/prd/img_prd_name.jpg';
import illust_text_section4 from '../assets/img/illust/illust_text_section4.svg';

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

const BgImage = styled.div`
  width: ${props => props.theme.spacing.liveArea};
  height: 100%;
  position: absolute;
  top: 0;
  left: ${props => `calc((100% - ${props.theme.spacing.liveArea})/2)`};
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
  img{
    margin-top: 200px;
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1280px){
    width: 100%;
    left: 0;
    img{
    margin-top: 80px;
    width: 100%;
    height: auto;
  }
  }
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

function Section7({
  refObject,
  isTrigger
}) {
  const { t, i18n } = useTranslation();

  return (
    <Container ref={refObject}>
      <Section bgColor=''>
        <BgImage>
          <img src={illust_text_section4} alt='' />
        </BgImage>
        <Title
          color={'black'}
          isTrigger={isTrigger}
        >
          <ToTop
            isTrigger={isTrigger}
            index={0}
          >
            Products
          </ToTop>
        </Title>
        <ContentBox>
          <SubTitle color={'black'}>
            <ToTop
              isTrigger={isTrigger}
              index={1}
            >
              {t('product-titile-brand')}
            </ToTop>
          </SubTitle>
          <ToTop
            isTrigger={isTrigger}
            index={2}
          >
            <ProductCardSlide
              data={prdList1}
            />
          </ToTop>
        </ContentBox>
        <ContentBox>
          <SubTitle color={'black'}>
            <ToTop
              isTrigger={isTrigger}
              index={3}
            >
              {t('product-titile-medical')}
            </ToTop>
          </SubTitle>
          <ToTop
            isTrigger={isTrigger}
            index={3}
          >
            <ProductCardSlide
              data={prdList2}
            />
          </ToTop>   
        </ContentBox>
      </Section>
    </Container>
  )
}

export default Section7;