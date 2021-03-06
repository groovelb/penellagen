import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  // Transition
  top: ${props => props.isTrigger?'0px':'80px'};
  opacity: ${props => props.isTrigger?'1':'0'};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index*0.2}s`};
`;

function ToTop ({
  children,
  className,
  isTrigger,
  index,
  style
}){
  return (
    <Container
      index={index}
      isTrigger={isTrigger}
      className={className}
      style={style}
    >
      {children}
    </Container>
  )
}

export default ToTop;