import React from "react";
import styled from "styled-components";

const Options = (props) => {
  return (
    <StyledOptions defaultValue={props.selected}>{props.value}</StyledOptions>
  );
};

export default Options;

const StyledOptions = styled.option``;
