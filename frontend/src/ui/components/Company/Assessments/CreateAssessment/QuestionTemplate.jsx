import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Frame from "../../../../../assets/icons/app/Frame.svg";

const QuestionTemplate = ({ questionNumber }) => {
  const [inputFields, setInputFields] = useState([
    {
      name: "question_0",
      question: "",
      option_input: "",
      options: [{ option: "" }],
      language: "",
      question_type: "multichoice",
      list: [],
    },
  ]);

  const [textField, setTextField] = useState("");

  const handleChangeInput = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  console.log(inputFields);

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        name: `question_${inputFields.length}`,
        question: "",
        option_input: "",
        language: "",
        question_type: "multichoice",
        list: [],
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const editFieldType = (fieldName, fieldLabel) => {
    const values = [...inputFields];
    const fieldIndex = values.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      values[fieldIndex].question_type = fieldLabel;
      setInputFields(values);
    }
  };

  const addFieldOption = (fieldName, option) => {
    const values = [...inputFields];
    const fieldIndex = values.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      if (option && option !== "") {
        values[fieldIndex].list.push(option);
        setInputFields(values);
        setTextField("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("inputfields", inputFields);
  };

  return (
    <QuestionTemplateContainer>
      {inputFields.map((inputfield, index) => (
        <QuestionContainer key={inputfield.name}>
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
            <Title>
              <label>Answer Type</label>
              <select
                onChange={(e) => editFieldType(inputfield.name, e.target.value)}
              >
                <option value="multichoice">Multi-choice</option>
                <option value="checkbox">Check-box</option>
              </select>
            </Title>
            <InputContainer>
              <LeftContainer>
                <div>
                  {inputfield.question_type === "multichoice" && (
                    <>
                      {/* {inputfield.list.map((item) => ( */}
                      <Fragment>
                        <Fragment>
                          <input type="radio" />
                          <label></label>
                        </Fragment>
                        <Fragment>
                          <input
                            type="text"
                            name="option_input"
                            placeholder="Add option"
                            value={inputfield.option_input}
                            onChange={(e) => handleChangeInput(index, e)}
                            //   onBlur={(e) => handleAddOptionFields(index)}
                          />
                          <img src={Frame} alt="" />
                          {/* <div>Delete</div> */}
                        </Fragment>
                      </Fragment>
                      {/* ))} */}
                    </>
                  )}
                  {inputfield.question_type === "checkbox" && (
                    <>
                      <input type="checkbox" name="" value="" />
                      <input
                        type="text"
                        name="option_input"
                        placeholder="Add option"
                        value={inputfield.option_input}
                        onChange={(e) => handleChangeInput(index, e)}
                        onClick={() =>
                          addFieldOption(inputfield.name, textField)
                        }
                      />
                      <img src={Frame} alt="" />
                      {/* <div>Delete</div> */}
                    </>
                  )}
                </div>
              </LeftContainer>

              <RightContainer>
                <select
                  name={"language"}
                  value={inputfield["language"]}
                  onChange={(e) => handleChangeInput(index, e)}
                >
                  <option selected>{"Select Category"}</option>
                  <option value="PHP">{"PHP"}</option>
                  <option value="Laravel">{"Laravel"}</option>
                  <option value="HTML">{"HTML"}</option>
                  <option value="CSS">{"CSS"}</option>
                  <option value="React">{"React"}</option>
                  <option value="Vue">{"Vue"}</option>
                </select>
                <img src={Frame} alt="" />
              </RightContainer>
            </InputContainer>
          </Option>
        </QuestionContainer>
      ))}
      <Button type="button" onClick={() => handleAddFields()}>
        Add Question
      </Button>
      <Buttons>
        <Link to={-1}>Cancel</Link>
        <button type="submit">Submit</button>
      </Buttons>
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
      border: none;
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
  flex-direction: column;
  gap: 25px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    margin-bottom: 15px;
    background: #f8fbfd;
    border: 1px solid #edebe9;
    border-radius: 4px;
    padding: 15px 8px;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    div {
      position: absolute;
      padding: 8px;
      background-color: #ffe3e5;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #a4262c;
      bottom: -35px;
      right: -15px;
    }
  }

  input {
    outline: none;
    border-bottom: 1px solid #a19f9d;
    background-color: transparent;
    border: none;
  }

  input:first-child {
    width: 18px;
    height: 18px;
  }

  input[type="text"] {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 90%;
    word-wrap: wrap;
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
  width: 40%;
  gap: 10px;
  /* height: 30px; */
  align-items: flex-start;
  justify-content: space-between;
  /* gap: 36px; */

  img {
    cursor: pointer;
  }

  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #edebe9;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fbfd;
  border: 1px solid #edebe9;
  border-radius: 4px;
  padding: 18px 24px;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 36px;

  a,
  button {
    padding: 10px 16px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }

  button {
    background: #2667ff;
    color: #fff;
    border: none;
  }

  a {
    border: 1px solid #2667ff;
    background-color: transparent;
    border-radius: 4px;
    color: #2667ff;
  }
`;

const Title = styled.div`
  display: flex;
  width: 62%;
  justify-content: space-between;
  align-items: center;

  select {
    padding: 10px;
    border: 1px solid #edebe9;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }
`;
