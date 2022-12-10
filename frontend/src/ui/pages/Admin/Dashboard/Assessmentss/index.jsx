import React from 'react'
import styled from 'styled-components';
import TableComponent from '../../../../components/molecules/TableComponent';
import axios from 'axios'

export default function Assessmentss() {

    fetch("https://eval360.hng.tech/interview/admin/all")
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
    });


    // axios({
    //     method: "get",
    //     url: "https://eval360.hng.tech/interview/admin/all",
    //     }).then(function (response) {
    //     console.log(response.data);
    // });
    return (
        <Container>
            <AssessmentHeading>
                <AssessmentHeadingText>
                    Assessments
                </AssessmentHeadingText>
                <AssessmentHeadingButton>
                    Create Assessment
                </AssessmentHeadingButton>
            </AssessmentHeading>

            <TableComponent>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Assessment Name</th>
                        <th>Stack</th>
                        <th>No of times taken</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Introduction to software engineering</td>
                        <td>PHP</td>
                        <td>1000</td>
                    </tr>
                    <button>Yes</button>
                </tbody>
            </TableComponent>
        </Container>
    )
}

const Container = styled.div`
`;

const AssessmentHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AssessmentHeadingText = styled.p`
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #605e5c;
`;

const AssessmentHeadingButton = styled.button`
    width: 237px;
    height: 48px;
    background: #2667ff;
    border-radius: 4px;
    outline: none;
    border: none;
    color: #fff
`;