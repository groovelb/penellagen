import react, { useState } from 'react';
import styled from 'styled-components';

import Section from '../components/layout/Section';
import Title from '../components/textContainer/Title';
import Exp from '../components/textContainer/Exp';
import TextField from '../components/form/TextField';
import CheckBox from '../components/form/CheckBox';
import Button from '../components/button/Button';
import TextLink from '../components/button/TextLink';

// import illust_penellagen from '../assets/img/illust/illust_penellagen.svg';
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


const Col2 = styled.div`
  width: calc(50% - 12px);
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Penellagen = styled.img`
  @media screen and (max-width: 800px) {
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
  button{
    margin-right: 80px;
  }
  @media screen and (max-width: 800px) {
    margin-top: -56px;
    flex-direction: column;
    align-items: flex-start;
    button{
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

  // Form Data
  const [lastName , setLastName] = useState('');
  const [firstName , setFirstName] = useState('');
  const [company , setCompany] = useState('');
  const [phone , setPhone] = useState('');
  const [fax , setFax] = useState('');
  const [email, setEmail] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const setTextValue = (event) => {
    const {
			target: { name, value },
    } = event;
    if(name === "Last Name"){
      setLastName(value);
    } else if(name === "First Name"){
      setFirstName(value);
    } else if(name === "Company"){
      setCompany(value);
    } else if(name === "Phone"){
      setPhone(value);
    } else if(name === "Fax"){
      setFax(value);
    } else if(name === "Email"){
      setEmail(value);
    }
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
            <Col2>
              <TextField
                name='Last Name'
                type='text'
                placeholder='성을 입력해주세요'
                value={lastName}
                onChange={setTextValue}
                disabled={false}
              />
            </Col2>
            <Col2>
              <TextField
                name='First Name'
                type='text'
                placeholder='이름을 입력해주세요'
                value={firstName}
                onChange={setTextValue}
                disabled={false}
              />
            </Col2>
            <Col1>
              <TextField
                name='Company'
                type='text'
                placeholder='회사명을 입력해주세요'
                value={company}
                onChange={setTextValue}
                disabled={false}
              />
            </Col1>
            <Col2>
              <TextField
                name='Phone'
                type='text'
                placeholder='전화 번호를 입력해주세요'
                value={phone}
                onChange={setTextValue}
                disabled={false}
              />
            </Col2>
            <Col2>
              <TextField
                name='Fax'
                type='text'
                placeholder='팩스 번호를 입력해주세요'
                value={fax}
                onChange={setTextValue}
                disabled={false}
              />
            </Col2>
            <Col1>
              <TextField
                name='Email'
                type='text'
                placeholder='이메일을 입력해주세요'
                value={email}
                onChange={setTextValue}
                disabled={false}
              />
            </Col1>
          </ColLeft>
          <ColRight 
            className={'penellagen'}
            style={{
            textAlign: 'center'
          }}>
            <Penellagen src={illust_penellagen} alt='' />
          </ColRight>
        </ContentBox>
        <ActionBar>
          <Button
            className={'send'}
            color={'black'}
            bgColor={'lightBeige'}
          >
            SEND
          </Button>
          <CheckBox
            name='개인정보 보호 정책에 동의합니다.'
            type='checkbox'
            value={''}
            className={'check'}
            onChange={() => {
              console.log('check!');
              setIsCheck(!isCheck);
            }}
            checked={isCheck}
          />
          <TextLink
            className={'policy'}
          >
            개인정보 보호 정책 보기
          </TextLink>
        </ActionBar>
        <TextIllust>
          <img src={illust_text_section2} alt='' />
        </TextIllust>
        <CompanyInfo
          color={'pinkBeige'}
        >
          (주)스타스테크 STAR’s TECH   대표 양승찬   서울특별시 구로구 디지털로 30길 28, 마리오타워 1203호 08389   사업자등록번호 853-87-00953
        </CompanyInfo>
      </Section>
    </Container>
  )
}

export default Section8;