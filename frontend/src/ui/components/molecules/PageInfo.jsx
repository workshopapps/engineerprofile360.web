import React from "react";
import styled from "styled-components";

import arrowRight from "../../../assets/icons/app/arrow-right.svg";
import { Title } from "../../../styles/reusableElements.styled";

const PageInfo = ({ breadcrumb, pageTitle }) => {
  return (
    <PageInfoContainer>
      {breadcrumb && (
        <BreadCrumb>
          {breadcrumb.map((item, index) => (
            <Item key={index}>
              <span>{item}</span>
              <img src={arrowRight} alt="" />
            </Item>
          ))}
        </BreadCrumb>
      )}
      {pageTitle && (
        <Title $color="#323130" $size="28px" $weight="600">
          {pageTitle}
        </Title>
      )}
    </PageInfoContainer>
  );
};

export default PageInfo;

const PageInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  span {
    color: #6e6e6e;
    text-transform: capitalize;
  }
`;

const BreadCrumb = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Item = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
