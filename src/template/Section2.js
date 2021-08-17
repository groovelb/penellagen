import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
import VideoBackground from '../components/videoBackground/VideoBackground';
import ToTop from '../components/motion/ToTop';

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
  @media screen and (max-width: 800px) {
    width: calc(100% - 48px);
    height: auto;
    margin-bottom: ${props => `calc(${props.theme.spacing.unit} * 6)`};
  }
  .msg1{
    top: -64px;
    position: absolute;
    z-index: 9;
    margin-bottom: 0;
    @media screen and (max-width: 800px) {
      top: -32px;
    }
  }
  .msg2{
    bottom: -64px;
    position: absolute;
    z-index: 9;
    margin-bottom: 0;
    ${props => props.theme.typeBlock.msgBig}
    @media screen and (max-width: 800px) {
      bottom: -32px;
    }
  }
`;

const Subtitle = styled.div`
  ${props => props.theme.typeBlock.body}
  color: ${props => props.theme.color.pinkBeige};
  margin-bottom: ${props => `calc(${props.theme.spacing.unit} * 9)`};
  @media screen and (max-width: 800px) {
    margin-bottom: ${props => `calc(${props.theme.spacing.unit} * 4)`};
  }
`;


const Exp = styled.div`
  text-align: center;
  ${props => props.theme.typeBlock.body}
  color: ${props => props.theme.color.black};
  margin-bottom: ${props => `calc(${props.theme.spacing.unit} * 3)`};
  @media screen and (max-width: 800px) {
    /* text-align: left; */
    width: 65%;
    p{
      width: 100%;
    }
  }
`;

const Logo = styled.img`
  margin: ${props => `calc(${props.theme.spacing.unit} * 8)`} 0;
  @media screen and (max-width: 1280px) {
    margin: ${props => `calc(${props.theme.spacing.unit} * 3)`} 0;
  }
`;

const TextIllust = styled.img`
  @media screen and (max-width: 1280px) {
    width: calc(100% - 48px);
  }
`;

function Section2({
  refObject,
  isTrigger,
  isVideoPlay
}) {

  // Language
  const { t, i18n } = useTranslation();

  return (
    <Container ref={refObject}>
      <Section>
        <Subtitle>
          <ToTop
            isTrigger={isTrigger}
            index={0}
          >
            {t('story-sub-title')}
          </ToTop>

        </Subtitle>
        <VideoBox>
          <Title
            color={'black'}
            className={'msg1'}
          >
            <ToTop
              isTrigger={isTrigger}
              index={1}
            >
              Brand
            </ToTop>
          </Title>
          <ToTop
            isTrigger={isTrigger}
            index={2}
          >
            <VideoBackground
              width={'100%'}
              height={'100%'}
              videoSrc={video_bg}
              isVideoPlay={isVideoPlay}
            />
          </ToTop>
          <Title
            color={'black'}
            className={'msg2'}
          >
            <ToTop
              isTrigger={isTrigger}
              index={3}
            >
              Story
            </ToTop>
          </Title>
        </VideoBox>
        <Exp>
          <ToTop
            isTrigger={isTrigger}
            index={4}
          >
            <p>
              {t('story-exp-s1')}<br />
              {t('story-exp-s2')}<br />
              {t('story-exp-s3')}
            </p>

          </ToTop>
        </Exp>
        <Exp>
          <ToTop
            isTrigger={isTrigger}
            index={5}
          >
            <p>
              <strong>
                {t('story-exp-s4')}<br />
                {t('story-exp-s5')}
              </strong>
            </p>
          </ToTop>
        </Exp>
        <ToTop
          isTrigger={isTrigger}
          index={6}
        >
          <Logo src={ic_logo_black} alt='' />
          <TextIllust src={illust_text_section1} alt='' />
        </ToTop>
      </Section>
    </Container>
  )
}

export default Section2;