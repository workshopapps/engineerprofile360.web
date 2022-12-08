import React from "react";
import { ContentWhich, Item, Improvement, Script } from "./Market.styled";

const WhichFrag = (props) => {
  return (
    <>
      <ContentWhich>
        <Item>{props.item}</Item>
        <Script>{props.script}</Script>
        <Improvement>{props.improvement}</Improvement>
      </ContentWhich>
    </>
  );
};

export default WhichFrag;
