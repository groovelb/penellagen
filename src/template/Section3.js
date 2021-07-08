import styled from 'styled-components';
// import theme from '../assets/theme/theme';

import Section from '../components/layout/Section';
import VideoBackground from '../components/videoBackground/VideoBackground';
import video_bg from '../assets/video/video_section3.mp4';

import Title from '../components/textContainer/Title';
import TextBox2to1 from '../components/textContainer/TextBox2to1';

import illust_handle from '../assets/img/illust/illust_handle_light_pink.svg';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  position: relative;
`;

// const Title = styled.div`
//   ${props => props.theme.typeBlock.msgBig}
//   color: ${props => props.theme.color.pinkBeige};
//   margin-bottom: ${props => props.theme.spacing.titleMarginBottom};
// `;

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
  ${props => props.theme.typeBlock.body}
  /* div:nth-child(1){
    width: 50%
  }
  div:nth-child(2){
    width: 50%
  }
  @media screen and (max-width: 800px) {
    div{ 
      width: 100% !important;
    }
  } */
`;

const Handle = styled.div`
  position: absolute;
  bottom: 0;
  left: calc((100% - 264px)/2);
  width: 264px;
  height: 132px;
  overflow: hidden;
`;

function Section3() {
  return (
    <Container>
      <Section>
        <Top>
          <Title color={'pinkBeige'}>
            Brand <br />
            Philosophy
          </Title>
          <VideoBox>
            <VideoBackground
              width={'100%'}
              height={'100%'}
              videoSrc={video_bg}
            />
          </VideoBox>
        </Top>
        <ContentBox>
          <TextBox2to1 color={'pinkBeige'}>
            <p>
              페넬라겐은 2021년 스타스테크가 론칭한 화장품 원료 브랜드로서
              콜라겐 화장품에 대한 소비자의 인식 수준을 높이고
              이를 충족시킬 수 있는 유일한 기술력을 바탕으로 수준 높은 제품을 생산합니다.
          </p>
            <p>
              페넬라겐은 2021년 스타스테크가 론칭한 화장품 원료 브랜드로서
              콜라겐 화장품에 대한 소비자의 인식 수준을 높이고
              이를 충족시킬 수 있는 유일한 기술력을 바탕으로 수준 높은 제품을 생산합니다.
          </p>
          </TextBox2to1>
          <TextBox2to1 color={'black'}>
            <p>
              페넬라겐의 핵심 가치는 뛰어난 기술력에 있습니다.
          </p>
            <p>
              아무리 뛰어난 성분이라도 피부의 각질층을 뚫지 못한다면 아무런 소용이 없기에
              페넬라겐 연구원들은 유효한 성분을 피부 진피층까지 확실하게 전달해 줄 수 있는
              ‘콜라겐 펩티드 TDS’기술을 개발했습니다.
          </p>
            <p>
              콜라겐 펩티드 TDS 기술을 바탕으로 탄생한 화장품 원료 페넬라겐은
              인체 생체막의 중요한 구성 성분인 인지질과 특수 성분으로 만들어진 탄성 에토좀에 불가사리에서 추출한 친환경 콜라겐 펩티드를 가득 담은 원료로
              피부 진피층까지 도달하여 피부에 흡수되는데 성공한 최초의 콜라겐 원료입니다.
          </p>
          </TextBox2to1>
        </ContentBox>
      </Section>
      <Handle>
        <img src={illust_handle} alt='' />
      </Handle>
    </Container>
  )
}

export default Section3;