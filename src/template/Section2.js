import styled from 'styled-components';

import Section from '../components/layout/Section';
import VideoBackground from '../components/videoBackground/VideoBackground';
import video_bg from '../assets/video/video_square_section2.mp4';
import ic_logo_black from '../assets/img/logo/logo_black.svg';
import illust_text_section1 from '../assets/img/illust/illust_text_section1.svg';

const Container = styled.div`
  width: 100%;
  div{
    ${props => props.theme.layout.flexCol}
    ${props => props.theme.layout.flexCenter}
  }
  color: ${props => props.theme.color.black};
`;

const VideoBox = styled.div`
  position: relative;
  width: 640px;
  height: 360px;
  margin-bottom: ${props => `calc(${props.theme.spacing.unit} * 9)`};
`;

const Subtitle = styled.p`
  ${props => props.theme.typeBlock.body}
  color: ${props => props.theme.color.pinkBeige};
  margin-bottom: ${props => `calc(${props.theme.spacing.unit} * 9)`};
`;

const Msg1 = styled.div`
  top: -64px;
  position: absolute;
  z-index: 9;
  ${props => props.theme.typeBlock.msgBig}
`;

const Msg2 = styled.div`
  bottom: -64px;
  position: absolute;
  z-index: 9;
  ${props => props.theme.typeBlock.msgBig}
`;

const Exp = styled.div`
  text-align: center;
  ${props => props.theme.typeBlock.body}
  color: ${props => props.theme.color.black};
  margin-bottom: ${props => `calc(${props.theme.spacing.unit} * 3)`};
`;

const Logo = styled.img`
  margin: ${props => `calc(${props.theme.spacing.unit} * 8)`} 0;
`;

const TextIllust = styled.img`

`;

function Section2() {
  return (
    <Container>
      <Section>
        <Subtitle>
          당신의 바다, 당신의 항해
        </Subtitle>
        <VideoBox>
          <Msg1>
            Brand
          </Msg1>
          <VideoBackground
            width={'100%'}
            height={'100%'}
            videoSrc={video_bg}
          />
          <Msg2>
            Story
          </Msg2>
        </VideoBox>
        <Exp>
          당신은 좋은 화장품 원료를 찾아 바다를 항해합니다. <br/>
          그 과정이 쉽지 만은 않을 거예요. <br/>
          때로는 파도를 만나 멈추기도 하고, 잘못된 선택을 하여 되돌아오는 경우도 있겠죠.
        </Exp>
        <Exp>
          당신은 좋은 화장품 원료를 찾아 바다를 항해합니다. <br/>
          그 과정이 쉽지 만은 않을 거예요. <br/>
          때로는 파도를 만나 멈추기도 하고, 잘못된 선택을 하여 되돌아오는 경우도 있겠죠.
        </Exp>
        <Logo src={ic_logo_black} alt=''/>
        <TextIllust src={illust_text_section1} alt='' />
      </Section>
    </Container>
  )
}

export default Section2;