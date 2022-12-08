import React from "react";
import {
  Box,
  Content,
  Logo,
  SubContent,
  Title,
  WriteUp,
} from "./Market.styled";

const HowFrag = (props) => {
  return (
    <>
      <Box>
        <Content>
          <Logo src={props.logo} alt="" />
          <SubContent>
            <Title>{props.title}</Title>
            <WriteUp>{props.writeUp}</WriteUp>
          </SubContent>
        </Content>
      </Box>
    </>
  );
};

export default HowFrag;
