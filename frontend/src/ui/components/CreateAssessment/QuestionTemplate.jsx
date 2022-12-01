import React, { Fragment, useState } from "react";
import styled from "styled-components";

import Frame from "../../../assets/icons/app/Frame.svg";
import add from "../../../assets/icons/app/down.svg";

const QuestionTemplate = ({ questionNumber }) => {
  const [inputFields, setInputFields] = useState([
    {
      question: "",
      option_input: "",
      select: [],
    },
  ]);

  const handleChangeInput = (index, e) => {
    console.log(index, e.target.value);
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { question: "", option_input: "", select: [] },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("inputfields", inputFields);
  };

  return (
    <QuestionTemplateContainer>
      {inputFields.map((inputfield, index) => (
        <QuestionContainer key={index}>
          <Question>
            <label>{`Question ${index + 1}`}</label>
            <div>
              <input
                type="text"
                name={"question"}
                placeholder="This is a template text"
                value={inputfield.question}
                onChange={(e) => handleChangeInput(index, e)}
              />
            </div>
          </Question>
          <Option>
            <label>Answer Type</label>
            <InputContainer>
              <LeftContainer>
                <div>
                  <input
                    name="select"
                    type="radio"
                    value={inputfield.select}
                    onChange={(e) => handleChangeInput(index, e)}
                  />
                  <input
                    type="text"
                    name="option_input"
                    placeholder="Add option"
                    value={inputfield.option_input}
                    onChange={(e) => handleChangeInput(index, e)}
                  />
                </div>
              </LeftContainer>
              <RightContainer>
                <div>Multichoice</div>
                <img src={Frame} alt="" />
              </RightContainer>
            </InputContainer>
          </Option>
        </QuestionContainer>
      ))}
      <img
        className="add_new"
        onClick={() => handleAddFields()}
        src={add}
        alt=""
      />
    </QuestionTemplateContainer>
  );
};

export default QuestionTemplate;

const QuestionTemplateContainer = styled.form`
  .add_new {
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: -20px;
    left: 50%;
    cursor: pointer;
    color: green;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  padding: 15px 25px;
  gap: 25px;
  margin-bottom: 40px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #605e5c;
  }

  div {
    width: 100%;
    height: 48px;
    background: #f8fbfd;
    border: 1px solid #edebe9;
    border-radius: 4px;
    padding-left: 15px;

    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      outline: none;

      ::placeholder {
        font-weight: 100;
        font-size: 16px;
        line-height: 24px;
        color: #605e5c;
      }
    }
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #605e5c;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 70%;
  align-items: left;
  background: #f8fbfd;
  border: 1px solid #edebe9;
  border-radius: 4px;
  padding: 15px 8px;
  flex-direction: column;
  gap: 25px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    outline: none;
    border-bottom: 1px solid #a19f9d;
    background-color: transparent;
  }

  input:first-child {
    width: 18px;
    height: 18px;
  }

  input[type="text"] {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #605e5c;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
`;

const RightContainer = styled.div`
  display: flex;
  width: 20%;
  height: 60px;
  gap: 36px;

  div {
    padding: 15px 45px;
    border: 1px solid #edebe9;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #605e5c;
  }

  img {
    width: 36px;
    height: 36px;
  }
`;
