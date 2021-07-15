import styled from 'styled-components';
// import theme from '../assets/theme/theme';

import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
import SubTitleHugeNumbering from '../components/textContainer/SubTitleHugeNumbering';
import ButtonLink from '../components/button/ButtonLink';
import ToTop from '../components/motion/ToTop';

import img_section6_starfish from '../assets/img/background/img_section6_starfish.jpg';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  
`;

const Top = styled.div`
  width: 100%;
  img{
    width: 100%;
    height: auto;
  }
`;

const VideoBox = styled.div`
  position: absolute;
  top: 12px;
  left: 348px;
  width: 690px;
  height: 112px;
  border-radius: 0px 0px 0px 32px;
  overflow: hidden;
`;

const ContentBox = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRowCol}
  justify-content: space-between;
  margin-top: -64px;
`;

const Exp = styled.div`
  height: 224px;
  @media screen and (max-width: 800px) {
    height: fit-content;
    margin-bottom: 32px;
  }
`;

const Col = styled.div`
  width: calc((100% - 112px)/3);
  ${props => props.theme.layout.flexCol}
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
  }
`;

function Section6({
    refObject,
    isTrigger
  }) {
  return (
    <Container ref={refObject}>
      <Section bgColor='lightBeige'>
        <Title
          color={'black'}
          isTrigger={isTrigger}
        >
          <ToTop
            isTrigger={isTrigger}
            index={0}
          >
            Our Move
            <p>
              페넬라겐은 불가사리의 가능성을 보았습니다.
            </p>
          </ToTop>
        </Title>
        <Top>
        <ToTop
            isTrigger={isTrigger}
            index={1}
          >
            <img src={img_section6_starfish} alt='' />
          </ToTop> 
        </Top>
        <ToTop
            isTrigger={isTrigger}
            index={2}
          >
          <ContentBox>
            <Col>
              <SubTitleHugeNumbering
                colorNum={'greenTea'}
                color={'black'}
                num={1}
              >
                PENELLAGEN
              </SubTitleHugeNumbering>
              <Exp>
                페넬라겐은 2021년 스타스테크가 론칭한 화장품 원료 브랜드로서 뛰어난 재생능력을 가진 불가사리에서 추출한 콜라겐 펩타이드에 TDS 기술을 적용시켜 피부 진피층까지 도달시킨 최초의 화장품 원료입니다.
                이러한 기술력을 바탕으로 화장품 원료에 대한 소비자의 인식 수준을 높이고 이를 충족시킬 수 있는 수준 높은 제품을 제공합니다.
              </Exp>
              <ButtonLink>
                실험 & 기능성 데이터 다운로드
              </ButtonLink>
            </Col>
            <Col>
              <SubTitleHugeNumbering
                colorNum={'greenTea'}
                color={'black'}
                num={2}
              >
                STAR’s TECH
                </SubTitleHugeNumbering>
                <Exp>
                  페넬라겐은 2021년 스타스테크가 론칭한 화장품 원료 브랜드로서 뛰어난 재생능력을 가진 불가사리에서 추출한 콜라겐 펩타이드에 TDS 기술을 적용시켜 피부 진피층까지 도달시킨 최초의 화장품 원료입니다.
                  이러한 기술력을 바탕으로 화장품 원료에 대한 소비자의 인식 수준을 높이고 이를 충족시킬 수 있는 수준 높은 제품을 제공합니다.
                </Exp>
                <ButtonLink>
                실험 & 기능성 데이터 다운로드
              </ButtonLink>
            </Col>
            <Col>
              <SubTitleHugeNumbering
                colorNum={'greenTea'}
                color={'black'}
                num={3}
              >
                FERTISTER
              </SubTitleHugeNumbering>
              <Exp>
                불쑥이는 불가사리에서 골편과 콜라겐을 추출하는 과정에서 생기는 부산물을 100% 활용하여 만든 업사이클링 액상 비료입니다. 불가사리가 가진 식물 생장에 도움이 되는 각종 영양 성분을 활용한 제품으로 뛰어난 성능은 물론 부산물 활용으로 인한 낮은 제조원가를 강점으로 갖습니다. 경쟁력 있는 가격으로 농업 활성화에 기여하고 저개발국에 원조함으로써 기아 종식에 기여하는 것을 목표로 합니다.
              </Exp>
              <ButtonLink>
                실험 & 기능성 데이터 다운로드
              </ButtonLink>
            </Col>
          </ContentBox>
        </ToTop>
      </Section>
    </Container>
  )
}

export default Section6;