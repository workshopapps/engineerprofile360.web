import React from "react";
import styled from "styled-components";

import HelpSearch from "../components/HelpCenter/HelpSearch";
import HelpTopics from "../components/HelpCenter/HelpTopics";
import FeaturedArticle from "../components/HelpCenter/FeaturedArticle";

const HelpCenter = () => {
  return (
    <HelpCenterContainer>
      <HelpSearch />
      <HelpTopics />
      <FeaturedArticle />
    </HelpCenterContainer>
  );
};

export default HelpCenter;

const HelpCenterContainer = styled.div`
  max-width: 1440px;
  margin-bottom: 100px;
`;
