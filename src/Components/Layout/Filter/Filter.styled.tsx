import styled from "@emotion/styled";
import { MyProps } from "../../../Styles/Theme";

export const FiterBtn = styled.button<MyProps>`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  background-color: transparent;
  color: ${(p) => p.theme.colors.white};
  border: none;
`;
