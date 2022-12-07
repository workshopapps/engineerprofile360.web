import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import Modal from "../../Modal";
import useAuth from "../../../../hooks/useAuth";
import axios from "../../../../api/axios";
import CategoryForm from "./CategoryForm";

import { More } from "iconsax-react";
import { Button } from "../../../../styles/reusableElements.styled";
import { click } from "@testing-library/user-event/dist/click";

const List = () => {
  const [toggleCreateCat, setToggleCreateCat] = useState(false);
  const { auth } = useAuth();
  const [categories, setCategories] = useState([]);
  const [updateCategories, setUpdateCategories] = useState(false);
  const [showMore, setShowMore] = useState({});
  const [value, setValue] = useState({
    categoryId: [],
  });

  useEffect(() => {
    const getAllCatgories = async () => {
      const response = await axios.get(`/category/get/${auth.id}`);
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
  const handleEdit = (id) => {};

  const handleDelete = (id) => {};

  const handleBulkDelete = (id) => {};

  return (
    <OverallContainer>
      <ButtonCategory>
        <AddCategoryBtn onClick={() => setToggleCreateCat(true)}>
          Add New Category
        </AddCategoryBtn>
        {value.categoryId.length > 1 && (
          <DeleteCategoryBtn>Delete</DeleteCategoryBtn>
        )}
      </ButtonCategory>
      <CategoryListing>
        <table>
          <tbody>
            <>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Number of Questions</th>
                <th></th>
                <th></th>
              </tr>
              {categories.length > 0
                ? categories?.map((category, id) => (
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
                          <p>Delete</p>
                        </div>
                      )}
                    </tr>
                  ))
                : "Oops no data to return yet. Create a new category"}
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
            />
          }
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
