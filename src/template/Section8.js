import react, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import emailjs, { init } from 'emailjs-com';

import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
import Exp from '../components/textContainer/Exp';
import TextField from '../components/form/TextField';
import CheckBox from '../components/form/CheckBox';
import Button from '../components/button/Button';
import TextLink from '../components/button/TextLink';

import illust_penellagen from '../assets/img/illust/illust_penellagen_png.png';
import illust_text_section2 from '../assets/img/illust/illust_text_section2.svg';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  input{
    margin-bottom: 12px;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  ${props => props.theme.layout.flexRowCol}
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.contentMarginBottom2};
  @media screen and (max-width: 800px) {
    .penellagen{
      display: none;
    }
  }
`;

const Col1 = styled.div`
  width: 100%;
`;

const ColLeft = styled.div`
  width: calc(60% - 12px);
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ColRight = styled.div`
  width: calc(40% - 12px);
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const Col2 = styled.div`
  width: calc(50% - 12px);
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Penellagen = styled.img`
  @media screen and (max-width: 1280px) {
    width: calc(100% - 56px);
    height: auto;
    display: none;
  }
`;

const ActionBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
  input[type="submit"]{
    margin-right: 80px;
  }
  @media screen and (max-width: 800px) {
    margin-top: -56px;
    flex-direction: column;
    align-items: flex-start;
    input[type="submit"]{
      margin-bottom: 24px;
    }
    .send{
      order: 3
    }
    .check{
      order: 1;
      margin-bottom: 64px;
    }
    .policy{
      order: 2
    }
  }
`;

const TextIllust = styled.div`
  margin: 124px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img{
    width: 90%;
    height: auto;
  }
  @media screen and (max-width: 800px) {
    margin: 64px 0;
  }
`;

const CompanyInfo = styled(Exp)`
  margin-bottom: 128px;
`;

function Section8({
  refObject,
  isTrigger
}) {

  const { t, i18n } = useTranslation();

  // Form Data
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [fax, setFax] = useState('');
  const [email, setEmail] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const setTextValue = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "lastName") {
      setLastName(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "company") {
      setCompany(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "fax") {
      setFax(value);
    } else if (name === "email") {
      setEmail(value);
    }
  }

  const sendEmail = (e) => {
    console.log('click');
    e.preventDefault();
    emailjs.sendForm('service_zr3hr43', 'template_sg7s05z', e.target, 'user_Pmtx7HQbPpKiWx1CZarHy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Container ref={refObject}>
      <Section>
        <ContentBox>
          <ColLeft
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            <Title
              isTrigger={isTrigger}
              color='black'>
              Contact Us
            </Title>
            <Form onSubmit={sendEmail}>
              <Col2>
                <TextField
                  name={'lastName'}
                  label={t('contact-last-name')}
                  type='text'
                  placeholder='성을 입력해주세요'
                  value={lastName}
                  onChange={setTextValue}
                  disabled={false}
                />
              </Col2>
              <Col2>
                <TextField
                  name={'firstName'}
                  label={t('contact-first-name')}
                  type='text'
                  placeholder='이름을 입력해주세요'
                  value={firstName}
                  onChange={setTextValue}
                  disabled={false}
                />
              </Col2>
              <Col1>
                <TextField
                  name={'company'}
                  label={t('contact-company')}
                  type='text'
                  placeholder='회사명을 입력해주세요'
                  value={company}
                  onChange={setTextValue}
                  disabled={false}
                />
              </Col1>
              <Col2>
                <TextField
                  name={'phone'}
                  label={t('contact-mobile')}
                  type='text'
                  placeholder='전화 번호를 입력해주세요'
                  value={phone}
                  onChange={setTextValue}
                  disabled={false}
                />
              </Col2>
              <Col2>
                <TextField
                  name={'fax'}
                  label={t('contact-fax')}
                  type='text'
                  placeholder='팩스 번호를 입력해주세요'
                  value={fax}
                  onChange={setTextValue}
                  disabled={false}
                />
              </Col2>
              <Col1>
                <TextField
                  name={'email'}
                  label={t('contact-email')}
                  type='text'
                  placeholder='이메일을 입력해주세요'
                  value={email}
                  onChange={setTextValue}
                  disabled={false}
                />
              </Col1>
              <ActionBar>
                <input
                  type={"submit"}
                  value={t('btt-send')}
                />
                <CheckBox
                  name={t('contact-exp-policy')}
                  type='checkbox'
                  value={''}
                  className={'check'}
                  onChange={(e) => {
                    console.log(isCheck);
                    setIsCheck(!isCheck);
                  }}
                  checked={isCheck}
                />
                <TextLink
                  className={'policy'}
                >
                  {t('context-view-policy')}
                </TextLink>
              </ActionBar>
            </Form>
          </ColLeft>
          <ColRight
            className={'penellagen'}
            style={{
              textAlign: 'center'
            }}>
            <Penellagen src={illust_penellagen} alt='' />
          </ColRight>
        </ContentBox>
        <TextIllust>
          <img src={illust_text_section2} alt='' />
        </TextIllust>
        <CompanyInfo
          color={'pinkBeige'}
        >
          {t('footer-exp')}
        </CompanyInfo>
      </Section>
    </Container>
  )
}

export default Section8;