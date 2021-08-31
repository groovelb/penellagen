import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import disableScroll from 'disable-scroll';
import { useTranslation } from 'react-i18next';

import SelectLanguageModal from '../modal/SelectLanguageModal';

import ic_logo_black from '../../assets/img/logo/logo_black.svg';
import ic_logo_white from '../../assets/img/logo/logo_white.svg';

const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  ${props => props.theme.layout.flexRow}
  ${props => props.theme.layout.alignCenter}
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding:0 ${props => `calc((100% - ${props.theme.spacing.liveArea})/2)`
  };
  color: ${props => {
    switch (props.bgTheme) {
      case 'dark':
        return props.theme.color.white;
      case 'light':
        return props.theme.color.black;
    }
  }};
  transition: color 0.25s ease-in-out;
  @media screen and (max-width: 1024px) {
    height: 64px;
    padding: 0px 12px;
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
  @media screen and (max-width: 1024px) {
    img{
      width: 40px;
      height: 38px;
    } 
  }
`;

const MenuContainer = styled.div`
  ${props => props.theme.layout.flexRow}
  div{
    margin-right: 80px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Menu = styled.div`
  cursor: pointer;
  ${props => props.theme.typeBlock.menu}
`;

const Lang = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  padding-bottom: 2px;
  cursor: pointer;
  background-color: ${props => props.theme.color.beige};
  color: ${props => props.theme.color.white};
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
  ${props => props.theme.typeBlock.body}
`;

const MenuList = [
  'About Penellagen',
  'Skin Technology',
  'Sustainability',
  'Our Move',
  // 'Products',
  'Contact'
];

function GNB({
  bgTheme,
  anchorlist
}) {

  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;


  // SET LANGAUGE MODAL
  const [isLangModal, setIsLangModal] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // i18n.changeLanguage("kr");
    console.log(i18n.language);
  }, [])

  return (
    <Container bgTheme={bgTheme}>
      {
        isLangModal &&
        <SelectLanguageModal
          onClickClose={() => {
            setIsLangModal(false);
            disableScroll.off();
          }}
        />
      }
      <Logo onClick={
        () => {
          scroll.scrollTo(anchorlist['section1']);
        }
      }>
        <img src={bgTheme === 'light' ? ic_logo_black : ic_logo_white} alt='' />
      </Logo>
      <MenuContainer>
        {
          MenuList.map((menu, i) =>
            <Menu
              key={i}
              onClick={() => {
                console.log('click')
                let index = i;
                if(i===4){
                  index = i+1;
                }
                console.log(index + 3);
                scroll.scrollTo(anchorlist[`section${index + 3}`]);
              }}
            >
              {menu}
            </Menu>
          )
        }
      </MenuContainer>
      <Lang
        onClick={
          () => {
            setIsLangModal(!isLangModal);
            disableScroll.on();
          }
        }
        bgTheme={bgTheme}>
        {i18n.language === 'kr' && 'KR'}
        {i18n.language === 'en' && 'EN'}
        {i18n.language === 'cn' && 'CN'}
      </Lang>
    </Container>
  )
}

export default GNB;