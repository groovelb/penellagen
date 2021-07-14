import styled from 'styled-components';
import {isMobile} from 'react-device-detect';
import Section from '../components/layout/Section';
import VideoBackground from '../components/videoBackground/VideoBackground';
import video_bg_section1_pc from '../assets/video/video_bg_section1_pc.mp4';
import video_bg_section1_mobile from '../assets/video/video_bg_section1_mobile.mp4';

import ic_logo_text_white from '../assets/img/logo/logo_text_white.svg';

const Container = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
`;

const Logo = styled.img`
  @media screen and (max-width: 800px) {
    width: calc(100% - 64px);
    height: 48px;
  }
`;

function Section1({
  refObject,
  isTrigger
}) {
  return (
    <Container ref={refObject}>
      <VideoBackground
        width={'100%'}
        height={'auto'}
        videoSrc={isMobile?video_bg_section1_mobile:video_bg_section1_pc}
      >
        <Section>
          <Logo src={ic_logo_text_white} alt='' />
        </Section>
      </VideoBackground>
    </Container>
  )
}

export default Section1;