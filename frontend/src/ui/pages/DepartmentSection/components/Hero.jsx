import React, { useEffect } from "react";
import styled from "styled-components";
import { Title } from "../../../../styles/reusableElements.styled";
import { useState } from "react";
import bubble from "../assets/bubble.png";

import AddDept from "./AddDept";
import axios from "axios";

function Hero() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingData, setIsEditingData] = useState();
  const [addDept, setAddDept] = useState(false);
  const [formData, setFormData] = useState("");

  const departmentData = [
    "Mechanical Engineering",
    "Bismuth Engineering",
    "Software Engineering",
    "Aerospace Engineering",
    "Computer Engineering ",
  ];
  const handleEdit = (e) => {
    setIsEditingData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    // COULD NOT ADD DATA THROUGH THE ADD DATA ENDPOINT, SO I'M USING LOCAL STORAGE TO SIMULATE USER EXPERIENCE..
    //  axios.get(`http://localhost:3000​/department​/`).then((res) => {
    //  setIsEditingData(res.data);
    //  console.log(isEditingData);
    // });
  }, []);

  return (
    <>
      <Container>
        <Title as="h2" $size="28px" $color="#1E1E1E" $weight="600">
          Departments
        </Title>
        {addDept && (
          <AddDept
            formData={formData}
            setFormData={setFormData}
            setAddDept={setAddDept}
          />
        )}
        <CRUDContainer>
          <Button
            onClick={() => {
              setAddDept(true);
            }}
            w={"197px"}
            h={"44px"}
            text={"white"}
            bg={"#2667ff"}
            rounded={"4px"}
            fs={"14px"}
            fw={"400"}
            lh={"20px"}
            border={"2px solid #2667ff"}
          >
            Add New Department{" "}
          </Button>
          <Wrapper>
            {!isEditing ? (
              <Button
                onClick={() => {
                  setIsEditing(true);
                }}
                w={"120px"}
                h={"35px"}
                text={"#323130"}
                bg={"#fff"}
                rounded={"4px"}
                fs={"16px"}
                fw={"400"}
                lh={"20px"}
                border={"2px solid #2667ff"}
                m={" 6px"}
              >
                Edit
              </Button>
            ) : (
              <Button
                onClick={(e) => {
                  handleEdit(e);
                  setIsEditing(false);
                }}
                w={"120px"}
                h={"35px"}
                text={"#323130"}
                bg={"#fff"}
                rounded={"4px"}
                fs={"16px"}
                fw={"400"}
                lh={"20px"}
                border={"2px solid #2667ff"}
                m={"6px"}
              >
                Apply Change
              </Button>
            )}
            <Button
              w={"120px"}
              h={"35px"}
              text={"#A4262C"}
              bg={"#fff"}
              rounded={"4px"}
              fs={"16px"}
              fw={"400"}
              lh={"20px"}
              border={"2px solid #A4262C"}
              m={" 6px"}
            >
              Delete
            </Button>
          </Wrapper>
        </CRUDContainer>
        <table>
          <tbody>
            <tr>
              <th>#</th>

              <th>Department</th>
              <th>No of Staffs</th>
              <th>Available Assessments</th>

              <th>Action</th>
            </tr>
            {departmentData.map((department, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td contentEditable={isEditing}>{department}</td>
                  <td>0</td>
                  <td>0</td>

                  <td>
                    <Button
                      w={"201px"}
                      h={"42px"}
                      text={"#2667ff"}
                      bg={"#fff"}
                      rounded={"4px"}
                      fs={"16px"}
                      fw={"400"}
                      lh={"20px"}
                      border={"2px solid #2667ff"}
                      m={" 0"}
                    >
                      View Departments
                    </Button>
                  </td>
                  <td>
                    <Bubble src={bubble} alt="bubble" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default Hero;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  margin-top: 96px;

  gap: 20px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  tr {
    margin: 15px 0;
  }
`;

export const Button = styled.button`
  cursor: pointer;

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.text};
  border-radius: ${(props) => props.rounded};
  outline: none;
  border: ${(props) => props.border};
  background-color: ${(props) => props.bg};
  transition: all 0.3s ease-in;
  margin: ${(props) => props.m};

  &:hover {
    background-color: ${(props) => props.text};
    color: ${(props) => props.bg};
    border: none;
    border: ${(props) => props.border};
    cursor: pointer;
  }

  @media (min-width: 746px) {
    width: ${(props) => props.w};
    height: ${(props) => props.h};
  }
`;

export const CRUDContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Bubble = styled.img`
  padding-right: 40px;
`;
