import React, { useEffect } from "react";
import styled from "styled-components";
import { Title } from "../../../../styles/reusableElements.styled";
import { useState } from "react";
import bubble from "../assets/bubble.png";

import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import AddDept from "./AddDept";
import axios from "axios";

const departmentData = [
  {
    id: 1,
    departmentName: "Software Engineering",
    numberOfStaffs: "30",
    availableAssessments: "20",
  },

  {
    id: 2,
    departmentName: "Software Mechanotronic",
    numberOfStaffs: "350",
    availableAssessments: "44",
  },

  {
    id: 3,
    departmentName: "Bazzman Engineering",
    numberOfStaffs: "440",
    availableAssessments: "245",
  },
];

function Hero() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingData, setIsEditingData] = useState();
  const [addDept, setAddDept] = useState(false);
  const [formData, setFormData] = useState({
    departmentName: "",

    generalId: 12345,
  });

  const { generalId } = FormData;
  const handleEdit = (e) => {
    setIsEditingData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // useEffect(() => {
  //   axios.get(`http://localhost:3000​/department​/${generalId}`).then((res) => {
  //     setIsEditingData(res.data);
  //     console.log(isEditingData);
  //   });
  // }, []);

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
              console.log("love");
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
              const {
                id,
                departmentName,
                numberOfStaffs,
                availableAssessments,
              } = department;

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td contentEditable={isEditing}>{departmentName}</td>
                  <td contentEditable={isEditing}>{numberOfStaffs}</td>
                  <td contentEditable={isEditing}>{availableAssessments}</td>

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
