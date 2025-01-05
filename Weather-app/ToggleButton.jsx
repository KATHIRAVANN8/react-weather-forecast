import React from "react";
import Switch from "react-switch";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const ToggleButton = ({ toggle, darkMode }) => {
  return (
    <ToggleContainer>
      <Switch
        onChange={toggle}
        checked={darkMode}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={40}
      />
    </ToggleContainer>
  );
};

export default ToggleButton;
