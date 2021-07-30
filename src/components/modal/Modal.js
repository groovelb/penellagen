import React from "react";
import styled from "styled-components";
import IcClose from "../../assets/img/icon/ic_close.svg";

const Backdrop = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  ${props => props.theme.layout.flexCol}
  ${props => props.theme.layout.flexCenter}
  background-color: rgba(0,0,0,0.32);
`;

const Content = styled.div`
  position: relative;
  width: ${props => {
    if(props.size==='small') return '480px';
    if(props.size==='medium') return '680px';
    if(props.size==='small') return '860px';
  }};
  padding: 24px;
  color: ${ props => props.theme.color.black};
  background-color: ${ props => props.theme.color.white};
  border-radius: 2px;
  @media only screen and (max-width: 480px) {
    width: calc(100% - 24px);
  }
`

const Title = styled.p`
  ${props => props.theme.typeBlock.subtitle}
  margin-bottom: 48px;
  text-align: left;
`;

const Close = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 12px;
  top: 12px;
`;

const Modal = ({
  children,
  onClickClose,
  title,
  size
}) => {
  return (
    <Backdrop onClick={onClickClose}>
      <Content
        size={size}
        onClick={
          (e) => {
            e.stopPropagation();
          }
        }
      >
        <Close onClick={onClickClose}>
          <img src={IcClose} alt='' />
        </Close>
        <Title>
          {title}
        </Title>
        {children}
      </Content>
    </Backdrop>
  )
};

export default Modal;