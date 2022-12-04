import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";
import useAuth from "../../../../hooks/useAuth";
import axios from "../../../../api/axios";

import { More } from "iconsax-react";
import { Button } from "../../../../styles/reusableElements.styled";

const List = () => {
  const [toggleCreateCat, setToggleCreateCat] = useState(false);
  const { auth } = useAuth();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCatgories = async () => {
      const response = await axios.get(`/category/get/${auth.id}`);
      setCategories(response.data.data);
    };

    getAllCatgories();
  }, []);

  return (
    <OverallContainer>
      <ButtonCategory>
        <AddCategoryBtn onClick={() => setToggleCreateCat(true)}>
          Add New Category
        </AddCategoryBtn>
        <ActionButton>
          <EditBtn>Edit</EditBtn>
          <Delete>Delete</Delete>
        </ActionButton>
      </ButtonCategory>
      <CategoryListing>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Number of Questions</th>
              <th></th>
            </tr>
            {categories.length > 0
              ? categories?.map((category, id) => (
                  <tr>
                    <td>{`${id + 1}.`}</td>
                    <td>{category.name}</td>
                    <td>105</td>
                    <td>
                      <More />
                    </td>
                  </tr>
                ))
              : "Oops no data to return yet. Create a new category"}
          </tbody>
        </table>
      </CategoryListing>
      {toggleCreateCat && <Modal setToggleCreateCat={setToggleCreateCat} />}
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

const ActionButton = styled.div`
  display: flex;
  gap: 18px;
`;

const EditBtn = styled(Button)`
  background-color: transparent;
  color: #323130;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: 1px solid #2667ff;
  border-radius: 4px;
  padding: 8px 10px;
  width: 120px;
  height: 35px;
`;

const Delete = styled(Button)`
  background-color: transparent;
  color: #a4262c;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: 1px solid #a4262c;
  border-radius: 4px;
  padding: 8px 10px;
  width: 120px;
  height: 35px;
`;

const CategoryListing = styled.div`
  width: 100%;
  overflow: auto;
  table {
    width: 100%;
    min-width: 960px;
    text-align: left;
    overflow: auto;
    white-space: initial;
    /* background: #f8fbfd; */

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
      td:last-of-type {
        display: flex;
        gap: ${({ theme }) => theme.spacing(4)};
        justify-content: space-between;
        align-items: center;

        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;
