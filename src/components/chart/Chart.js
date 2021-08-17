import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const BarContainer = styled.div`
  ${props => props.theme.layout.flexRow}
  margin-bottom: 32px;
`;

const Label = styled.div`
  ${props => props.theme.typeBlock.body}
  width: 80px;
  margin-right: 24px;
  color: ${props => props.theme.color.white};
  opacity: ${props => props.isTrigger?1:0.3};
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: ${props => `${props.index*0.3 + 0.5}s`};
`;

const Bar = styled.div`
  height: 32px;
  border-radius: 16px;
  width: ${props => props.isTrigger?`calc(${props.value / props.maxValue}*(100% - 104px))`:0};
  opacity: ${props => props.isTrigger?1:0.3};
  transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-delay: ${props => `${props.index*0.3 + 0.5}s`};
  min-width: 48px;
  ${props => props.theme.layout.flexRow}
  ${props => props.theme.layout.alignCenter}
  justify-content: flex-end;
  padding-right: 24px;

  background-color: ${props => {
    switch (props.bgColor) {
      case 'lightBeige':
        return props.theme.color.lightBeige;
      case 'beige':
        return props.theme.color.beige;
      case 'pinkBeige':
        return props.theme.color.pinkBeige;
      case 'emeraldGreen':
        return props.theme.color.emeraldGreen;
      case 'greenTea':
        return props.theme.color.greenTea;
      case 'pinkOrange':
        return props.theme.color.pinkOrange;
      case 'white':
        return props.theme.color.white;
      case 'black':
        return props.theme.color.black;
    }
  }
  };

  color: ${props => {
    switch (props.color) {
      case 'lightBeige':
        return props.theme.color.lightBeige;
      case 'beige':
        return props.theme.color.beige;
      case 'pinkBeige':
        return props.theme.color.pinkBeige;
      case 'emeraldGreen':
        return props.theme.color.emeraldGreen;
      case 'greenTea':
        return props.theme.color.greenTea;
      case 'pinkOrange':
        return props.theme.color.pinkOrange;
      case 'white':
        return props.theme.color.white;
      case 'black':
        return props.theme.color.black;
    }
  }
  };
`;

const BarZero = styled.div`
    color: ${props => {
    switch (props.color) {
      case 'lightBeige':
        return props.theme.color.lightBeige;
      case 'beige':
        return props.theme.color.beige;
      case 'pinkBeige':
        return props.theme.color.pinkBeige;
      case 'emeraldGreen':
        return props.theme.color.emeraldGreen;
      case 'greenTea':
        return props.theme.color.greenTea;
      case 'pinkOrange':
        return props.theme.color.pinkOrange;
      case 'white':
        return props.theme.color.white;
      case 'black':
        return props.theme.color.black;
    }
  }
  };
`;

function Chart({
  data,
  maxValue,
  refObject,
  isTrigger,
  index
}) {

  return (
    <Container ref={refObject}>
      {
        data.map((datum, i) => (
          <BarContainer key={i}>
            <Label
              isTrigger={isTrigger}
              index={i}
            >
              {datum.label}
            </Label>
            {
              datum.value===0?
              <BarZero color='white'>
                {datum.value}
              </BarZero>:
              <Bar
                bgColor={i === 0 ? 'pinkOrange' : 'white'}
                color={i === 0 ? 'white' : 'beige'}
                value={datum.value}
                maxValue={maxValue}
                isTrigger={isTrigger}
                index={i}
              >
                {datum.value}
              </Bar>
            }
            
          </BarContainer>
        ))
      }
    </Container>
  );
}

export default Chart;