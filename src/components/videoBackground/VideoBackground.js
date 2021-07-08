import styled from 'styled-components';
import ReactPlayer from 'react-player';
// import videoSrc from '../../assets/video/video_bg_section1.mp4';


const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
      />
      <Content>
        {children}
      </Content>
      
    </Container>
  )
}

export default VideoBackground;