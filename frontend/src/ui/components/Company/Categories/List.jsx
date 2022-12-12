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

import { More, AddCircle } from "iconsax-react";
import NoData from "../../molecules/NoData";
import TableComponent from "../../molecules/TableComponent";
import {
  Button,
  OverlayLoader,
} from "../../../../styles/reusableElements.styled";
import EditCategory from "./EditCategory";

const List = () => {
  const { auth } = useAuth();

  // USE STATES
  const [toggleCreateCat, setToggleCreateCat] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleMaxDelete, setToggleMaxDelete] = useState(false);
  const [categories, setCategories] = useState([]);
  const [updateCategories, setUpdateCategories] = useState(false);
  const [showMore, setShowMore] = useState({});
  const [isLoading, setIsLoading] = useState();
  const [isOverlayLoading, setIsOverlayLoading] = useState(true);
  const [value, setValue] = useState({
    categoryId: [],
  });

  // USE REFS
  const currentSelectedName = useRef();
  const currentSelectedId = useRef();

  if (toggleCreateCat || toggleDelete || toggleEdit || toggleMaxDelete)
    document.body.style.overflow = "hidden";
  else document.body.style.overflow = "initial";

  useEffect(() => {
    setIsOverlayLoading(true);
    const getAllCatgories = async () => {
      try {
        const response = await axios.get(`/category/company/${auth.org_id}`);
        setCategories(response.data.data);
        setIsOverlayLoading(false);
      } catch (err) {
        setIsOverlayLoading(false);
        if (!err.response) {
          showErrorToast("No server response");
        } else {
          showErrorToast(err.response.data.message);
        }
      }
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
  const onEditClick = (name, cat_id, id) => {
    setToggleEdit(true);
    currentSelectedId.current = cat_id;
    currentSelectedName.current = name;

    setShowMore({
      ...showMore,
      [id]: !showMore[id],
    });
  };

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
      const ids = { ids: [...value.categoryId] };
      console.log(JSON.stringify(ids));
      const response = await axios.delete(
        `category/${auth.org_id}/delete`,
        JSON.stringify(ids)
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
          <AddCircle color="#FFFFFF" /> Add New Category
        </AddCategoryBtn>
        {value.categoryId.length > 1 && (
          <DeleteCategoryBtn onClick={onBulkDeleteClick}>
            Delete
          </DeleteCategoryBtn>
        )}
      </ButtonCategory>
      <CategoryListing>
        {isOverlayLoading ? (
          <OverlayLoader contained>
            <div></div>
          </OverlayLoader>
        ) : (
          ""
        )}
        {categories.data?.length > 0 && categories.data ? (
          <>
            <TableComponent>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Category</th>
                  <th>Number of Questions</th>
                  <th></th>
                </tr>

                {categories.data?.map((category, id) => (
                  <tr key={category.id}>
                    <td>{`${id + 1}.`}</td>
                    <td>{category.name}</td>
                    <td>0</td>
                    <td>
                      <input
                        type="checkbox"
                        name={category.name}
                        value={category.id}
                        onChange={handleChange}
                      />
                      <More onClick={() => toggleOpen(id)} />
                    </td>
                    {showMore[id] && (
                      <Popup>
                        <p
                          onClick={() =>
                            onEditClick(category.name, category.id, id)
                          }
                        >
                          Edit
                        </p>
                        <p
                          onClick={() =>
                            onDeleteClick(category.name, category.id, id)
                          }
                        >
                          Delete
                        </p>
                      </Popup>
                    )}
                  </tr>
                ))}
              </tbody>
            </TableComponent>
          </>
        ) : (
          <>
            <NoData text="Oops! No data here yet">
              <Button $weight="400" onClick={() => setToggleCreateCat(true)}>
                <AddCircle color="#FFFFFF" /> Add Category
              </Button>
            </NoData>
          </>
        )}
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
          setIsLoading={setIsLoading}
          setToggleDelete={setToggleDelete}
          text={`Are you sure you want to delete ${currentSelectedName.current}`}
        />
      )}
      {toggleEdit && (
        <Modal
          setToggleCreateCat={setToggleEdit}
          Form={
            <EditCategory
              setToggleEdit={setToggleEdit}
              setUpdateCategories={setUpdateCategories}
              updateCategories={updateCategories}
              currentSelectedName={currentSelectedName.current}
              currentSelectedId={currentSelectedId.current}
            />
          }
        />
      )}

      {toggleMaxDelete && (
        <DeleteModal
          handleDelete={handleBulkDelete}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
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
  min-height: 100vh;
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

export const CategoryListing = styled.div``;

const Popup = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 120px;
  height: 70px;
  background-color: #ffffff;
  z-index: 1;
  position: absolute;
  padding: 8px;
  gap: 12px;
  border: 1px solid #8a8886;

  top: 0px;
  right: 180px;
  border-radius: 4px;
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
`;
