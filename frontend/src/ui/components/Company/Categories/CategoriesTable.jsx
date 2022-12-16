import { More } from "iconsax-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import usePagination from "../../../../hooks/usePagination";
import TableComponent from "../../molecules/TableComponent";
import TablePaginate from "../../molecules/TablePaginate";
import { CategoryDataContext } from "./List";

function Update({ setDeleteModal, cancel, setEditModal }) {
  // HOLDS THE EDIT , DELETE AND CANCEL BUTTONS

  const updateRef = useRef();
  useEffect(() => {
    const handleCancel = (e) => {
      if (!updateRef.current.contains(e.target)) {
        cancel(null);
      }
    };
    document.addEventListener("mousedown", handleCancel);
  });

  return (
    <>
      {
        <Container ref={updateRef}>
          <Edit
            onClick={() => {
              setEditModal(true);
              cancel(null);
            }}
          >
            Edit
          </Edit>

          <Delete
            onClick={() => {
              setDeleteModal(true);
              cancel(null);
            }}
          >
            Delete
          </Delete>
        </Container>
      }
    </>
  );
}

const CategoriesTable = ({
  data,
  rowsPerPage,
  handleChange,
  setCategoryDetails,
}) => {
  const [page, setPage] = useState(1);
  const { slice, range } = usePagination(data, page, rowsPerPage);

  const {
    toggleOpen,
    onEditClick,
    // showMore,
    onDeleteClick,
    setOpenUpdate,
    openUpdate,
  } = useContext(CategoryDataContext);

  console.log(slice);
  return (
    <>
      <TableComponent>
        <tbody>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Number of Questions</th>
            <th></th>
          </tr>

          {slice?.map((category, id) => {
            const handleModal = (i) => {
              if (openUpdate === i) {
                setOpenUpdate(null);
              } else {
                setOpenUpdate(i);
              }
            };

            return (
              <tr key={category.id}>
                <td>{rowsPerPage * (page - 1) + id + 1}</td>
                <td>{category.name}</td>
                <td>{category.questions_count || 0}</td>
                <td>
                  <input
                    type="checkbox"
                    name={category.name}
                    value={category.id}
                    onChange={handleChange}
                  />
                  {/* <More onClick={() => toggleOpen(id)} /> */}
                  <More
                    onClick={() => {
                      setCategoryDetails({
                        id: category.id,
                        categoryName: category.name,
                      });
                      handleModal(id);
                      //toggleOpen(id);
                    }}
                  />
                </td>
                {openUpdate === id && (
                  <>
                    <Update
                      cancel={setOpenUpdate}
                      setEditModal={() =>
                        onEditClick(category.name, category.id, id)
                      }
                      setDeleteModal={() =>
                        onDeleteClick(category.name, category.id, id)
                      }
                    />
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </TableComponent>
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

export default CategoriesTable;

export const Container = styled.section`
  width: 112px;
  height: 70px;
  position: absolute;
  right: 180px;
  top: 11px;
  background-color: #fff;
  /* padding: 4px 15px; */
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
  z-index: 1;
  border: none;

  div {
  }
`;
export const Edit = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #323130;
  margin: 1px;
  cursor: pointer;
  padding: 4px 15px;
  :hover {
    background-color: #f8fbfd;
  }
`;
export const Delete = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #b71f1f;
  cursor: pointer;
  padding: 4px 15px;
  :hover {
    background-color: #f8fbfd;
  }
`;
export const Cancel = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #112fb6;
  cursor: pointer;
`;
