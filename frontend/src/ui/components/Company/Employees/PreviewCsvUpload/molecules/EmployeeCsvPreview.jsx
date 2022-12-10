import React from "react";
import styled from "styled-components";
import { Title } from "../../../../../../styles/reusableElements.styled";
import { Button, Wrapper } from "../../../Departments/Hero";
import { CsvData } from "./CsvPreviewData";
import { CategoryListing } from "../../../Categories/List";

function EmployeeCsvPreview() {
  return (
    <>
      <Container>
        <CSV>
          <Title as="h3" $size="18px" $color="#323130" $weight="400">
            CSV Preview
          </Title>
        </CSV>
        <SpanHolder>
          <p>
            {" "}
            Selected(0/7)/
            <span>All</span>/<span>None</span>
          </p>
        </SpanHolder>
        <CategoryListing>
          <table>
            <tbody>
              <tr>
                <th>#</th>

                <th>Name</th>
                <th>Username</th>
                <th>Employee Email</th>

                <th>Department</th>
                <th></th>
              </tr>
              {CsvData.map((data, index) => {
                const { name, employee_email, username, department } = data;
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{employee_email}</td>

                    <td>{department}</td>
                    <td>
                      <Checkbox type="checkbox" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CategoryListing>
        <ButtonWrapper>
          <Wrapper>
            <Button
              type="button"
              border={"1px solid #2667FF"}
              w={"117px"}
              h={"48px"}
              text={"#2667FF"}
              bg={"transparent"}
              rounded={"4px"}
              m={" 6px"}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              border={"1px solid #2667FF"}
              w={"117px"}
              h={"48px"}
              text={"#fff"}
              bg={"#2667FF"}
              rounded={"4px"}
              m={" 6px"}
            >
              Submit
            </Button>
          </Wrapper>
        </ButtonWrapper>
      </Container>
    </>
  );
}

export default EmployeeCsvPreview;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c7e0f4;
  padding: 15px;
  border-radius: 16px;
`;
export const CSV = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

export const SpanHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  p {
    font-weight: 600;
    font-size: 16px;
    color: #605e5c;
  }

  span {
    color: #2667ff;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  color: #323130;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Td = styled.td``;
export const Tr = styled.tr`
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
`;

export const Tbody = styled.tbody``;
