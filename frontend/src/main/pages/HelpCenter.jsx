import React from "react";
import styled from "styled-components";

import HelpSearch from "../components/HelpCenter/HelpSearch";
import HelpTopics from "../components/HelpCenter/HelpTopics";

const HelpCenter = () => {
  return (
    <HelpCenterContainer>
      <HelpSearch />
      <HelpTopics />
    </HelpCenterContainer>
  );
};

export default HelpCenter;

const HelpCenterContainer = styled.div`
  max-width: 1440px;
`;
