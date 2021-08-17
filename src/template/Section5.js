import styled from '../components/chart/node_modules/styled-components';
import { useTranslation } from 'react-i18next';

import ToTop from '../components/motion/ToTop';

import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
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

const CustomSection = styled(Section)`
  padding-bottom: 0px !important;
`;  

const ContentSection = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRowCol}
  margin-bottom: ${props => props.theme.spacing.subsectionMarginBottom};
`;

function Section5({
    refObject,
    isTrigger
  }) {

  const { t, i18n } = useTranslation();

  return (
    <Container ref={refObject}>
      <CustomSection>
        <Title
          color={'white'}
        >
          <ToTop
            isTrigger={isTrigger}
            index={0}
          >
            Sustainability <br />
            to Protect <br />
            Our Sea
          </ToTop>
        </Title>
        <ToTop
            isTrigger={isTrigger}
            index={1}
          >
          <ContentSection>
          <TextBoxTitled2to1
            title={`${t('tech3-Part-title1')} 
            ${t('tech3-Part-title2')}
            ${t('tech3-Part-title3')}
            `}
            titleColor={'greenTea'}
            bodyColor={'white'}
          >
            <p>
              {t('tech3-exp-s1')}
            </p>
            <p>
              <span>{t('tech3-exp-s2')}</span>
            </p>
            <p>
              {t('tech3-exp-s3')}
            </p>
          </TextBoxTitled2to1>
          <TextBoxTitled2to1
            title={`${t('tech3-Part-title4')} 
            ${t('tech3-Part-title5')}
            ${t('tech3-Part-title6')}
            `}
            titleColor={'pinkOrange'}
            bodyColor={'white'}
          >
            <p>
              {t('tech3-exp-s4')} <span>{t('tech3-exp-s5')}</span> 
              {t('tech3-exp-s6')}
            </p>
            <p>
              {t('tech3-exp-s7')}
            </p>
            <p>
              {t('tech3-exp-s8')} 
              <span> {t('tech3-exp-s9')}</span>
              {t('tech3-exp-s10')}
            </p>
            <p>
              
            </p>
          </TextBoxTitled2to1>
        </ContentSection>
        </ToTop>
      </CustomSection>
      {/* <img src={img_bg_transition_green_beige} alt='' /> */}
    </Container>
  )
}

export default Section5;