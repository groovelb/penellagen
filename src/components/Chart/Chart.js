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
`;

const Bar = styled.div`
  height: 32px;
  border-radius: 16px;
  width: ${props => `calc(${props.value / props.maxValue}*(100% - 104px))`};
  min-width: 48px;
  ${props => props.theme.layout.flexRow}
  ${props => props.theme.layout.alignCenter}
  justify-content: flex-end;
  padding-right: 12px;

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

function Chart({
  data,
  maxValue
  }){

  return (
    <Container>
      {
        data.map((datum, i) => (
          <BarContainer key={i}>
            <Label>
              {datum.label}
            </Label>
            <Bar
              bgColor={i === 0 ? 'pinkOrange' : 'white'}
              color={i === 0 ? 'white' : 'beige'}
              value={datum.value}
              maxValue={maxValue}
            >
              {datum.value + '%'}
            </Bar>
          </BarContainer>
        ))
      }
    </Container>
  );
}

export default Chart;