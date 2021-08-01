import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

import Section from '../components/layout/Section';
import Chart from '../components/Chart/Chart';

import ButtonLink from '../components/button/ButtonLink';

import ToTop from '../components/motion/ToTop';
import Title from '../components/textContainer/Title';
import SubTitleNumbering from '../components/textContainer/SubTitleNumbering';
import SubTitle from '../components/textContainer/SubTitle';
import TextBox from '../components/textContainer/TextBox';
import Exp from '../components/textContainer/Exp';
import Table from '../components/table/Table';

// import IllustPenellagen from '../components/illust/IllustPenellagenInteractive';
import IllustPenellagen1 from '../components/illust/IllustPenellagenStatic1';
import IllustPenellagen2 from '../components/illust/IllustPenellagenStatic2';
// import illust_penellagen from '../assets/img/illust/illust_penellagen.svg';
import illust_penellagen from '../assets/img/illust/illust_penellagen_png.png';
import ic_logo_text_white from '../assets/img/logo/logo_text_white.svg';
import img_bg_wave from '../assets/img/background/img_bg_wave.png';


const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.color.beige};
  background-size: cover;
  color: ${props => props.theme.color.white};
`;

const Top = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRowCol}
  .left{
    width: calc(100% - 480px);
  }
  .right{
    width: 480px;
  }
  @media screen and (max-width: 1280px) {
    .left{
      width: calc(100% - 256px);
    }
    .right{
      width: 256px;
    }
  }
  @media screen and (max-width: 800px) {
    div{ 
      width: 100% !important;
      margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
    }
  }
`;

const TopRight = styled.div`
  ${props => props.theme.layout.flexCol}
  /* ${props => props.theme.layout.alignCenter} */
  .penellagen{
    width: 312px;
    height: auto;
    margin-bottom: 16px;
  }
  .textLogo{
    width: 480px;
    height: auto;
    @media screen and (max-width: 1280px) {
      width: 100%;
    }
    @media screen and (max-width: 800px) {
      width: calc(100% - 48px);
      height: auto;
    }
  }
`;

const VideoContainer = styled.div`
  width: 1280px;
  height: fit-content;
  background-color: #000;
  margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
  @media screen and (max-width: 1280px) {
    width: 100%;
    
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  background-color: ${props => props.theme.color.beige};
  padding: ${props => props.theme.spacing.subSectionPadding};
  @media screen and (max-width: 800px) {
    padding: ${props => props.theme.spacing.subSectionPaddingMobile};
    width: calc(100% + 48px);
    margin-left: -24px;
  }
`;

const ContentSection = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRowCol}
  margin-bottom: ${props => props.theme.spacing.subsectionMarginBottomSmall};
`;

const Col = styled.div`
  width: 50%;
  padding-right: 32px;
  @media screen and (max-width: 800px) {
    padding-right: 0px;
    width: 100%;
  }
  table{
    margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
  }
`;

const Col6 = styled.div`
  width: 60%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  table{
    margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
  }
`;

const Floating = keyframes`
  0% { transform: translatey(0px)};
  50% { transform: translatey(-32px)};
  10% { transform: translatey(0px)};
`;

const Penellagen = styled.div`
  width: 100%;
  /* text-align: center; */
  animation: ${Floating} 6s ease-in-out infinite;
  img{
    width: 464px;
    height: 464px;
  }
  @media screen and (max-width: 800px) {
    img{
      width: calc(100% - 48px);
      height: auto;
    }
  }
`;

const FloatingContainer = styled.div`
  animation: ${Floating} 6s ease-in-out infinite;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const BackgrondTransition = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: -24px;
`;

const TableContainer = styled.div`
  @media screen and (max-width: 800px) {
    margin-left: -24px;
    width: calc(100% + 48px);
    text-align: center;
  }
`;

function Section4({
  refObject,
  ref2Object,
  isTrigger,
  isRef2Trigger,
  refChart1,
  refChart2,
  isChart1Trigger,
  isChart2Trigger
}) {

  const { t, i18n } = useTranslation();

  const chartData1 = [
    {
      label: t('tech1-exp-s4'),
      value: 523.7
    },
    {
      label: t('tech1-exp-s5'),
      value: 90.7
    },
    {
      label: t('tech1-exp-s6'),
      value: 0
    }
  ];

  const chartData2 = [
    {
      label: t('tech1-exp-s4'),
      value: 93.8
    },
    {
      label: t('tech1-exp-s5'),
      value: 84.2
    },
    {
      label: t('tech1-exp-s6'),
      value: 81
    }
  ];

  const chartData3 = [
    {
      label: t('tech1-exp-s4'),
      value: 88.0
    },
    {
      label: t('tech1-exp-s5'),
      value: -2.0
    },
    {
      label: t('tech1-exp-s6'),
      value: -3.0
    }
  ];

  const chartData4 = [
    {
      label: t('tech1-exp-s4'),
      value: 62.0
    },
    {
      label: t('tech1-exp-s5'),
      value: 23.0
    },
    {
      label: t('tech1-exp-s6'),
      value: 54.0
    }
  ];

  const tableData = [
    [
      {
        value: '',
        isHighlight: false
      },
      {
        value: t('tech2-exp-s21'),
        isHighlight: false
      },
      {
        value: t('tech2-exp-s22'),
        isHighlight: false
      },
      {
        value: t('tech2-exp-s23'),
        isHighlight: false
      },
    ],
    [
      {
        value: t('tech2-exp-s18'),
        isHighlight: false
      },
      {
        value: '0.00',
        isHighlight: false
      },
      {
        value: '0.00',
        isHighlight: false
      },
      {
        value: '0.00',
        isHighlight: false
      },
    ],
    [
      {
        value: t('tech2-exp-s19'),
        isHighlight: false
      },
      {
        value: '0.00',
        isHighlight: false
      },
      {
        value: '0.00',
        isHighlight: false
      },
      {
        value: '0.00',
        isHighlight: false
      },
    ],
    [
      {
        value: t('tech2-exp-s20'),
        isHighlight: false
      },
      {
        value: '0.00',
        isHighlight: false
      },
      {
        value: '0.00',
        isHighlight: true
      },
      {
        value: '0.00',
        isHighlight: true
      },
    ],
  ];

  return (
    <Container
      color
      // bgSrc={img_bg}
      ref={refObject}
    >
      <Section bgColor={''}>
        <Top>
          <Title
            color={'white'}
            isTrigger={isTrigger}
            className={'left'}
          >
            <ToTop
              isTrigger={isTrigger}
              index={0}
            >
              Penellagen <br />
              Skin <br />
              Technology
              <Exp color='white'>
                {t('tech-Sub-title')}
              </Exp>
            </ToTop>
          </Title>
          <TopRight className={'right'}>
            <ToTop
              isTrigger={isTrigger}
              index={0}
              style={{ width: '100%' }}
            >
              <img className={'penellagen'} src={illust_penellagen} alt='' />
              <img className={'textLogo'} src={ic_logo_text_white} alt='' />
            </ToTop>
          </TopRight>
        </Top>
        <VideoContainer>
          <iframe style={{width:'100%', height:isMobile?'180px':'680px'}} src="https://www.youtube.com/embed/_QLLh0Cr7KE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoContainer>
        <ContentContainer ref={ref2Object}>
          <ContentSection>
            <Col>
              <SubTitleNumbering
                num={1}
                colorNum={'lightBeige'}
                color={'white'}
              >
                {t('tech1-Part-title1')}
              </SubTitleNumbering>
              <TextBox color={'white'}>
                <p>
                  {t('tech1-exp-s1')}
                </p>
                <p>
                  {t('tech1-exp-s2')}
                </p>
              </TextBox>
              <Exp color='white'>
                {t('tech1-Part-title2')}
              </Exp>
              <SubTitle>
                {t('tech1-Part-title3')} <span>{t('tech1-exp-s3')}</span>
              </SubTitle>
              <Chart
                data={chartData1}
                maxValue={550}
                refObject={refChart1}
                isTrigger={isChart1Trigger}
              />
              <Exp color='lightBeige'>
                {t('tech1-exp-s7')}
              </Exp>
              <Exp color='white'>
                {t('tech1-exp-s8')}
              </Exp>
            </Col>
            <Col>
              <FloatingContainer>
                <IllustPenellagen1 />
              </FloatingContainer>
            </Col>
          </ContentSection>
          <ContentSection>
            <Col>
              <SubTitleNumbering
                num={2}
                colorNum={'lightBeige'}
                color={'white'}
              >
                {t('tech2-Part-title1')}
              </SubTitleNumbering>
              <TextBox color={'white'}>
                <p>
                  {t('tech2-exp-s1')}
                </p>
              </TextBox>
              <Exp color='white'>
                {t('tech1-Part-title2')}
              </Exp>
              <SubTitle>
                {t('tech2-Part-title2')} <span>{t('tech2-exp-s2')}</span>
              </SubTitle>
              <Chart
                data={chartData2}
                maxValue={100}
                refObject={refChart2}
                isTrigger={isChart2Trigger}
                index={0}
              />
              <Exp color='lightBeige'>
                {t('tech2-exp-s6')}
              </Exp>
            </Col>
            <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FloatingContainer>
                <IllustPenellagen2 />
              </FloatingContainer>
            </Col>
          </ContentSection>
          <ContentSection>
            <Col>
              <SubTitle>
                {t('tech2-Part-title3')} <span>{t('tech2-exp-s2')}</span>
              </SubTitle>
              <Chart
                data={chartData3}
                maxValue={100}
                refObject={refChart2}
                isTrigger={isChart2Trigger}
                index={2}
              />
              <Exp color='lightBeige'>
                {t('tech2-chart3-exp')}
              </Exp>
            </Col>
            <Col>
              <SubTitle>
                {t('tech2-Part-title4')} <span>{t('tech2-exp-s2')}</span>
              </SubTitle>
              <Chart
                data={chartData4}
                maxValue={100}
                refObject={refChart2}
                isTrigger={isChart2Trigger}
                index={3}
              />
              <Exp color='lightBeige'>
                {t('tech2-chart4-exp')}
              </Exp>
            </Col>
          </ContentSection>
          <ContentSection>
            <Col6>
              <SubTitle>
                {t('tech2-Part-title5')} <span>{t('tech2-Part-title6')}</span>
              </SubTitle>
              <TableContainer>
                <Table data={tableData} />
              </TableContainer>
              {
                i18n.language !== 'cn' &&
                <ButtonLink>
                  {t('tech2-exp-s25')}
                </ButtonLink>
              }
            </Col6>
            <Col>

            </Col>
          </ContentSection>
        </ContentContainer>
      </Section>
      <BackgrondTransition src={img_bg_wave} alt='' />
    </Container>
  )
}

export default Section4;