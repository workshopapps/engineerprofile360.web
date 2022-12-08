import React from "react";
import styled from "styled-components";
import Oops from "../components/assets/404.svg";
import { Button, Title } from "../../styles/reusableElements.styled";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Container>
      <img src={Oops} alt="" />
      <Title $color="#263238" $size="33px">
        Oops! Why you're here?
      </Title>
      <Title
        $size="16px"
        $lHeight="20px"
        $weight="400"
        $color="#A2A2A2"
        $align="center"
        style={{ textAlign: "center" }}
      >
        We are very sorry for inconvience. It looks like you're trying to access
        a page <br /> that either has been deleted or never even existed.
      </Title>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
