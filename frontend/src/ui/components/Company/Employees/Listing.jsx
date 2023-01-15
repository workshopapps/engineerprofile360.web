import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../../styles/reusableElements.styled";

import { AddCircle } from "iconsax-react";
import { Link, useOutletContext } from "react-router-dom";
import NoData from "../../molecules/NoData";
import DataTable from "react-data-table-component";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "rgb(248, 251, 253)",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const paginationComponentOptions = {
  noRowsPerPage: true,
};

const columns = [
  {
    name: "Employee Name",
    selector: (row) => row.fullname,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.department.name,
    sortable: true,
  },
  {
    name: "Employee Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Username",
    selector: (row) => row.username,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <Link to={`/employees/profile/${row.id}`}>
        <Button $variant="outlined" $color="#2667ff">
          View Profile
        </Button>
      </Link>
    ),
  },
];

const Listing = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [depts, setDepts] = useState([]);
  const {
    employees,
    departments,
    employeesTotalRows,
    setEmployeesTotalRows,
    handlePageChange,
    handlePerRowsChange,
    loading,
  } = useOutletContext();

  useEffect(() => {
    setAllEmployees(employees ? employees : []);
    setDepts(departments ? departments : []);
  }, [employees, departments]);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = employees?.filter(
    (item) =>
      item.department.name &&
      item.department.name.toLowerCase().includes(filterText.toLowerCase())
  );

  console.log("rows", employeesTotalRows);
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
        setEmployeesTotalRows(employeesTotalRows);
      }
    };

    return (
      <Filter>
        <select
          onChange={(e) =>
            e.target.value === "all"
              ? handleClear()
              : setFilterText(e.target.value)
          }
        >
          <option value="all">Department</option>
          {depts?.map((dept) => (
            <option key={dept.id} value={dept.name}>
              {dept.name}
            </option>
          ))}
        </select>

        <Link to="/employees/add-employee">
          <Button $weight="400">
            <AddCircle color="#FFFFFF" /> Add New Employee
          </Button>
        </Link>
      </Filter>
    );
  }, [
    depts,
    employeesTotalRows,
    filterText,
    resetPaginationToggle,
    setEmployeesTotalRows,
  ]);

  return (
    <EmployeesList>
      {allEmployees && allEmployees.length > 0 ? (
        <>
          <DataTable
            columns={columns}
            data={filteredItems}
            progressPending={loading}
            customStyles={customStyles}
            pagination
            paginationServer
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            onChangePage={handlePageChange}
            paginationTotalRows={employeesTotalRows}
            onChangeRowsPerPage={handlePerRowsChange}
            persistTableHead
            paginationComponentOptions={paginationComponentOptions}
          />
        </>
      ) : (
        <NoData text="Oops! No data here"></NoData>
      )}
    </EmployeesList>
  );
};

export default Listing;

const EmployeesList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  select {
    border: 1px solid ${({ theme }) => theme.palette.border.default};
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.spacing(0.5)};
    font-size: 14px;
    color: #323130;
    background: #ffffff;
    outline: none;
    margin-left: -22px;
  }

  select:first-of-type {
    width: 179Spx;
  }

  select:last-of-type {
    width: 130px;
    padding-right: 10px;
  }
`;
