import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../../../layout/Flex";
import { Title } from "../../../../../../styles/reusableElements.styled";
import NoData from "../../../../molecules/NoData";
import { LengthShortner } from "../../../../molecules/TableComponent";

const TopStaff = ({ topStaff }) => {
  const [topEmp, setTopEmp] = useState([]);

  useEffect(() => {
    const employees = topStaff?.data
      ? topStaff?.data.filter((data) => data.points !== null)
      : [];

    setTopEmp(employees);
  }, [topStaff?.data]);

  return (
    <Flex stack spacing={18} style={{ maxHeight: "600px" }}>
      <Flex jc="space-between" ai="center">
        <Title as="h2" $size="24px" $color="#6E6E6E" $weight="400">
          Top Staff
        </Title>
        <Link to="/employees">
          <View>View all</View>
        </Link>
      </Flex>
      {topEmp.length > 0 ? (
        <TopStaffTable>
          <table cellSpacing="0">
            <tbody>
              <tr>
                <th colSpan="1">#</th>
                <th style={{ textAlign: "center" }}>Staff name</th>
                <th>Department</th>
                <th>Points</th>
              </tr>

              {topEmp.map((emp, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                      <Flex ai="center" jc="center" spacing={10}>
                        <img
                          src={`https://avatars.dicebear.com/api/micah/${
                            emp.username ? emp.username : "photo"
                          }.svg`}
                          alt="avatar"
                          width="25px"
                        />
                        <TableText $weight="600" $size="18px">
                          {LengthShortner(emp.fullname)}
                        </TableText>
                      </Flex>
                    </td>
                    <td>
                      <TableText $weight="400" $size="16px">
                        {emp.department.name}
                      </TableText>
                    </td>
                    <td>
                      <Flex jc="space-between">
                        <TableText $weight="400" $size="16px">
                          {((emp.points / emp.total_points) * 100).toFixed(2)} %
                        </TableText>
                      </Flex>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TopStaffTable>
      ) : (
        <NoData text="Oops! No data here" />
      )}
    </Flex>
  );
};

export default TopStaff;

const TopStaffTable = styled.div`
  width: 100%;
  overflow: auto;
  table {
    width: 100%;
    text-align: left;
    overflow: auto;
    white-space: initial;

    tr:first-of-type {
      width: 100%;

      th{
        padding-top: 12px;
        padding-bottom: 12px;
      }

      th {
        font-weight: 600;
        color: #605e5c;

        ${({ theme }) => theme.breakpoints.down("lg")} {
        font-size: 14px;
        color: #605e5c;
        }
      }
    }

    td {
      color: #605e5c;
      padding-bottom: 21px;
      padding-top: 21px;
      border-bottom: 1px solid #C8C6C4;
    }

    tr {
     
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;

const View = styled.p`
  color: #2667ff;
  font-weight: 600;
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 5px;
`;

const TableText = styled.p`
  color: ${({ $color }) => ($color ? $color : "#323130")};
  font-size: ${({ $size }) => ($size ? $size : "16px")};
  font-weight: ${({ $weight }) => ($weight ? $weight : "400")};
  line-height: ${({ $lHeight }) => ($lHeight ? $lHeight : "22px")};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 15px;
  }
`;
