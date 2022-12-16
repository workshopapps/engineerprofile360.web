import React, { createContext, useContext, useEffect } from "react";
import styled from "styled-components";
import { OverlayLoader } from "../../../../../styles/reusableElements.styled";
import { useState } from "react";
import { AddCircle } from "iconsax-react";
import AddDept, { Load } from "./AddDept";
import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
import { CategoryListing } from "../../Categories/List";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { toast } from "react-toastify";
import PageInfo from "../../../molecules/PageInfo";
import DepartmentsTable from "./DepartmentsTable";

export const DepartmentsDataContext = createContext(null);

function Hero() {
  //? useState HOOKS
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [AllDept, setAllDept] = useState([]);
  const [addDept, setAddDept] = useState(false);
  const [formData, setFormData] = useState("");

  const [openUpdate, setOpenUpdate] = useState(null);
  const [runEffect, setRunEffect] = useState(false);
  const [loading, setLoading] = useState(true);

  const [departmentDetails, setDepartmentDetails] = useState({
    id: "",
    departmentName: "",
  });

  //! USE AUTH
  const { auth } = useAuth();
  const org_id = auth.org_id;

  //? ASYNC FUNCTION TO FETCH DEPARTMENTS
  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        ` https://api.eval360.hng.tech/api/department/company/${org_id}`
      );

      setAllDept(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("could not fetch  departments");
    }
  };
  useEffect(() => {
    fetchDepartments();
  }, [runEffect]);

  return (
    <>
      <DepartmentsDataContext.Provider
        value={{
          departmentDetails,
          setDepartmentDetails,
          openUpdate,
          setOpenUpdate,
        }}
      >
        {editModal && (
          <EditModal
            setEditModal={setEditModal}
            departmentDetails={departmentDetails}
            setRunEffect={setRunEffect}
            cancel={setOpenUpdate}
          />
        )}
        {deleteModal && (
          <DeleteModal
            setDeleteModal={setDeleteModal}
            departmentDetails={departmentDetails}
            setRunEffect={setRunEffect}
            cancel={setOpenUpdate}
          />
        )}
        <Container>
          {/* <Title as="h2" $size="28px" $color="#1E1E1E" $weight="600">
          Departments
        </Title> */}

          <PageInfo pageTitle="Departments" />
          {addDept && (
            <AddDept
              formData={formData}
              setFormData={setFormData}
              setAddDept={setAddDept}
              setRunEffect={setRunEffect}
              runEffect={runEffect}
            />
          )}
          <CRUDContainer>
            <Button
              onClick={() => {
                setAddDept(true);
              }}
              w={"240px"}
              h={"42px"}
              text={"#fff"}
              bg={"#106ebe"}
              rounded={"4px"}
              fs={"14px"}
              fw={"400"}
              lh={"20px"}
              border={"2px solid #106ebe"}
              m={" 0"}
            >
              <AddCircle color="#FFFFFF" style={{ marginRight: "10px" }} /> Add
              New Department
            </Button>
          </CRUDContainer>
          {loading ? (
            // lOADER COMPONENT
            <OverlayLoader contained>
              <div></div>
              <span>Just a moment...</span>
            </OverlayLoader>
          ) : (
            <CategoryListing>
              <DepartmentsTable
                data={AllDept}
                rowsPerPage={5}
                editModal={setEditModal}
                deleteModal={setDeleteModal}
              />
            </CategoryListing>
          )}
        </Container>
      </DepartmentsDataContext.Provider>
    </>
  );
}
export default Hero;
// STYLED COMPONENTS
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
  border: ${(props) => props.border || "#2667ff"};
  background-color: ${(props) => props.bg};
  transition: all 0.3s ease-in;
  margin: ${(props) => props.m};

  &:hover {
    /* background-color: ${(props) => props.text}; */
    color: ${(props) => props.bg};
    border: none;
    border: ${(props) => props.border};
    cursor: pointer;
    //Hover State
    background-color: #106ebe;
    color: #fff;
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
  /* margin: 30px 0; */
  margin: 0px 0;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
