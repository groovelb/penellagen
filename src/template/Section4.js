import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import theme from '../assets/theme/theme';

import Section from '../components/layout/Section';
import Chart from '../components/chart/Chart';

import ButtonLink from '../components/button/ButtonLink';

import ToTop from '../components/motion/ToTop';
import Title from '../components/textContainer/Title';
import SubTitleNumbering from '../components/textContainer/SubTitleNumbering';
import SubTitle from '../components/textContainer/SubTitle';
import TextBox from '../components/textContainer/TextBox';
import Exp from '../components/textContainer/Exp';
import Table from '../components/table/Table';

import img_bg from '../assets/img/background/img_bg_section4.jpg';
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
  @media screen and (max-width: 800px) {
    div{ 
      width: 100% !important;
      margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
    }
  }
`;

const TopRight = styled.div`
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.alignCenter}
  .penellagen{
    width: 256px;
    height: auto;
    margin-top: 32px;
    margin-bottom: 16px;
  }
  .textLogo{
    width: 480px;
    height: auto;
    @media screen and (max-width: 800px) {
      width: calc(100% - 48px);
      height: auto;
    }
  }
  
  
`;

const VideoContainer = styled.div`
  width: 1280px;
  height: 714px;
  background-color: #000;
  margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    height: 240px;
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
  margin-bottom: ${props => props.theme.spacing.subsectionMarginBottom};
`;

const Col = styled.div`
  width: 50%;
  @media screen and (max-width: 800px) {
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

const Penellagen = styled.div`
  width: 100%;
  text-align: center;
  img{
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 800px) {
    img{
      width: calc(100% - 48px);
      height: auto;
    }
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
  isTrigger,
  refChart1,
  refChart2,
  isChart1Trigger,
  isChart2Trigger
}) {

  const chartData1 = [
    {
      label: '페넬라겐',
      value: 523.7
    },
    {
      label: '파쉬콜라겐',
      value: 90.7
    },
    {
      label: '돈피콜라겐',
      value: 0
    }
  ];

  const chartData2 = [
    {
      label: '페넬라겐',
      value: 93.8
    },
    {
      label: '파쉬콜라겐',
      value: 84.2
    },
    {
      label: '돈피콜라겐',
      value: 81
    }
  ];

  const tableData = [
    [
      {
        value: '',
        isHighlight: false
      },
      {
        value: '증류수 \n 0.0%',
        isHighlight: false
      },
      {
        value: '페넬라겐 \n 0.3%',
        isHighlight: false
      },
      {
        value: '페넬라겐 \n 3.0%',
        isHighlight: false
      },
    ],
    [
      {
        value: '반응속도',
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
        value: '자극지수',
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
        value: '판정',
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
                Penetration (피부침투) + Collagen (콜라겐) = Penellagen
              </Exp>
            </ToTop>
          </Title>
          <TopRight className={'right'}>
            <ToTop
              isTrigger={isTrigger}
              index={0}
              style={{ textAlign: 'center', width: '100%' }}
            >
              <img className={'penellagen'} src={illust_penellagen} alt='' />
              <img className={'textLogo'} src={ic_logo_text_white} alt='' />
            </ToTop>
          </TopRight>
        </Top>
        <VideoContainer>
        </VideoContainer>
        <ContentContainer>
          <ContentSection>
            <Col>
              <SubTitleNumbering
                num={1}
                colorNum={'lightBeige'}
                color={'white'}
              >
                진피층 침투 기술
              </SubTitleNumbering>
              <TextBox color={'white'}>
                <p>
                  속이 비어있는 채로 진피층에 도달하는 타 전달체들과 달리 인지질 2중층막에
                  특수성분을 결합시킨 새로운 탄성 에토좀으로 진피층까지 도달하는 것은 물론,
                  90%에 가까운 불가사리 콜라겐 펩티드 성분을 담을 수 있습니다.
                </p>

                <p>
                  이를 통해 속이 꽉 찬 상태로 유연하게 진피층까지 이동해 콜라겐 펩티드를
                  효과적으로 전달시킬 수 있는 세계 최초의 기술을 탄생시켰습니다.
                </p>
              </TextBox>
              <Exp color='white'>
                동일한 TDS 기준 담재효율을 적용한
              </Exp>
              <SubTitle>
                실제 피부 투과율 <span>단위: mg / cm² / h</span>
              </SubTitle>
              <Chart
                data={chartData1}
                maxValue={550}
                refObject={refChart1}
                isTrigger={isChart1Trigger}
              />
              <Exp color='lightBeige'>
                * 인공피부 피부 투과율(SKIN PAMPA Assay)
              </Exp>
              <Exp color='white'>
                * 세계적인 논문 Journal of Industrial and Engineering Chemistry 에 해당 내용 개제
              </Exp>
            </Col>
            <Col>
              <Penellagen>
                <img src={illust_penellagen} alt='' />
              </Penellagen>
            </Col>
          </ContentSection>
          <ContentSection>
            <Col>
              <SubTitleNumbering
                num={2}
                colorNum={'lightBeige'}
                color={'white'}
              >
                불가사리 콜라겐 펩티드
              </SubTitleNumbering>
              <TextBox color={'white'}>
                <p>
                  죽지 않는 불가사리 재생의 원천 성분으로써
                  항산화성, 미백효과와 주름 억제 능력이 매우 뛰어나고
                  독성과 피부 자극이 없어 믿고 사용할 수 있는 안전한 성분입니다.
                </p>
              </TextBox>
              <Exp color='white'>
                동일한 TDS 기준 담재효율을 적용한
              </Exp>
              <SubTitle>
                세포 생존율 <span>단위: %</span>
              </SubTitle>
              <Chart
                data={chartData2}
                maxValue={100}
                refObject={refChart2}
                isTrigger={isChart2Trigger}
              />
              <Exp color='lightBeige'>
                * 0.2, 0.4, 0.6, 0.8, 1.0mg/mL 투여시, HDF 세포 대상 MTT Assay 결과 평균값
              </Exp>
            </Col>
            <Col>
              <Penellagen>
                <img src={illust_penellagen} alt='' />
              </Penellagen>
            </Col>
          </ContentSection>
          <ContentSection>
            <Col6>
              <SubTitle>
                반응도 및 자극성 평가 <span>ICDRG 판정 기준</span>
              </SubTitle>
              <TableContainer>
                <Table data={tableData} />
              </TableContainer>
              <ButtonLink>
                실험 & 기능성 데이터 다운로드
              </ButtonLink>
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