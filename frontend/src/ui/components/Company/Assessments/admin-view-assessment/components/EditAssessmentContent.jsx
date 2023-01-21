import React, { Fragment, useEffect, useState } from "react";
import axios from "../../../../../../api/axios";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";

import Frame from "../../../../../../assets/icons/app/Frame.svg";
import useAuth from "../../../../../../hooks/useAuth";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../../../../helpers/helper";
import close from "../../../../../../assets/icons/close.svg";
import {
  Loader,
  OverlayLoader,
} from "../../../../../../styles/reusableElements.styled";
import { InputField } from "../../../Departments/AddDept";
import ViewAssessmentHeader from "./ViewAssessmentHeader";
import moment from "moment";
import PageInfo from "../../../../molecules/PageInfo";

const EditAssessmentContent = () => {
  const { auth } = useAuth();
  const { id } = useParams();
  const assessment_id = id;

  //   const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [assessmentDetails, setAssessmentDetails] = useState({});

  const [inputFields, setInputFields] = useState([
    // {
    //   category_id: "",
    //   company_id: "",
    //   correct_answers: [],
    //   id: "",
    //   is_multiple_answers: false,
    //   options: [],
    //   question: "",
    //   updated_at: "",
    // },
  ]);

  const [toggleDelete, setToggleDelete] = useState({});
  const [categories, setCategories] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [inputValueAddOption, setInputValueAddOption] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `question/assessment/${assessment_id}`
        );
        setInputFields(response.data.data);
        setLoading(false);
        // console.log("object1235", questions);
        const assessment = await axios.get(`/assessment/${auth.org_id}`);

        for (let index = 0; index <= assessment?.data?.data.length; index++) {
          const assessmentData = assessment?.data?.data[index];
          const { id } = assessmentData;
          if (id === assessment_id) setAssessmentDetails(assessmentData);
        }
      } catch (error) {
        // toast.error("could not preview questions ");
        if (!error?.response) {
          // showErrorToast("could not preview questions");
        } else if (error?.response.data.errorState === true) {
          showErrorToast(error.response.data.message);
        }
      }
    };
    fetchQuestions();
  }, []);

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
  let timeDuration = moment
    .utc(
      moment(assessmentDetails?.end_time, "HH:mm").diff(
        moment(assessmentDetails?.start_time, "HH:mm")
      )
    )
    .format("HH:mm:ss");

  const handleChangeInput = (index, e) => {
    const values = [...inputFields];
    values[index].question = e?.target?.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        category_id: "",
        company_id: "",
        correct_answers: [],
        id: "",
        is_multiple_answers: 0,
        options: [],
        question: "",
        updated_at: new Date(),
      },
    ]);
  };

  // This function edits an already existing option
  const editOptions = (e, index, oindex) => {
    const questionOptions = [...inputFields];
    questionOptions[index].options[oindex] = e.target.value;
    setInputFields(questionOptions);
    console.log("options", InputField);
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
  const editFieldType = (e, index) => {
    const values = [...inputFields];
    values[index].is_multiple_answers = Number(e.target.value);
    if (values[index].is_multiple_answers === 0) {
      values[index].correct_answers = Number(e.target.value);
    } else {
      values[index].correct_answers = [inputFields[index].correct_answers];
    }
    setInputFields(values);
  };

  //  This function adds options dynamically to questions onblur
  const addOption = (index, e, O) => {
    const questionOptions = [...inputFields];
    if (questionOptions[index].options.length < 4) {
      if (e.target.value.length > 1) {
        questionOptions[index].options.push(e.target.value);
      }
    }
    setInputFields(questionOptions);
    setInputValueAddOption("");
  };

  const handleAddMultiAnswers = (index, key) => {
    let sel = [...inputFields];
    let find = sel[index].correct_answers.indexOf(key);
    if (find > -1) {
      sel[index].correct_answers.splice(find, 1);
    } else {
      sel[index].correct_answers.push(key);
    }
    setInputFields(sel);
  };

  const handleAddAnswer = (index, key) => {
    let sel = [...inputFields];
    sel[index].correct_answers = key;
    setInputFields(sel);
  };

  const handleUserInputOption = (e) => {
    setInputValueAddOption(e.target.value);
  };

  // This function deletes options form the list of options.
  const deleteOption = (index, oindex) => {
    const removeQuestionOptions = [...inputFields];
    if (removeQuestionOptions[index].options.length > 1) {
      removeQuestionOptions[index].options.splice(oindex, 1);
      setInputFields(removeQuestionOptions);
    }
  };

  const isJson = (obj) => {
    try {
      JSON.parse(obj);
    } catch (e) {
      //Error
      //JSON is not okay
      return false;
    }
    return true;
  };
  // This function handles the necessary things that should take place when a user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      const array = [];

      inputFields.forEach((input, index) => {
        array.push({
          category_id: input.category_id,
          company_id: input.company_id,
          correct_answers: [input.correct_answers],
          id: input.id,
          is_multiple_answers: input.is_multiple_answers,
          options: isJson(input.options)
            ? JSON.parse(input.options)
            : input.options,
          question: input.question,
          updated_at: new Date(),
        });
      });

      const response = await axios.patch(
        "question/add",
        JSON.stringify({
          assessment_id,
          questions: array,
        })
      );

      console.log("sending", array);

      if (response.data.errorState === false) {
        setIsSubmitted(false);
        showSuccessToast("Successfully Updated");
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
        showErrorToast("Something went wrong");
      } else {
        showErrorToast(err.response?.data.message);
      }
    }
  };

  return (
    <>
      <PageInfo pageTitle="Edit Assessment" />
      {loading ? (
        <OverlayLoader contained>
          <div></div>
          <span>Just a moment...</span>
        </OverlayLoader>
      ) : (
        <>
          <ViewAssessmentHeader
            title="Edit Assessment"
            course={
              assessmentDetails?.name ? assessmentDetails?.name : "loading"
            }
            department={
              assessmentDetails?.department?.name
                ? assessmentDetails?.department?.name
                : "loading"
            }
            duration={timeDuration}
            deadline={
              assessmentDetails?.end_date
                ? moment(assessmentDetails?.end_date).format("yy-MM-DD")
                : "loading"
            }
          />

          <QuestionTemplateContainer onSubmit={handleSubmit}>
            {inputFields.map((assessment, index) => {
              const {
                question,
                options,
                correct_answers,
                id,
                is_multiple_answers,
              } = assessment;
              const isJson = (obj) => {
                try {
                  JSON.parse(obj);
                } catch (e) {
                  //Error
                  //JSON is not okay
                  return false;
                }
                return true;
              };
              const optionsData = isJson(options)
                ? JSON.parse(options)
                : options;
              const correct_answer_number = Number(correct_answers);
              return (
                <QuestionContainer key={index}>
                  <Question>
                    <label>{`Question ${index + 1}`}</label>
                    <div>
                      <input
                        type="text"
                        name={question}
                        placeholder="This is a template text"
                        value={question}
                        required
                        onChange={(e) => handleChangeInput(index, e)}
                      />
                    </div>
                  </Question>
                  <Options>
                    <Title>
                      <label>Answer Type</label>
                      <select onChange={(e) => editFieldType(e, index)}>
                        <option value={0}>Single-Option</option>
                        <option value={1}>Multiple-Option</option>
                      </select>
                    </Title>
                    <InputContainer>
                      <LeftContainer>
                        <OverallOptionContainer>
                          <>
                            <OptionContainer>
                              <Fragment>
                                {optionsData?.map((option, i) => (
                                  <Option key={i}>
                                    <input
                                      type={
                                        is_multiple_answers === 0
                                          ? "radio"
                                          : "checkbox"
                                      }
                                      value={i}
                                      name={id}
                                      onChange={
                                        is_multiple_answers === 0
                                          ? () => handleAddAnswer(index, i)
                                          : () =>
                                              handleAddMultiAnswers(index, i)
                                      }
                                      checked={
                                        is_multiple_answers === 0
                                          ? correct_answer_number === i
                                          : correct_answers.includes(i)
                                      }
                                    />

                                    {onEdit ? (
                                      <input
                                        type="text"
                                        value={option}
                                        onChange={(e) =>
                                          editOptions(e, index, i)
                                        }
                                      />
                                    ) : (
                                      <>
                                        {/* <label
                                      onClick={() => setOnEdit({ [i]: true })}
                                    >
                                      {options[i].optionText || options[i]}
                                    </label> */}
                                        <label
                                          htmlFor={id}
                                          onClick={() =>
                                            setOnEdit({ [i]: true })
                                          }
                                        >
                                          {option.optionText || option}
                                        </label>
                                      </>
                                    )}
                                    <img
                                      src={close}
                                      onClick={() => deleteOption(index, i)}
                                      alt=""
                                    />
                                  </Option>
                                ))}
                              </Fragment>
                            </OptionContainer>
                            {assessment.options?.length < 4 && (
                              <InsertOption>
                                <input
                                  type="text"
                                  name="option_input"
                                  placeholder="Add option"
                                  value={inputValueAddOption}
                                  //   defaultValue={assessment.option_input}
                                  onBlur={(e) => addOption(index, e)}
                                  onChange={handleUserInputOption}
                                />
                              </InsertOption>
                            )}
                          </>
                        </OverallOptionContainer>
                      </LeftContainer>

                      <RightContainer>
                        <select
                          name={"language"}
                          value={assessment["language"]}
                          // onChange={(e) => handleChangeInput(index, e)}
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
                          <div onClick={() => handleRemoveFields(index)}>
                            Delete
                          </div>
                        )}
                      </RightContainer>
                    </InputContainer>
                  </Options>
                </QuestionContainer>
              );
            })}

            <Button type="button" onClick={() => handleAddFields()}>
              Add Question
            </Button>
            <Buttons>
              <Link to="/assessment/assessment-list">Cancel</Link>
              <button type="submit">
                {isSubmitted ? <Loader sm /> : "Update"}
              </button>
            </Buttons>
          </QuestionTemplateContainer>
        </>
      )}
    </>
  );
};

export default EditAssessmentContent;

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
  padding: 45px 0px;
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
    width: 5%;
    /* display: none; */
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
