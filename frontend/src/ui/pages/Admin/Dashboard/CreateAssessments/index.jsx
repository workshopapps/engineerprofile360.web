import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../../../../api/axios";
import useAuth from "../../../../../hooks/useAuth";

const SelectType = () => {
    const [createStackss, setCreateStackss ] = useState([])
    const { auth } = useAuth();
    const [formData, setFormData] = useState({
        stackSelect: "",
        name: "",
    });
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    // const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const onBlur = (e) => {
        setTouched((prevState) => ({
        ...prevState,
        [e.target.id]: true,
        }));
    };

    const validate = (formData) => {
        const error = {};

        if (!formData.stackSelect) {
        error.stackSelect = "Please select a Stack";
        }

        if (!formData.name) {
        error.name = "Please give your assessment a name";
        } else if (formData?.name?.length < 5) {
        error.name = "Assessment name cannot be less then 5";
        }
        setErrors(error);
    };

    useEffect(() => {
        validate(formData);
    }, [formData, touched]);

    const onNextPage = (formData) => {
        validate(formData);

        if (Object.keys(errors).length > 0) {
        setTouched({
            department: true,
            name: true,
        });
        }

        if (Object.keys(errors).length === 0) {
        setTouched({
            department: false,
            name: false,
        });
        }
    };

    useEffect(() => {
        axios.get("https://api.eval360.hng.tech/api/admin/stack/all")
        .then( response => {
                setCreateStackss(response.data.data);
                console.log(response.data.data)
            })
        .catch((e) => console.log(e));
    }, [])

    const { name, assessment, } =
        formData;


    return (
        <Container>

            <AssessmentHeadingText>CreateAssessments</AssessmentHeadingText>
            <SelectContainer>
                <p>Select the Assessment Stack</p>

                <SelectItemContainer>
                <SelectItem>
                    <label>Select Stack</label>
                    <select
                    id="assessment"
                    value={assessment}
                    onChange={handleChange}
                    onBlur={onBlur}
                    >
                    <option defaultValue>Select Stack</option>
                    {createStackss.map((stack, id) => (
                        <option key={id} value={stack.name}>
                        {stack.name}
                        </option>
                    ))}
                    </select>
                    {errors.department && touched.department && (
                    <span>{errors.department}</span>
                    )}
                </SelectItem>
                <SelectItem>
                    <label>Title of Assessment</label>
                    <input
                    id="name"
                    type="text"
                    placeholder="Title of Assessment"
                    onChange={handleChange}
                    value={name}
                    onBlur={onBlur}
                    />
                    {errors && errors.name && touched.name && (
                        <span>{errors.name}</span>
                        )}
                </SelectItem>
                </SelectItemContainer>
                <Buttons>
                <Link to={-1}>Cancel</Link>
                <button onClick={() => onNextPage(formData)}>Proceed</button>
                </Buttons>
            </SelectContainer>
        </Container>
    );
};

export default SelectType;

const Container = styled.div`
`
const AssessmentHeadingText = styled.p`
    font-family: "Red Hat Display";
    font-weight: 700;
    font-size: 28px;
    line-height: 37px;
    color: #6e6e6e;
`;
const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 64px;
    gap: 32px;
    width: 60%;
    background: #f8fbfd;
    border: 1px solid ${({ theme }) => theme.palette.main.primary.light};
    margin: 40px auto;

    @media (max-width: 549px) {
        width: 100%;
        gap: 28px;

        p {
        font-size: 16px;
        }
    }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: ${({ theme }) => theme.palette.border.hover};
        opacity: 0.6;
        text-align: center;
    }

    @media (max-width: 1133px) {
        width: 80%;
    }

    @media (max-width: 669px) {
        width: 100%;

        padding: 22px 32px;
    }
`;

const SelectItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 549px) {
        gap: 18px;
    }
`;

const SelectItem = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 549px) {
        label {
        font-size: 14px;
        }
    }

    label {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #605e5c;
        margin-bottom: 20px;
    }

    select,
    input {
        border: 1px solid #106ebe;
        border-radius: 4px;
        height: 40px;
        outline: none;
    }

    select {
        color: #605e5c;
    }

    input {
        padding-left: 5px;

        ::placeholder {
        color: #605e5c;
        }
    }

    input[type="date"] {
        color: #605e5c;
    }

    span {
        font-size: 11px;
        padding-top: 5px;
        color: ${({ theme }) => theme.palette.status.error.color};
    }
`;

const Buttons = styled.div`
    display: flex;
    gap: 10px;
    width: 50%;
    align-items: center;
    justify-content: center;
    margin: auto;

    a,
    button {
        border-radius: 4px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding: 12px 32px;
        cursor: pointer;
    }

    a {
        border: 1px solid #2667ff;
        color: #2667ff;
    }

    button {
        background: #2667ff;
        color: #ebf4f9;
        border: none;
    }

    @media (max-width: 802px) {
        width: 100%;
        margin: auto;
    }

    @media (max-width: 669px) {
        a {
        font-size: 14px;
        padding: 10px 18px;
        }
    }
`;
