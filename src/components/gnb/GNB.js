import * as Scroll from 'react-scroll';
import styled from 'styled-components';
import ic_logo_black from '../../assets/img/logo/logo_black.svg';
import ic_logo_white from '../../assets/img/logo/logo_white.svg';

const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  ${ props => props.theme.layout.flexRow }
  ${ props => props.theme.layout.alignCenter }
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding:0 ${
    props => `calc((100% - ${props.theme.spacing.liveArea})/2)`
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
  @media screen and (max-width: 800px) {
    padding: 0px 12px;
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  ${ props => props.theme.layout.flexCol }
  ${ props => props.theme.layout.flexCenter }
`;

const MenuContainer = styled.div`
  ${ props => props.theme.layout.flexRow }
  div{
    margin-right: 80px;
  }
  @media screen and (max-width: 800px) {
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
  background-color: ${ props => props.theme.color.beige };
  color: ${ props => props.theme.color.white };
  ${ props => props.theme.layout.flexCol }
  ${ props => props.theme.layout.flexCenter }
  ${ props => props.theme.typeBlock.body }
`;

const MenuList = [
  'About Penellagen',
  'Skin Technology',
  'Sustainability',
  'Products',
  'Contact'
];

function GNB({
  bgTheme,
  anchorlist
}){

  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  // console.log(bgTheme);
  return (
    <Container bgTheme={bgTheme}>
      <Logo onClick={
        () => {
          scroll.scrollTo(anchorlist['section1']);
        }
      }>
        <img src={bgTheme==='light'?ic_logo_black:ic_logo_white} alt='' />
      </Logo>
      <MenuContainer>
        {
          MenuList.map((menu,i) => 
            <Menu
              key={i}
              onClick={() => {
                console.log('click')
                scroll.scrollTo(anchorlist[`section${i+3}`]);
              }}
            >
              {menu}
            </Menu>
          )
        }
      </MenuContainer>
      <Lang bgTheme={bgTheme}>
        KR
      </Lang>
    </Container>
  )
}

export default GNB;