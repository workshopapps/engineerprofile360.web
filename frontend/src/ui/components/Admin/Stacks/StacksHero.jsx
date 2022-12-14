import React, { useState, useEffect } from "react";
import { Button } from "../../Company/Departments/Hero";
import TableComponent from "../../molecules/TableComponent";
import axios from "../../../../api/axios";
import StackModal from "./StackModal";
import { Title, Loader } from "../../../../styles/reusableElements.styled";
import { More } from "iconsax-react";
import UpdateStacks from "./UpdateStacks";
import EditStacks from "./EditStacks";
import DeleteStacks from "./DeleteStacks";
import { toast } from "react-toastify";
import { Load } from "../../Company/Departments/AddDept";

function StacksHero() {
  const [modalToggle, setModalToggle] = useState(false);
  const [runEffect, setRunEffect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openUpdate, setOpenUpdate] = useState(null);
  const [stacksDetails, setStacksDetails] = useState({
    id: "",
    stacksName: "",
  });

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  // LISTING ALL DATAS
  const [data, allData] = useState([]);

  // LIST ALL DATA
    useEffect(() => {
      try {
      axios.get("admin/stack/all")
      .then((response) => {
      allData(response.data.data);
      setLoading(false)
      });   
      
      } catch (error) {
        toast.error("Could not fetch stacks")
      }
  }, [runEffect]);

  return loading ? (
    <Load>
      <Loader />
    </Load>
  ) : (
    <>
      {editModal && (
        <EditStacks
          setRunEffect={setRunEffect}
          setEditModal={setEditModal}
          stacksDetails={stacksDetails}
          cancel={setOpenUpdate}
        />
      )}
      {deleteModal && (
        <DeleteStacks
          setRunEffect={setRunEffect}
          setDeleteModal={setDeleteModal}
          stacksDetails={stacksDetails}
          cancel={setOpenUpdate}
        />
      )}

      <Title as="h4" $size="28px" $color="#1E1E1E" $weight="600">
        Stacks
      </Title>
      {modalToggle && (
        <StackModal
          setModalToggle={setModalToggle}
          setRunEffect={setRunEffect}
        />
      )}
      <Button
        onClick={() => setModalToggle(true)}
        w={"210px"}
        h={"42px"}
        text={"#fff"}
        bg={"#2667ff"}
        rounded={"4px"}
        fs={"16px"}
        fw={"400"}
        lh={"20px"}
        border={"2px solid #2667ff"}
        m={" 0"}
      >
        Add New Stacks
      </Button>
      <TableComponent>
        <tbody>
          <tr>
            <th>#</th>
            <th>Stack</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>

          {data.length > 0
            ? data?.map((item, index) => {
                const { created, name, update, id } = item;

                const handleModal = (i) => {
                  if (openUpdate === i) {
                    setOpenUpdate(null);
                  } else {
                    setOpenUpdate(index);
                  }
                };

                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{Date(created)}</td>
                    <td>{Date(update)}</td>
                    <td>
                      <More
                        onClick={() => {
                          handleModal(index);
                          setStacksDetails({
                            id: id,
                            stacksName: name,
                          });
                        }}
                      />
                      {openUpdate === index && (
                        <UpdateStacks
                          cancel={setOpenUpdate}
                          setEditModal={setEditModal}
                          setDeleteModal={setDeleteModal}
                        />
                      )}
                    </td>
                  </tr>
                );
              })
            : "Opps, no stacks found. Create new stack." }
        </tbody>
      </TableComponent>
    </>
  );
}

export default StacksHero;
