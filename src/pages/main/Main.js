import styled from 'styled-components';
import Section from '../../components/layout/Section';
import theme from '../../assets/theme/theme';

import GNB from '../../components/gnb/GNB';
import Section1 from '../../template/Section1';
import Section2 from '../../template/Section2';
import Section3 from '../../template/Section3';
import Section4 from '../../template/Section4';

const Container = styled.div`
  width: 100%;
  background-color: ${theme.color.bg};
`;

function Main() {
  return (
    <Container>
      <GNB />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Container>
  )
}

export default Main;