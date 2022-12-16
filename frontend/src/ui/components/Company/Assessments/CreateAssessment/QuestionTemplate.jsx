import React, { Fragment, useEffect, useState } from "react";
import axios from "../../../../../api/axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import Frame from "../../../../../assets/icons/app/Frame.svg";
import useAuth from "../../../../../hooks/useAuth";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../../../helpers/helper";
import close from "../../../../../assets/icons/close.svg";
import { Loader } from "../../../../../styles/reusableElements.styled";

const QuestionTemplate = ({ assessment_id }) => {
  const { auth } = useAuth();
  const [inputFields, setInputFields] = useState([
    {
      name: "question_0",
      questionText: "",
      option_input: "",
      options: [],
      language: "",
      question_type: "radio",
      answers: [],
    },
  ]);
  const [toggleDelete, setToggleDelete] = useState({});
  const [categories, setCategories] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllCatgories = async () => {
      try {
        const response = await axios.get(`/category/company/${auth.org_id}`);
        setCategories(response.data.data.data);
      } catch (err) {
        if (!err.response) {
          showErrorToast("No server response");
        } else {
          showErrorToast(err.response.data.message);
        }
      }
    };

    getAllCatgories();
  }, []);

  const [onEdit, setOnEdit] = useState(false);

  const handleChangeInput = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        name: `question_${inputFields.length}`,
        questionText: "",
        option_input: "",
        options: [],
        language: "",
        question_type: "radio",
        list: [],
      },
    ]);
  };

  // This function will delete the current question fields
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    if (values.length > 1) {
      values.splice(index, 1);
      setInputFields(values);
    }
    setToggleDelete({ ...toggleDelete, [index]: !toggleDelete[index] });
  };

  // This function edits the question type.
  const editFieldType = (fieldName, fieldLabel) => {
    const values = [...inputFields];
    const fieldIndex = values.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      values[fieldIndex].question_type = fieldLabel;
      setInputFields(values);
    }
  };

  // This function edits an already existing option
  const editOptions = (text, index, oindex) => {
    const questionOptions = [...inputFields];
    questionOptions[index].options[oindex].optionText = text;

    setInputFields(questionOptions);
  };

  //  This function adds options dynamically to questions onblur
  const addOption = (index, e) => {
    const questionOptions = [...inputFields];
    if (questionOptions[index].options.length < 4) {
      if (e.target.value.length > 1) {
        questionOptions[index].options.push({
          optionText: e.target.value,
        });
      }
    }
    setInputFields(questionOptions);

    questionOptions[index].option_input = "";
    setInputFields(questionOptions);
  };

  const addAnswers = (index, e) => {
    const questionOptions = [...inputFields];
    if (questionOptions[index].question_type === "radio") {
      questionOptions[index].answers = { selectedAnswer: e.target.value };
    } else {
      questionOptions[index].answers?.push({ selectedAnswer: e.target.value });
    }

    setInputFields(questionOptions);
  };

  // This function deletes options form the list of options.
  const deleteOption = (index, oindex) => {
    const removeQuestionOptions = [...inputFields];
    if (removeQuestionOptions[index].options.length > 1) {
      removeQuestionOptions[index].options.splice(oindex, 1);
      setInputFields(removeQuestionOptions);
    }
  };

  // This function handles the necessary things that should take place when a user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    try {
      const array = [];

      inputFields.forEach((input, index) => {
        array.push({
          category_id: input.language,
          question: input.questionText,
          options: input.options,
          is_multiple_answers: input.question_type === "radio" ? false : true,
          correct_answers: [input.answers.selectedAnswer],
          timeframe: "1",
        });
      });

      const response = await axios.post(
        "question/add",
        JSON.stringify({
          assessment_id,
          questions: array,
        })
      );

      console.log(response);

      if (response.data.errorState === false) {
        setIsSubmitted(false);
        showSuccessToast("Successfully Created Assessment");
        setTimeout(() => {
          navigate(`/assessment/view-assessment/${assessment_id}`, {
            replace: true,
          });
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      setIsSubmitted(false);
      if (!err.response) {
        showErrorToast("No Server Response");
      } else {
        showErrorToast(err.response?.data.message);
      }
    }
  };
  console.log(inputFields);

  return (
    <QuestionTemplateContainer onSubmit={handleSubmit}>
      {inputFields.map((inputfield, index) => (
        <QuestionContainer key={inputfield.name}>
          <Question>
            <label>{`Question ${index + 1}`}</label>
            <div>
              <input
                type="text"
                name={"questionText"}
                placeholder="This is a template text"
                value={inputfield.questionText}
                required
                onChange={(e) => handleChangeInput(index, e)}
              />
            </div>
          </Question>
          <Options>
            <Title>
              <label>Answer Type</label>
              <select
                onChange={(e) => editFieldType(inputfield.name, e.target.value)}
              >
                <option value="radio">Single-Option</option>
                <option value="checkbox">Multiple-Option</option>
              </select>
            </Title>
            <InputContainer>
              <LeftContainer>
                <OverallOptionContainer>
                  <>
                    <OptionContainer>
                      <Fragment>
                        {inputfield.options?.map((item, oindex) => (
                          <Option key={oindex}>
                            <input
                              type={inputfield.question_type}
                              name={
                                inputfield.question_type === "radio"
                                  ? `Question${index}`
                                  : ""
                              }
                              required={
                                inputfield.question_type === "radio"
                                  ? "required"
                                  : null
                              }
                              value={oindex}
                              onChange={(e) => addAnswers(index, e)}
                            />
                            {onEdit ? (
                              <input
                                type="text"
                                value={inputfield.options[oindex].optionText}
                                onChange={(e) =>
                                  editOptions(e.target.value, index, oindex)
                                }
                              />
                            ) : (
                              <label
                                onClick={() => setOnEdit({ [oindex]: true })}
                              >
                                {inputfield.options[oindex].optionText}
                              </label>
                            )}
                            <img
                              src={close}
                              onClick={() => deleteOption(index, oindex)}
                              alt=""
                            />
                          </Option>
                        ))}
                      </Fragment>
                    </OptionContainer>
                    {inputfield.options?.length < 4 && (
                      <InsertOption>
                        <input
                          type="text"
                          name="option_input"
                          placeholder="Add option"
                          value={inputfield.option_input}
                          onChange={(e) => handleChangeInput(index, e)}
                          onBlur={(e) => addOption(index, e)}
                        />
                      </InsertOption>
                    )}
                  </>
                </OverallOptionContainer>
              </LeftContainer>

              <RightContainer>
                <select
                  name={"language"}
                  value={inputfield["language"]}
                  onChange={(e) => handleChangeInput(index, e)}
                >
                  <option defaultValue>{"Select Category"}</option>
                  {categories.length > 0 &&
                    categories.map((category, cindex) => (
                      <option key={cindex} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
                <img
                  src={Frame}
                  onClick={() =>
                    setToggleDelete({
                      ...toggleDelete,
                      [index]: !toggleDelete[index],
                    })
                  }
                  alt=""
                />
                {toggleDelete[index] && (
                  <div onClick={() => handleRemoveFields(index)}>Delete</div>
                )}
              </RightContainer>
            </InputContainer>
          </Options>
        </QuestionContainer>
      ))}
      <Button type="button" onClick={() => handleAddFields()}>
        Add Question
      </Button>
      <Buttons>
        <Link to={-1}>Cancel</Link>
        <button type="submit">{isSubmitted ? <Loader sm /> : "Submit"}</button>
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

  button {
    cursor: pointer;
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

const Options = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;

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

const OverallOptionContainer = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 24px;
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
`;

const OptionContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  position: relative;

  img {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`;

const Option = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  label {
    /* width: 90%; */
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
`;

const InsertOption = styled.div``;

const RightContainer = styled.div`
  display: flex;
  width: 40%;
  gap: 10px;
  /* height: 30px; */
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  position: relative;

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

  img {
    cursor: pointer;
  }

  div {
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #edebe9;
    position: absolute;
    right: 0;
    bottom: 25px;
    color: #d83b01;
    font-size: 15px;
    cursor: pointer;
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
