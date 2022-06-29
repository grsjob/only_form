import styled from "styled-components";

export const StyledForm = styled.form`
  width: 730px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 16px;
`;

export const StyledLabelForCheckbox = styled.label`
  margin-bottom: 2%;
  position: relative;
  font-size: 19px;
  line-height: 28px;
  padding-left: 35px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    background-color: #fff;
    border: 3px solid #fff;
    outline: 1px solid #000;
  }
`;

export const StyledLableForInput = styled.label`
  margin-bottom: 1%;
  color: #1f1f1f;
  font-size: 19px;
  line-height: 28px;
`;

export const StyledInput = styled.input`
  min-height: 60px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  padding: 20px;
  box-sizing: border-box;
  border: ${(props) => (props.errors ? `1px solid red` : `none`)};
`;
export const StyledInputWrapper = styled.div`
  position: relative;
  margin-bottom: 4%;
`;
export const StyledError = styled.p`
  margin: 0;
  padding: 0;
  color: red;
  position: absolute;
  bottom: -22px;
  left: 0;
`;

export const StyledCheckbox = styled.input`
  margin-right: 10%;
  &:checked + .lableCheckbox:before {
    background-color: #4a67ff;
  }
`;

export const StyledSubmitButton = styled.button`
  min-height: 60px;
  background-color: #4a67ff;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  line-height: 22px;
  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`;

export const StyledServerError = styled.p`
  background-color: #f5e9e9;
  border: 1px solid #e26f6f;
  padding: 22px 55px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  position: relative;
  &:after {
    content: "!";
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20px;
    left: 20px;
    color: #ee6565;
    background-color: #ffc8c8;
    border-radius: 50%;
  }
`;
