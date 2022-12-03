import React from "react";
import styled from "styled-components";
import { Title } from "../../../../styles/reusableElements.styled";
import { Button, Wrapper } from "../../DepartmentSection/components/Hero";
import { CsvData } from "./CsvPreviewData";

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
            Selected(0/4)/
            <span>All</span>/<span>None</span>
          </p>
        </SpanHolder>

        <table>
          <tbody>
            <tr>
              <th>#</th>

              <th>Name</th>
              <th>Username</th>
              <th>Employee Email</th>

              <th>Department</th>
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
        <ButtonWrapper>
          <Wrapper>
            <Button
              type="button"
              onClick={(e) => {
                setAddDept(false);
              }}
              border={"2px solid ##2667FF"}
              w={"117px"}
              h={"48px"}
              text={"#2667FF"}
              bg={"#fff"}
              rounded={"4px"}
              m={" 6px"}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
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
`;
export const CSV = styled.div`
  width: 100%;

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
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
