import React from "react";
import { useTranslation } from 'react-i18next';
// import Modal from 'react-modal';
import Modal from "./Modal";
import SelectiveButtonList from "../../components/selectionControl/SelectiveButtonList";


const SelectLanguageModal = ({onClickClose}) => {
  // Language
  const { t, i18n } = useTranslation();
  const langaugeList =[
		{
			label: t('lng-kr'),
			value: 'kr'
		},
		{
			label: t('lng-en'),
			value: 'en'
    },
    {
			label: t('lng-cn'),
			value: 'cn'
		}
	];
  
  return (
    <Modal
      title={t('set-lng')}
      onClickClose={onClickClose}
      size={'small'}
    >
      <SelectiveButtonList 
        list={langaugeList}
        selectedItemValue={i18n.language}
        onLanguageChange={(value) => {
          i18n.changeLanguage(value);
          onClickClose();
        }}
      />
    </Modal>
  )
}

export default SelectLanguageModal;