import React, { useEffect } from 'react'
import styled from 'styled-components';
import TableComponent from '../../../../components/molecules/TableComponent';
import axios from '../../../../../api/axios'


export default function Assessmentss() {

    // fetch("https://eval360.hng.tech/interview/admin/all")
    //     .then((response) => {
    //         console.log(response.body)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    // });

    useEffect(() => {
        axios.get("interview/all")
            .then((data) => {console.log(data)})
            .catch((e) => console.log(e));
    }, [])


    
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
                        <th>
                            <AssessmentViewButton>View Assessments</AssessmentViewButton>
                        </th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Introduction to software engineering</td>
                        <td>PHP</td>
                        <td>1000</td>
                        <th>
                            <AssessmentViewButton>View Assessments</AssessmentViewButton>
                        </th>
                    </tr>
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
    color: #fff;
    cursor: pointer;
`;

const AssessmentViewButton = styled.button`
    width: 154px;
    height: 32px;
    border: 2px solid #2667ff;
    border-radius: 2px;
    background: transparent;
    cursor: pointer;
`;

// const AssessmentBody = styled.tbody.th.tr`
//     text-align: center; 
// `;

