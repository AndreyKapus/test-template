import AddProject from "../AddProject/AddProject";
import FilterProjects from "../Filter/Filter";
import { useState } from "react";
import { MobMenuWrapper, MobileMenuBtn } from "./MobileMenu.styled";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <button type="button" onClick={onCloseMobileMenu}>
            Close
          </button>
          <div>Mobile menu</div>
          <AddProject />
          <FilterProjects />
        </MobMenuWrapper>
      )}
    </div>
  );
};

export default MobileMenu;
