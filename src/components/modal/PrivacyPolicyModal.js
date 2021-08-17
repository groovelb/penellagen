import React from "react";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
// import Modal from 'react-modal';
import Modal from "./Modal";
import Button from "../button/Button";

const ActionBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const PrivacyPolicyModal = ({ onClickClose }) => {
  // Language
  const { t, i18n } = useTranslation();

  return (
    <Modal
      title={''}
      onClickClose={onClickClose}
      size={'small'}
    >
      <p style={{ whiteSpace: 'break-spaces' }}>
        {t('privacy-policy')}
      </p>
      <ActionBar>
        <Button
          onClick={onClickClose}
          bgColor={'pinkBeige'}
          color={'white'}
        >
          {t('confirm')}
        </Button>
      </ActionBar>
    </Modal>
  )
}

export default PrivacyPolicyModal;