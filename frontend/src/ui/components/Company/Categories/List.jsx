import React, { createContext, useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";

import Modal from "../../Modal";
import useAuth from "../../../../hooks/useAuth";
import axios from "../../../../api/axios";
import CategoryForm from "./CategoryForm";
import DeleteModal from "./DeleteModal";
import { showErrorToast } from "../../../../helpers/helper";
import { showSuccessToast } from "../../../../helpers/helper";

import { AddCircle } from "iconsax-react";
import NoData from "../../molecules/NoData";

import {
  Button,
  OverlayLoader,
} from "../../../../styles/reusableElements.styled";
import EditCategory from "./EditCategory";
import CategoriesTable from "./CategoriesTable";

export const CategoryDataContext = createContext(null);

const List = () => {
  const { auth } = useAuth();

  // USE STATES
  const [categoryDetails, setCategoryDetails] = useState({
    id: "",
    categoryName: "",
  });
  const [toggleCreateCat, setToggleCreateCat] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(null);
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
    // document.body.style.overflow = "hidden";
    document.body.style.overflow = "auto";
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
  }, [auth.org_id, updateCategories]);

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
  const { id: categoryId, categoryName: name } = categoryDetails;

  const onBulkDeleteClick = () => {
    setToggleMaxDelete(true);
  };

  // Fucntions to be passed to the Delete Modal

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`category/${auth.org_id}/delete`, {
        data : {id : [categoryId]},
         headers: { "Authorization" : `Bearer ${auth.accessToken}` }
      });
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
      const ids = { id: [...value.categoryId] };
      console.log(JSON.stringify(ids));
      const response = await axios.delete(
        `category/${auth.org_id}/delete`,
        { 
         data: ids  ,
         headers: { "Authorization" : `Bearer ${auth.accessToken}` }
        }
      );
      if (response.data.errorState === false) {
        setToggleMaxDelete(false);
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

  return (
    <>
      <CategoryDataContext.Provider
        value={{
          toggleOpen,
          onEditClick,
          showMore,
          onDeleteClick,
          openUpdate,
          setOpenUpdate,
        }}
      >
        <OverallContainer>
          <ButtonCategory>
            <Button onClick={() => setToggleCreateCat(true)}>
              <AddCircle color="#FFFFFF" /> Add New Category
            </Button>
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
                <CategoriesTable
                  data={categories?.data}
                  rowsPerPage={5}
                  handleChange={handleChange}
                  setCategoryDetails={setCategoryDetails}
                />
              </>
            ) : (
              <>
                {isOverlayLoading ? (
                  ""
                ) : (
                  <NoData text="Oops! No data here yet">
                    <Button
                      $weight="400"
                      onClick={() => setToggleCreateCat(true)}
                    >
                      <AddCircle color="#FFFFFF" /> Add Category
                    </Button>
                  </NoData>
                )}
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
              text={
                <div>
                  <p>Are you sure you want to delete </p>
                  <p>{currentSelectedName.current} ?</p>
                </div>
              }
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
              text={
                <div>
                  <p>Are you sure you want to delete selected </p>
                  <p>categories ?</p>
                </div>
              }
            />
          )}
        </OverallContainer>
      </CategoryDataContext.Provider>
    </>
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

// const AddCategoryBtn = styled(Button)`
//   background-color: #2667ff;
//   color: #f0f0f0;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 20px;
// `;

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
  :hover {
    background-color: #b71f1f;
    color: #fff;
  }

  @media (max-width: 517px) {
    width: 60px;
  }

  @media (max-width: 419px) {
    font-size: 12px;
  }
`;

export const CategoryListing = styled.div``;

export const Popup = styled.span`
  /* display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 120px;
  height: 70px;
  background-color: #ffffff;
  z-index: 1;
  position: absolute;
  padding: 8px;
  gap: 12px;
  border: 1px solid #8a8886; */
  width: 112px;
  height: 70px;
  position: absolute;
  right: 150px;
  top: 11px;
  background-color: #fff;
  /* padding: 4px 15px; */
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
  z-index: 1;
  border: none;

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
