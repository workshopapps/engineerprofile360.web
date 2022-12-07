import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

import Modal from "../../Modal";
import useAuth from "../../../../hooks/useAuth";
import axios from "../../../../api/axios";
import CategoryForm from "./CategoryForm";
import DeleteModal from "./DeleteModal";
import { showErrorToast } from "../../../../helpers/helper";
import { showSuccessToast } from "../../../../helpers/helper";

import { More } from "iconsax-react";
import { Button } from "../../../../styles/reusableElements.styled";
import { click } from "@testing-library/user-event/dist/click";

const List = () => {
  const { auth } = useAuth();

  // USE STATES
  const [toggleCreateCat, setToggleCreateCat] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [toggleMaxDelete, setToggleMaxDelete] = useState(false);
  const [categories, setCategories] = useState([]);
  const [updateCategories, setUpdateCategories] = useState(false);
  const [showMore, setShowMore] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    categoryId: [],
  });

  // USE REFS
  const currentSelectedName = useRef();
  const currentSelectedId = useRef();

  console.log(value.categoryId);

  useEffect(() => {
    const getAllCatgories = async () => {
      const response = await axios.get(`/category/company/${auth.org_id}`);
      setCategories(response.data.data);
    };

    getAllCatgories();
  }, [updateCategories]);

  const toggleOpen = (id) => {
    setShowMore({
      ...showMore,
      [id]: !showMore[id],
    });
  };

  const handleChange = (e, id) => {
    const { value: indValue, checked } = e.target;
    const { categoryId } = value;

    if (checked) {
      setValue({
        categoryId: [...categoryId, indValue],
      });
    } else {
      setValue({
        categoryId: categoryId.filter((e) => e !== indValue),
      });
    }
  };
  const handleEdit = () => {};

  const onDeleteClick = (name, cat_id, id) => {
    setToggleDelete(true);
    currentSelectedName.current = name;
    currentSelectedId.current = cat_id;
    setShowMore({
      ...showMore,
      [id]: !showMore[id],
    });
  };

  const onBulkDeleteClick = () => {
    setToggleMaxDelete(true);
  };

  // Fucntions to be passed to the Delete Modal
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `category/${currentSelectedId.current}/${auth.org_id}/delete`
      );
      if (response.data.errorState === false) {
        setToggleDelete(false);
        setIsLoading(false);
        setUpdateCategories(!updateCategories);
        showSuccessToast(response.data.message);
      }
    } catch (err) {
      setIsLoading(false);
      if (!err.response) {
        showErrorToast("No server response");
      } else {
        showErrorToast(err.response.data.message);
      }
    }
  };

  const handleBulkDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `category/${value.categoryId}/delete`
      );
      if (response.data.errorState === false) {
        setToggleMaxDelete(false);
        setIsLoading(false);
        setUpdateCategories(!setUpdateCategories);
        showSuccessToast(response.data.message);
      }
    } catch (err) {
      setIsLoading(false);
      if (!err.response) {
        showErrorToast("No server response");
      } else {
        showErrorToast(err.response.data.message);
      }
    }
  };

  return (
    <OverallContainer>
      <ButtonCategory>
        <AddCategoryBtn onClick={() => setToggleCreateCat(true)}>
          Add New Category
        </AddCategoryBtn>
        {value.categoryId.length > 1 && (
          <DeleteCategoryBtn onClick={onBulkDeleteClick}>
            Delete
          </DeleteCategoryBtn>
        )}
      </ButtonCategory>
      <CategoryListing>
        <table>
          <tbody>
            <>
              {categories.data?.length > 0 && (
                <tr>
                  <th>#</th>
                  <th>Category</th>
                  <th>Number of Questions</th>
                  <th></th>
                  <th></th>
                </tr>
              )}
              {categories.data?.length > 0 ? (
                categories.data?.map((category, id) => (
                  <tr>
                    <td>{`${id + 1}.`}</td>
                    <td>{category.name}</td>
                    <td>105</td>
                    <td>
                      <input
                        type="checkbox"
                        name={category.name}
                        value={category.id}
                        // checked={isChecked}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <More onClick={() => toggleOpen(id)} />
                    </td>
                    {showMore[id] && (
                      <div>
                        <p>Edit</p>
                        <p
                          onClick={() =>
                            onDeleteClick(category.name, category.id, id)
                          }
                        >
                          Delete
                        </p>
                      </div>
                    )}
                  </tr>
                ))
              ) : (
                <NoData>
                  Oops no data to return yet. Create a new category
                </NoData>
              )}
            </>
          </tbody>
        </table>
      </CategoryListing>
      {toggleCreateCat && (
        <Modal
          setToggleCreateCat={setToggleCreateCat}
          Form={
            <CategoryForm
              setToggleCreateCat={setToggleCreateCat}
              setUpdateCategories={setUpdateCategories}
              updateCategories={updateCategories}
            />
          }
        />
      )}
      {toggleDelete && (
        <DeleteModal
          handleDelete={handleDelete}
          isLoading={isLoading}
          setToggleDelete={setToggleDelete}
          text={`Are you sure you want to delete ${(
            <span>{currentSelectedName.current}</span>
          )}`}
        />
      )}
      {toggleMaxDelete && (
        <DeleteModal
          handleDelete={handleBulkDelete}
          isLoading={isLoading}
          setToggleDelete={setToggleMaxDelete}
          text={"Are you sure you want to delete selected categories"}
        />
      )}
    </OverallContainer>
  );
};

export default List;

const OverallContainer = styled.div`
  position: relative;
  height: 75vh;
`;

const ButtonCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AddCategoryBtn = styled(Button)`
  background-color: #2667ff;
  color: #f0f0f0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const DeleteCategoryBtn = styled(Button)`
  background-color: transparent;
  border: 1px solid #b71f1f;
  border-radius: 4px;
  color: #b71f1f;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 8px 10px;
  width: 120px;
  height: 35px;

  @media (max-width: 517px) {
    width: 60px;
  }

  @media (max-width: 419px) {
    font-size: 12px;
  }
`;

export const CategoryListing = styled.div`
  width: 100%;
  overflow: auto;
  table {
    width: 100%;
    min-width: 960px;
    text-align: left;
    overflow: auto;
    white-space: initial;
    /* background: #f8fbfd; */

    @media (max-width: 517px) {
      th:nth-child(2) {
        padding-right: 50px;
      }

      th:nth-child(3) {
        padding-right: 20px;
      }
    }

    tr:first-of-type {
      width: 100%;
      background: #f8fbfd;

      th:first-of-type {
        padding-right: 24px;
      }

      th:nth-child(2) {
        padding-right: 200px;
      }

      th:nth-child(3) {
        padding-right: 100px;
      }

      th {
        font-size: 16px;
        font-weight: 600;
        color: #605e5c;
      }
    }

    td {
      color: #605e5c;
      font-size: 16px;
      font-weight: 600;
    }

    tr {
      height: 74px;
      td:last-of-type {
        display: flex;
        gap: ${({ theme }) => theme.spacing(4)};
        justify-content: space-between;
        align-items: center;
        justify-content: center;
        padding-top: 22px;

        svg {
          transform: rotate(90deg);
          position: relative;
          cursor: pointer;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 8px;
        gap: 16px;
        position: absolute;
        width: 120px;
        height: 70px;
        background-color: #ffffff;
        z-index: 1;
        border: 0.5px solid #8a8886;

        border-radius: 4px;
        top: 0;
        right: 40px;
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #323130;
          cursor: pointer;

          :last-child {
            color: #b71f1f;
          }
        }
      }
    }
  }
`;

const NoData = styled.div`
  display: flex;
  margin-top: 36px;
`;
