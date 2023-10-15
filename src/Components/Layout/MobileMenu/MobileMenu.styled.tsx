import styled from "@emotion/styled";
import { MyProps } from "../../../Styles/Theme";

export const MobMenuWrapper = styled.div<MyProps>`
  position: absolute;
  top: 0;
  left: 0px;
  height: 100%;
  width: 70%;
  display: block;
  background-color: white;
  background-color: ${(p) => p.theme.colors.accent};
`;

export const MobileMenuBtn = styled.button`
  background-color: transparent;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const CloseBtn = styled.button<MyProps>`
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
`;
