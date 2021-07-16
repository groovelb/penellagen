import styled from 'styled-components';
// import theme from '../assets/theme/theme';

import Section from '../components/layout/Section';
import VideoBackground from '../components/videoBackground/VideoBackground';
import video_bg from '../assets/video/video_section3.mp4';

import Title from '../components/textContainer/Title';
import TextBox2to1 from '../components/textContainer/TextBox2to1';
import ToLeft from '../components/motion/ToLeft';
import ToRight from '../components/motion/ToRight';
import ToTop from '../components/motion/ToTop';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  position: relative;
  .video_pc{
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

const VideoBox = styled.div`
  position: absolute;
  top: 12px;
  left: 372px;
  width: ${props => props.isTrigger ? '690px' : '800px'};
  height: 112px;
  opacity: ${props => props.isTrigger ? '1' : '1'};
  border-radius: ${props => props.isTrigger ? '0px 0px 0px 32px;' : '0px 0px 0px 0px'};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index * 0.2}s`};
  overflow: hidden;
  @media screen and (max-width: 800px) {
    position: static;
    border-radius: 0px;
    width: 100%;
    height: auto;
  }
`;

const VideoToLeft = styled(ToLeft)`
  border-radius: ${props => props.isTrigger ? '0px 0px 0px 32px;' : '0px 0px 0px 0px'};
  height: 100%;
  overflow: hidden;
`;

const ContentBox = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRowCol}
  ${props => props.theme.typeBlock.body}
  .video_mobile{
    display: none;
    @media screen and (max-width: 800px) {
      display: inline-block !important;
      margin-top: -64px;
      margin-bottom: 24px;
    }
  }
`;

function Section3({
  refObject,
  isTrigger
}) {
  return (
    <Container ref={refObject}>
      <Section>
        <Top>
          <Title
            color={'pinkBeige'}
            isTrigger={isTrigger}
          >
            <ToRight
              isTrigger={isTrigger}
              index={0}
            >
              Brand <br />
              Philosophy
            </ToRight>
          </Title>
          <VideoBox
            className='video_pc'
            isTrigger={isTrigger}
            index={1}
          >
            <VideoToLeft
              isTrigger={isTrigger}
              index={1}
            >
              <VideoBackground
                width={'100%'}
                height={'100%'}
                videoSrc={video_bg}
              />
            </VideoToLeft>
          </VideoBox>
        </Top>
        <ContentBox>
          <TextBox2to1 color={'pinkBeige'}>
            <ToTop
              isTrigger={isTrigger}
              index={3}
            >
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
            </ToTop>

          </TextBox2to1>
          <VideoBox className='video_mobile'>
            <VideoBackground
              width={'100%'}
              height={'100%'}
              videoSrc={video_bg}
            />
          </VideoBox>
          <TextBox2to1 color={'black'}>
            <ToTop
              isTrigger={isTrigger}
              index={4}
            >
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
            </ToTop>
          </TextBox2to1>
        </ContentBox>
      </Section>
    </Container>
  )
}

export default Section3;