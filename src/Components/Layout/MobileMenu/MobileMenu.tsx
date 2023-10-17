import AddProject from "../AddProject/AddProject";
import FilterProjects from "../Filter/Filter";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  MobMenuWrapper,
  MobileMenuBtn,
  CloseBtn,
  MobMenuTitle,
} from "./MobileMenu.styled";

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    !openMobileMenu && setOpenMobileMenu(true);
    console.log(openMobileMenu);
  };

  const onCloseMobileMenu = () => {
    openMobileMenu && setOpenMobileMenu(false);
  };

  return (
    <div>
      <MobileMenuBtn type="button" onClick={toggleMobileMenu}>
        <GiHamburgerMenu />
      </MobileMenuBtn>
      {openMobileMenu && (
        <MobMenuWrapper>
          <CloseBtn type="button" onClick={onCloseMobileMenu}>
            <AiOutlineClose color="fff" width="24px" height="24px" />
          </CloseBtn>
          <MobMenuTitle>Controls</MobMenuTitle>
          <AddProject />
          <FilterProjects />
        </MobMenuWrapper>
      )}
    </div>
  );
};

export default MobileMenu;
