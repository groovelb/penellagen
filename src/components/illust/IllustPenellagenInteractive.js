import React, { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import * as d3 from "d3";
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  position: relative;
`;

const CellShell = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
  background-image: linear-gradient(47deg, rgba(232,254,224,0.72) 0%, rgba(170,131,123,0.48) 98%);
  border: 3px solid rgba(255,255,255,0.48);
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
  box-shadow: 0px 0px 48px rgba(237,225,221,0.8);
  opacity: ${props => props.isTrigger ? '1' : '0.5'};
  transform: ${props => props.isTrigger ? 'rotate(0deg)' : 'rotate(360deg)'};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index * 0.2}s`};
  @media screen and (max-width: 480px) {
    margin-top: 48px;
  }
`;

const CellInside = styled.div`
  position: relative;
  width: ${props => `${isMobile ? (props.size - 56) : (props.size - 96)}px`};
  height: ${props => `${isMobile ? (props.size - 56) : (props.size - 96)}px`};
  border-radius: 50%;
  border: 6px solid rgba(255,255,255,0.24);
  background-color: rgba(255,255,255,0.48);
  box-shadow: 0px 0px 48px rgba(255,225,255,0.8);
  opacity: ${props => props.isTrigger ? '1' : '0'};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index * 0.2}s`};
`;

const Floating = keyframes`
  0% { transform: translatey(0px); }
  50% { transform: translatey(-2px); }
  10% { transform: translatey(0px); }
`;

const Cell = styled.div`
  position: absolute;
  top: ${props => `${props.y - (props.size / 12)}px`};
  left: ${props => `${props.x - (props.size / 12)}px`};
  width: ${props => `${props.size / 6}px`};
  height: ${props => `${props.size / 6}px`};
  border-radius: 50%;
  background-image: radial-gradient(closest-corner at 40% 40%, rgba(255,255,255,0.82) 36%, rgba(170,131,123,0.96) 100%);
  border: ${isMobile ? '2px' : '3px'} solid rgba(255,255,255,0.64);
  opacity: ${props => props.isTrigger ? '1' : '0'};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index * 0.2}s`};
  animation: ${Floating} 3s ease-in-out infinite;
  animation-delay: ${props => `${(props.index % 4) * 0.5}s`};
`;

const ExpContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 248px;
  bottom: ${props => `${props.bottom}px`};
  right: ${props => `${props.right}px`};
  opacity: ${props => props.isTrigger ? '1' : '0'};
  transition: all 1s ease-out;
  transition-delay: ${props => `${props.index * 0.2}s`};
  text-shadow: 0px 0px 8px rgba(0,0,0,0.48);
  @media screen and (max-width: 480px) {
    width: 224px;
  }
`;

const ExpLine1 = styled.div`
  width: 48px;
  height: 48px;
  border-top: solid 1px #fff;
  transform: rotate(45deg);
  position: relative;
  top: ${props => props.type==='peptides'?'23.2px':'23.2px'};
  left: ${props => props.type==='peptides'?'-9.4px':'-9.4px'};
  @media screen and (max-width: 480px) {
    
  }
`;

const ExpLine2 = styled.div`
  width: 224px;
  height: 48px;
  border-bottom: solid 1px #fff;
  justify-content: flex-end;
  padding-right: 12px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    width: 180px;
  }
`;

let cellList = [
  { x: 5.5, y: 2 },
  { x: 4, y: 2.5 },
  { x: 2.5, y: 4 },
  { x: 2.2, y: 5.5 },
  { x: 3, y: 7 },
  { x: 1.5, y: 7.5 },
  { x: 2.8, y: 8.5 },
  { x: 2, y: 10.5 },
  { x: 4, y: 10.9 },
  { x: 5, y: 12 },
  { x: 7.5, y: 11.5 },
  { x: 9, y: 12.5 },
  { x: 10, y: 11 },
  { x: 11.5, y: 10.7 },
  { x: 12, y: 9.5 },
  { x: 12.5, y: 7.5 },
  { x: 11.8, y: 5.7 },
  { x: 10.5, y: 4.5 },
  { x: 8.6, y: 4.8 },
  { x: 7.5, y: 6 },
];



function IllustPenellagen({
  size,
  isTrigger,
  type
}) {

  const { t, i18n } = useTranslation();

  return (
    <Container>
      <CellShell
        size={size}
        index={0}
        isTrigger={isTrigger}
      >
        <CellInside
          size={size}
          index={2}
          isTrigger={isTrigger}
        >
          {
            cellList.map((cell, i) => {
              let unit = isMobile ? 13 : 24;
              return (
                <Cell
                  size={size}
                  x={cell.x * unit}
                  y={cell.y * unit}
                  index={i * 0.25 + 3}
                  isTrigger={isTrigger}
                >
                </Cell>
              )
            }
            )
          }
        </CellInside>
      </CellShell>
      <ExpContainer
        type={type}
        index={4}
        bottom={isMobile?24:56}
        right={isMobile?-48:-72}
        isTrigger={isTrigger}
      >
        <ExpLine1 />
        <ExpLine2>
          {t('tech2-Refer-title1')}
        </ExpLine2>
      </ExpContainer>
    </Container>

  )
}

export default IllustPenellagen;