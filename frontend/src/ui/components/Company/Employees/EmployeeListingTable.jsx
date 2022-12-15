import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePagination from "../../../../hooks/usePagination";
import { Button } from "../../../../styles/reusableElements.styled";
import TableComponent, { LengthShortner } from "../../molecules/TableComponent";
import TablePaginate from "../../molecules/TablePaginate";

const EmployeeListingTable = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = usePagination(data, page, rowsPerPage);
  return (
    <>
      <TableComponent>
        <tbody>
          <tr>
            <th>#</th>
            <th>Employee name</th>
            <th>Department</th>
            <th>Employee Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
          {slice.length > 0 &&
            slice.map((employee, index) => (
              <tr key={employee?.id}>
                <td>{rowsPerPage * (page - 1) + index + 1}</td>
                <td>{LengthShortner(employee?.fullname)}</td>
                <td>{employee.department?.name}</td>
                <td>{employee?.email}</td>
                <td>{employee?.username}</td>
                <td>
                  <Link to={`/employees/profile/${employee.id}`}>
                    <Button $variant="outlined" $color="#2667ff">
                      View Profile
                    </Button>
                  </Link>
                  {/* <More /> */}
                </td>
              </tr>
            ))}
        </tbody>
      </TableComponent>
      <TablePaginate
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
      />
    </>
  );
};

export default EmployeeListingTable;
