import styled from 'styled-components';
import theme from '../assets/theme/theme';

import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
import SubTitleNumbering from '../components/textContainer/SubTitleNumbering';
import SubTitle from '../components/textContainer/SubTitle';
import TextBoxTitled2to1 from '../components/textContainer/TextBoxTitled2to1';
import img_bg_transition_green_beige from '../assets/img/background/img_bg_transition_green_beige.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.emeraldGreen};
  color: ${props => props.theme.color.white};
  img{
    margin-top: -80px;
    width: 100%;
    height: auto;
  }
`;

const ContentSection = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRowCol}
  margin-bottom: ${props => props.theme.spacing.subsectionMarginBottom};
`;


function Section5() {
  return (
    <Container>
      <Section>
        <Title color={'white'}>
          Sustainability <br />
          to Protect <br />
          Our Sea
        </Title>
        <ContentSection>
          <TextBoxTitled2to1
            title={'믿기지 \n 않는 재생력 \n 불가사리'}
            titleColor={'greenTea'}
            bodyColor={'white'}
          >
            <p>
              不可殺伊<br/>
              죽일 수 없다’라는 뜻의 이름을 가진 불가사리는 강력한 세포 재생능력을 가진 해양생물입니다.
            </p>
            <p>
              <span>불가사리 한 마리를 작게 10조각 내면 한 조각도 빠짐없이 재생해 10마리의 온전한 불가사리가 될 정도이죠.</span>
            </p>
            <p>
              이러한 놀라운 재생 능력으로 인해 그 개체 수가 걷잡을 수없이 증가하고 있으며 이제는 바다의 포식자로 불리고 있습니다.
            </p>
          </TextBoxTitled2to1>
          <TextBoxTitled2to1
            title={'바다를 \n 뒤덮은 \n 불가사리'}
            titleColor={'pinkOrange'}
            bodyColor={'white'}
          >
            <p>
              不可殺伊<br/>
              죽일 수 없다’라는 뜻의 이름을 가진 불가사리는 강력한 세포 재생능력을 가진 해양생물입니다.
            </p>
            <p>
              <span>불가사리 한 마리를 작게 10조각 내면 한 조각도 빠짐없이 재생해 10마리의 온전한 불가사리가 될 정도이죠.</span>
            </p>
            <p>
              이러한 놀라운 재생 능력으로 인해 그 개체 수가 걷잡을 수없이 증가하고 있으며 이제는 바다의 포식자로 불리고 있습니다.
            </p>
          </TextBoxTitled2to1>
        </ContentSection>
      </Section>
      <img src={img_bg_transition_green_beige} alt='' />
    </Container>
  )
}

export default Section5;