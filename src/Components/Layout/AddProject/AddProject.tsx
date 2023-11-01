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
          <div>Add project</div>
          <div>Add filter</div>
          <div>Add project</div>
        </div>
      )}
    </>
  );
};

export default AddProject;
