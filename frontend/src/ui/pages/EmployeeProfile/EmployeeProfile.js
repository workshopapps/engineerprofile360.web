import styled from "styled-components";
import PageInfo from "../../components/molecules/PageInfo";

const EmployeeProfile = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <PageInfo pageTitle="Employee Profile" />
      <EmployeeProfileContainer>
        <form onSubmit={formSubmitHandler}>
          <EmployeeProfileMain>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                placeholder="John Doe"
                type="text"
                name="name"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput
                placeholder="johndoe45@gmail.com"
                type="email"
                name="email"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
              <FormInput
                placeholder="+22 345 678 88345"
                type="number"
                name="phoneNumber"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="position">Position</FormLabel>
              <FormInput
                placeholder="Software Engineer"
                type="text"
                name="position"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="certification">Certification</FormLabel>
              <FormInput
                placeholder="CMP professionals"
                type="text"
                name="certification"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="employeeID">Employee ID</FormLabel>
              <FormInput
                placeholder="E3450D"
                type="text"
                name="employeeID"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="maritalStatus">Marital Status</FormLabel>
              <FormInput
                placeholder="Single"
                type="text"
                name="maritalStatus"
                required
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="location">Location</FormLabel>
              <FormInput
                placeholder="Nigeria"
                type="text"
                name="location"
                required
              />
            </FormControl>

            <SubmitButton type="submit">Send Request</SubmitButton>
          </EmployeeProfileMain>
        </form>
      </EmployeeProfileContainer>
    </>
  );
};

export default EmployeeProfile;

const EmployeeProfileContainer = styled.div`
  /* display: grid;
  grid-template-rows: 0.1fr 1fr;
  padding: 0px 10px;
  row-gap: 50px; */
`;

const EmployeeProfileMain = styled.div`
  display: grid;
  background: hwb(204 97% 1%);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 35px;
  column-gap: 100px;
  padding: 38px 45px 98px 45px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 38px 30px 98px 30px;
  }
`;

const FormControl = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  row-gap: 10px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-column: span 2;
  }
`;

const FormLabel = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-transform: capitalize;
  color: #323130;
`;

const FormInput = styled.input`
  padding: 30px 22px;
  border: 0.6px solid #9194fc;

  :focus {
    outline: 1px solid #3f8efc;
  }
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  width: 100%;
  max-width: 462px;
  height: 83px;
  justify-self: center;
  background: #2667ff;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin-top: 20px;
  color: #ffffff;
`;
