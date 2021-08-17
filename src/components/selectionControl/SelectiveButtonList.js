import React from "react";
import styled from "../chart/node_modules/styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 128px;
  height: 36px;
	border-radius: 2px;
  margin: 0px 8px 8px 0px;
  ${props => props.theme.layout.flexColCenter}
  ${
    props => props.isSelected?
      `
        border: solid 2px ${props.theme.color.blueLight700};
        color: ${props.theme.color.blueLight700};`:
      `
        border: solid 2px ${props.theme.color.black300};
        color: ${props.theme.color.black300};
      `
  }
`;

const SelectiveButtonList = ({
  list,
  selectedItemValue,
  onLanguageChange
}) => {
  return (
    <Container>
      {
        list.map((item) =>
          <Button
            isSelected={item.value === selectedItemValue}
            onClick={() => {
              onLanguageChange(item.value);
            }}
          >
            {item.label}
          </Button>
        )
      }
    </Container>
  );
}

export default SelectiveButtonList;