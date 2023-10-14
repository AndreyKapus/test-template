import styled from "@emotion/styled";

export const MobMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  height: 100%;
  width: 70%;
  display: block;
  background-color: white;
  background-color: orange;
`;

export const MobileMenuBtn = styled.button`
  background-color: transparent;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
