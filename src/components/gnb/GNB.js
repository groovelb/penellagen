import styled from 'styled-components';
import ic_logo_black from '../../assets/img/logo/logo_black.svg';

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
  @media screen and (max-width: 800px) {
    padding: 0px 12px;
  }
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  ${ props => props.theme.layout.flexCol }
  ${ props => props.theme.layout.flexCenter }
`;

const MenuContainer = styled.div`
  ${ props => props.theme.layout.flexRow }
  div{
    margin-right: 48px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
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
  'About',
  'Technology',
  'Sustainability',
  'Products',
  'Contact'
];

function GNB(){
  return (
    <Container>
      <Logo>
        <img src={ic_logo_black} alt='' />
      </Logo>
      <MenuContainer>
        {
          MenuList.map((menu) => 
            <div>
              {menu}
            </div>
          )
        }
      </MenuContainer>
      <Lang>
        KR
      </Lang>
    </Container>
  )
}

export default GNB;