import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import * as d3 from "d3";
import styled, { keyframes } from '../chart/node_modules/styled-components';
import { useTranslation } from 'react-i18next';

import illust_penellagen from '../../assets/img/illust/illust_penellagen1.png';

const Container = styled.div`
  position: relative;
  img{
    width: 464px;
    height: 464px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const ExpContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 248px;
  bottom: ${props => `${props.bottom}px`};
  right: ${props => `${props.right}px`};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index * 0.2}s`};
  text-shadow: 0px 0px 8px rgba(0,0,0,0.48);
  ${props => props.theme.typeBlock.caption}
  @media screen and (max-width: 480px) {
    width: 224px;
  }
`;

const ExpLine1 = styled.div`
  width: 64px;
  height: 64px;
  border-top: solid 1px #fff;
  transform: rotate(45deg);
  position: relative;
  top: 70px;
  left: -14px;
  @media screen and (max-width: 480px) {
    
  }
`;

const ExpLine2 = styled.div`
  width: 248px;
  /* height: 96px; */
  padding-bottom: 16px;
  padding-left: 48px;
  border-bottom: solid 1px #fff;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  text-align: right;
  @media screen and (max-width: 480px) {
    width: 180px;
  }
`;

function IllustPenellagen({
  isTrigger,
  type
}) {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <img src={illust_penellagen} alt='' />
      <ExpContainer
        bottom={isMobile?24:102}
        right={isMobile?-48:-48}
      >
        {/* <ExpLine1 /> */}
        <ExpLine2>
          {t('tech-Refer-title1')}
        </ExpLine2>
      </ExpContainer>
    </Container>

  )
}

export default IllustPenellagen;