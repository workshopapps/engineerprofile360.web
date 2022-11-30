import React from "react";
import styled from "styled-components";

const Options = (props) => {
  return <StyledOptions selected={props.selected}>{props.value}</StyledOptions>;
};

export default Options;

const StyledOptions = styled.option``;
