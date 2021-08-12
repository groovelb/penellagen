import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  width: calc(100% - 496px);
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
      margin-top: -48px;
      margin-bottom: ${props => props.theme.spacing.contentMarginBottom1};
    }
  }
`;

function Section3({
  refObject,
  isTrigger,
  isVideoPlay
}) {

  // Language
  const { t, i18n } = useTranslation();

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
                isVideoPlay={isVideoPlay}
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
                {t('brand-exp-s1')}
              </p>
              <p>
                {t('brand-exp-s2')}
              </p>
            </ToTop>

          </TextBox2to1>
          <VideoBox className='video_mobile'>
            <VideoBackground
              width={'100%'}
              height={'100%'}
              videoSrc={video_bg}
              isVideoPlay={isVideoPlay}
            />
          </VideoBox>
          <TextBox2to1 color={'black'}>
            <ToTop
              isTrigger={isTrigger}
              index={4}
            >
              <p>
                {t('brand-exp-s3')}
              </p>
              <p>
                {t('brand-exp-s4')}
              </p>
              <p>
                {t('brand-exp-s5')}
              </p>
              <p>
                <strong>{t('brand-exp-s6')}</strong>
              </p>
            </ToTop>
          </TextBox2to1>
        </ContentBox>
      </Section>
    </Container>
  )
}

export default Section3;