import styled from 'styled-components';
import ReactPlayer from 'react-player';
// import videoSrc from '../../assets/video/video_bg_section1.mp4';


const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  :after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.24);
    z-index: 9;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
`;


function VideoBackground({
    videoSrc,
    width,
    height,
    children
  }){
  return(
    <Container>
      <ReactPlayer
        url={videoSrc}
        playing
        loop
        muted
        width={width}
        height={height}
        style={{display: 'flex'}}
      />
      <Content>
        {children}
      </Content>
      
    </Container>
  )
}

export default VideoBackground;