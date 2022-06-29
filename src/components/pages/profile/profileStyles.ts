import styled from "styled-components";

export const StyledCurrentUser = styled.span`
  font-weight: 800;
`;

export const StyledTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 3%;
`;

export const StyledLogOut = styled.button`
  border: none;
  padding: 20px 70px;
  background-color: #f5f5f5;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  &:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`;
