import styled from "../chart/node_modules/styled-components";

// Styling Code Using Plus Selector In GlobalStyle @ App.js.
const Container = styled.div`
  position: relative;
  width: 320px;
  input{
    visibility: hidden;
  }
`;

const Label = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0px;
  position: absolute;
  top: 0;
  width: 28px;
  :after{
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 6px;
    opacity: 1;
    position: absolute;
    top: 7px;
    transform: rotate(-45deg);
    width: 12px;
  }
  :checked + label{
    background-color: #66bb6a;
    border-color: #66bb6a;
  }
  :checked:after{
    opacity: 1;
  }
  span{
    position: absolute;
    top: -2px;
    left: 0px;
    width: 280px;
    padding-left: 36px;
    padding-bottom: 4px;
    color: ${props => props.theme.color.pinkBeige};
  }
`;

const InputLabeled = ({
  name,
  type,
  placeholder,
  required,
  checked,
  onChange,
  className,
  disabled,
  accept
}) => {
  return (
    <Container className={className}>
      <input
        disabled={disabled}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        checked={checked}
        accept={accept}
      />
      <Label onClick={onChange}>
        <span>{name}</span>
      </Label>
    </Container>
  );
}

export default InputLabeled;