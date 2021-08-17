import styled from '../components/chart/node_modules/styled-components';
import {isMobile} from 'react-device-detect';
import Section from '../components/layout/Section';
import VideoBackground from '../components/videoBackground/VideoBackground';
import ToTop from '../components/motion/ToTop';

import video_bg_section1_pc from '../assets/video/video_bg_section1_pc.mp4';
import video_bg_section1_mobile from '../assets/video/video_bg_section1_mobile.mp4';

import useWindowSize from '../hook/useWindowSize';
import ic_logo_text_white from '../assets/img/logo/penellagen_logo_white.svg';

const Container = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  .center{
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 564px;
  height: auto;
  @media screen and (max-width: 800px) {
    width: calc(100% - 64px);
    height: 48px;
  }
`;

function Section1({
  refObject,
  isTrigger,
  isVideoPlay
}) {

  const windowSize = useWindowSize();

  return (
    <Container ref={refObject}>
      <VideoBackground
        isVideoPlay={isVideoPlay}
        width={windowSize.width}
        height={windowSize.height}
        isFilter={true}
        videoSrc={isMobile?video_bg_section1_mobile:video_bg_section1_pc}
      >
        <Section>
          <ToTop
            className={'center'}
            isTrigger={isTrigger}
            index={0}
          >
            <Logo src={ic_logo_text_white} alt='' />
          </ToTop>
        </Section>
      </VideoBackground>
    </Container>
  )
}

export default Section1;