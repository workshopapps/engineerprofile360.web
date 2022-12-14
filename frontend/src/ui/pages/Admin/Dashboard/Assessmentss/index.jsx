import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import TableComponent from '../../../../components/molecules/TableComponent';
import axios from '../../../../../api/axios'
import { More } from 'iconsax-react';
import { Link } from 'react-router-dom';
// import EditAssessment from "./EditAssessment";
// import DeleteAssessment from "./DeleteAssessment";
// import UpdateAssessment from './UpdateAssessment';


export default function Assessments() {
    const [table, setTable] = useState([]);
    useEffect(() => {
        axios.get("interview/all")
        .then( response => {
                setTable(response.data.data.data)
                console.log(response.data.data.data)
            })
            .catch((e) => console.log(e));
        }, [])
        
        // console.log(table);
        
        return (
        <Container>
            <AssessmentHeading>
                <AssessmentHeadingText>
                    Assessments
                </AssessmentHeadingText>
                <Link to="/admin/create-assessmentss">
                    <AssessmentHeadingButton>
                        Create Assessment
                    </AssessmentHeadingButton>
                </Link>
            </AssessmentHeading>

            <TableComponent>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Assessment Name</th>
                        <th>Stack</th>
                        <th>No of times taken</th>
                        <td>
                        </td>
                    </tr>
                    {table.map((table, index) => {
                        const { id, title, stacks, times_taken  } = table;                        
                        return(
                            
                            <tr key={id}>
                            <td>{index + 1}</td>
                            <td>{title}</td>
                            <td>{stacks}</td>
                            <td>{times_taken}</td>
                            <td>
                                <AssessmentViewButton>View Assessments</AssessmentViewButton>
                            </td>
                            <td>
                                <More />
                            </td>
                        </tr>
                        )
                    })}
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

