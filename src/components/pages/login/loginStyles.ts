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
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 2%;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  padding: 20px;
  box-sizing: border-box;
  border: none;
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
`;
