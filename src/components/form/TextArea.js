import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-top: 14px;
  width: 100%;
  textarea{
    width: 100%;
    ${props => props.theme.typeBlock.body}
    padding-bottom: 3px;
  }
`;

const Label = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  ${props => props.theme.typeBlock.body}
  color: ${props => props.theme.color.black};
  padding: 4px;
`;

const InputLabeled = ({
  name,
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
  className,
  disabled,
  accept
}) => {
  return (
    <Container className={className}>
      <Label>
        {label}
      </Label>
      <textarea
        disabled={disabled}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        accept={accept}
      />
    </Container>
  );
}

export default InputLabeled;