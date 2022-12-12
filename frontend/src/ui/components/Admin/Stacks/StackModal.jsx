import React, { useState } from 'react'
import { Title, Loader } from "../../../../styles/reusableElements.styled";
import axios from '../../../../api/axios';
import { ModalContainer } from '../../Company/Departments/EditModal';
import { InputField, InputFieldWrapper, InputWrapper, Label } from '../../Company/Departments/AddDept';
import { Button, Wrapper } from '../../Company/Departments/Hero';
import { toast } from 'react-toastify';
import { Load } from "../../Company/Departments/AddDept";

function StackModal({setModalToggle, setRunEffect}) {

  const [formData, setFormData] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.length !== "") {
      setLoading(true);  
      try {
        await axios.post(
          `https://api.eval360.hng.tech/api/admin/stack/add`,
          {
            name: formData,
          }
        );
        setRunEffect((prev) => !prev);           
        toast.success("Stack created Successfully");
        setModalToggle(false)
      } catch (error) {
        toast.error("could not be created");
        setLoading(false);
      }
    }
  };
  
  return loading ? (
    <Load>
      <Loader />
    </Load>
) : (
    <>
      <ModalContainer>
        <InputWrapper>
        <form>
            <Title as="h2" $size="18px" $color="#323130" $weight="400">
              Create New Stacks
            </Title>
            <InputFieldWrapper>
              <Label>Title</Label>
              <InputField
                type="text"
                required
                name="formData"
                value={formData}
                placeholder="JavaScript" 
                onChange={(e) => setFormData(e.target.value)}              
              />
            </InputFieldWrapper>
            <Wrapper>
              <Button
                onClick={() => {setModalToggle(false)}}
                type="button"
                w={"117px"}
                border={"1px solid#2667FF"}
                h={"48px"}
                text={"#2667FF"}
                bg={"#fff"}
                rounded={"4px"}
                m={" 6px"}
              >
                Cancel
              </Button>

              <Button
                onClick={(e) => handleSubmit(e)}
                border={"1px solid #2667FF"}
                w={"117px"}
                h={"48px"}
                text={"#fff"}
                bg={"#2667FF"}
                rounded={"4px"}
                m={" 6px"}
              >
                Proceed
              </Button>
            </Wrapper>
          </form>
        </InputWrapper>
      </ModalContainer>



    </>

  )
}

export default StackModal