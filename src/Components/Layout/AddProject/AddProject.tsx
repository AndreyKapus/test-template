import { useEffect, useState } from "react";
import { AddProjectBtn } from "./AddProject.styled";

const AddProject = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const screenWidth = window.screen.width;
    setWidth(screenWidth);
  }, [width]);

  return (
    <>
      {width < 768 ? (
        <AddProjectBtn type="button">Add project</AddProjectBtn>
      ) : (
        <div>
          <div>New project</div>
          <div>Contacts</div>
        </div>
      )}
    </>
  );
};

export default AddProject;
