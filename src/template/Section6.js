import styled from '../components/chart/node_modules/styled-components';
import { isMobile } from 'react-device-detect';
// import theme from '../assets/theme/theme';
import { useTranslation } from 'react-i18next';

import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
import SubTitleHugeNumbering from '../components/textContainer/SubTitleHugeNumbering';
import ButtonLink from '../components/button/ButtonLink';
import ToTop from '../components/motion/ToTop';
import Exp from '../components/textContainer/Exp';
import ToBottom from '../components/motion/ToBottom';

import img_section6_starfish from '../assets/img/background/img_section6_starfish_full.jpg';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 316px;
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
  overflow: hidden;
  img{
    width: 100%;
    height: auto;
  }
`;

const TopImage = styled.img`
  position: relative;
  top: ${props => isMobile?0:280*props.progress + 'px'};
  /* transition: top 1s ease-out; */
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

// const Exp = styled.div`
//   /* height: 248px; */
//   margin-bottom: 32px;
//   span{
//     color: ${props => props.theme.color.pinkOrange};
//   }
//   @media screen and (max-width: 800px) {
//     height: fit-content;
//     margin-bottom: 32px;
//   }
// `;

const Col = styled.div`
  position: relative;
  width: calc((100% - 112px)/3);
  ${props => props.theme.layout.flexCol}
  /* justify-content: space-between; */
  a{
    position: absolute;
    bottom: -64px;
    left: 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
    a{
      position: static;
      margin-top: ${props => props.theme.spacing.contentMarginBottom1};
    }
  }
`;

function Section6({
  refObject,
  isTrigger,
  progress
}) {

  const { t, i18n } = useTranslation();

return (
    <Container
      isTrigger={isTrigger}
      ref={refObject}
    >
      <Section bgColor='lightBeige'>
        <Title
          color={'black'}
          isTrigger={isTrigger}
        >
          <ToTop
            isTrigger={isTrigger}
            index={1}
          >
            Our Move
            <Exp color='black'>
              {t('move-Sub-title')}
            </Exp>
          </ToTop>
        </Title>
        <Top>
          <TopImage
            src={img_section6_starfish}
            alt='' 
            progress={progress}
          />
        </Top>
        <ToTop
          isTrigger={isTrigger}
          index={3}
        >
          <ContentBox>
            <Col>
              <SubTitleHugeNumbering
                colorNum={'greenTea'}
                color={'black'}
                num={1}
              >
                {t('move-Part-title1')}
              </SubTitleHugeNumbering>
              <Exp>
                {t('move-exp-s1')} <br /><br />
                {t('move-exp-s2')}
              </Exp>
            </Col>
            <Col>
              <SubTitleHugeNumbering
                colorNum={'greenTea'}
                color={'black'}
                num={2}
              >
                {t('move-Part-title2')}
              </SubTitleHugeNumbering>
              <Exp>
                {t('move-exp-s3')} <br /><br />
                {t('move-exp-s4')}
              </Exp>
              {
                i18n.language !== 'cn' &&
                <ButtonLink
                to={'http://www.starstech.co.kr/kor/'}
                >
                  {t('move-exp-s11')}
                </ButtonLink>
              }
            </Col>
            <Col>
              <SubTitleHugeNumbering
                colorNum={'greenTea'}
                color={'black'}
                num={3}
              >
                {t('move-Part-title3')}
              </SubTitleHugeNumbering>
              <Exp>
                {t('move-exp-s5')}
                <span> {t('move-exp-s6')} </span>
                {t('move-exp-s7')}
                {t('move-exp-s8')}
                <span> {t('move-exp-s9')} </span>
                {t('move-exp-s10')}
              </Exp>
              {
                i18n.language !== 'cn' &&
                <ButtonLink
                  to={'http://www.starstech.co.kr/kor/'}
                >
                  {t('move-exp-s11')}
                </ButtonLink>
              }
            </Col>
          </ContentBox>
        </ToTop>
      </Section>
    </Container>
  )
}

export default Section6;