import styled from 'styled-components';

import Section from '../components/layout/Section';
import VideoBackground from '../components/videoBackground/VideoBackground';
import video_bg from '../assets/video/video_bg_section1.mp4';

import ic_logo_text_white from '../assets/img/logo/logo_text_white.svg';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

function Section1() {
  return (
    <Container>
      <VideoBackground
        width={'100%'}
        height={'auto'}
        videoSrc={video_bg}
      >
        <Section>
          <img src={ic_logo_text_white} alt='' />
        </Section>
      </VideoBackground>
    </Container>
  )
}

export default Section1;