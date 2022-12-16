import React, { useContext, useState } from "react";
import usePagination from "../../../../hooks/usePagination";
import TableComponent from "../../molecules/TableComponent";
import TablePaginate from "../../molecules/TablePaginate";
import { More } from "iconsax-react";
import Update from "./Update";
import { DepartmentsDataContext } from "./Hero";
import styled from "styled-components";
import { Button, Title } from "../../../../styles/reusableElements.styled";

const DepartmentsTable = ({ data, rowsPerPage, editModal, deleteModal }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = usePagination(data, page, rowsPerPage);

  const { setDepartmentDetails, openUpdate, setOpenUpdate } = useContext(
    DepartmentsDataContext
  );

  return (
    <>
      <TableComponent>
        <tbody>
          <tr>
            <th>#</th>

            <th>Department</th>
            <th>No of Staffs</th>
            <th>Available Assessments</th>

            <th>Action</th>
          </tr>

          {slice.length > 0
            ? slice?.map((department, index) => {
                const {
                  name: departmentName,
                  id,
                  assessment_count: assessmentCount,
                  employee_count: employeeCount,
                } = department;

                const handleModal = (i) => {
                  if (openUpdate === i) {
                    setOpenUpdate(null);
                  } else {
                    setOpenUpdate(index);
                  }
                };
                return (
                  <tr key={id}>
                    <td>{rowsPerPage * (page - 1) + index + 1}</td>
                    <td>{departmentName}</td>
                    <td>{employeeCount}</td>
                    <td>{assessmentCount}</td>
                    <td>
                      {/* <Button
                              disabled
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
                            </Button> */}
                      <More
                        onClick={() => {
                          handleModal(index);
                          setDepartmentDetails({
                            id: id,
                            departmentName: departmentName,
                          });
                        }}
                      />

                      {openUpdate === index && (
                        <Update
                          cancel={setOpenUpdate}
                          setEditModal={editModal}
                          setDeleteModal={deleteModal}
                        />
                      )}
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </TableComponent>
      {slice.length > 0 ? (
        ""
      ) : (
        <NoTableData>
          <p>Oops! you have no departments to show.</p>
          <p>Create a New Department.</p>
        </NoTableData>
      )}
      <br />
      <br />
      <TablePaginate
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
      />
    </>
  );
};

export default DepartmentsTable;

const NoTableData = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
`;
