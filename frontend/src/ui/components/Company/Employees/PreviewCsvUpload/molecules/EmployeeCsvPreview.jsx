import {useEffect,useRef,useState} from "react";
import styled from "styled-components";
import axios from "../../../../../../api/axios";
import { Button, Wrapper } from "../../../Departments/Hero";
import { CategoryListing } from "../../../Categories/List";
import {useLocation,useNavigate} from "react-router-dom";
import { OverlayLoader,Title } from "../../../../../../styles/reusableElements.styled";
import { toast } from "react-toastify";
// import TableWrapper from "../../../../molecules/TableComponent";

function EmployeeCsvPreview() {
  const navigate = useNavigate();
     const { state } = useLocation();
     const [loading, setLoading] = useState(false);
     const [ischecked, setIschecked] = useState();
     const CsvData = state.csvData || '';
     const deptid = state.departmentID|| '';
     const deptname = state.departmentName|| '';
     const orgid = state.orgID || '';
     
     useEffect(() => {
      if(CsvData===''|| deptid==='' || deptname==='' || orgid===''){
        navigate("/employees/add-employee")
       }
    }, [CsvData, deptid, deptname,orgid, navigate]);
    
    const tableToJson= (table) =>{
      var data = [];
    
      // first row needs to be headers
      var headers = [];
      for (var i=0; i<table.rows[0].cells.length; i++) {
          headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
      }
    
      // go through cells
      for (var j=1; j<table.rows.length; j++) {
    
          var tableRow = table.rows[j];
          var rowData = {};
          var checked = tableRow.cells[8].querySelector('input[type="checkbox"]');
          for (var k=0; k<tableRow.cells.length; k++) {
            if (checked.checked) {
              rowData[ headers[k] ] = tableRow.cells[k].innerHTML;
            }
          }
          let keys = Object.keys(rowData);
          delete rowData[keys[0]];
          delete rowData[keys[8]];
    
         data.push(rowData);
      }
      // go through the data and remove empty object from the array
      let results= data.filter(element => {
        if (
          typeof element === 'object' &&
          !Array.isArray(element) &&
          Object.keys(element).length === 0
        ) {
          return false;
        } else {
          return true;
        }
      });
  
      return results;
    }
    
    const ref = useRef(null);

    const handleCounter=(e)=>{

      if(e.target.checked){
      // console.log(e.target.checked);
      // setCounter(counter + 1);
      // } else {
        // setCounter(parseInt(counter) - 1);
      // }
      // console.log(counter);
     }
    }
    
    const handleChange = async(e) => {
      const firstcheckbox=document.querySelector('th input[type="checkbox"]');
      const othercheckbox =document.querySelectorAll('td input[type="checkbox"]');
      for (let i = 0; i < othercheckbox.length; i++) {
        if(firstcheckbox.checked) {
        othercheckbox[i].checked = true;
      }else{
          othercheckbox[i].checked = false;
        }
      }
      
    }
    
    const handleClick = async() => {
      const checkboxes = document.querySelectorAll('td input[type="checkbox"]:checked');
        
      if(checkboxes.length < 1) {
        toast.error("Choose employees to be added");
      }
      else{
       setLoading(true);
        const el = ref.current;
        const data = tableToJson(el);
        //console.log(data);
      
        
        try {
          const response = await axios.post(
            "/employee/confirm", JSON.stringify({
              data:data,
            })
          );

          if(response.data.errorState===false){
            setLoading(false);
            toast.success(`${response.data.message}`);
            
            setTimeout(
               () => navigate("/employees/", {replace: true}), 
               1000
             );
            
          }else {
            toast.error(`${response.data.message}`);
          }
          //console.log(response.data.data);
        } catch (err) {
          setLoading(false);
          if (!err.response) {
            toast.error("No Server Response");
          } else {
            toast.error(err.response?.data.message);
          }
        }
        setLoading(false);
      }
    }
   
  return loading ? (
    <OverlayLoader contained height={100}>
          <div></div>
          <span>Just a moment...</span>
        </OverlayLoader>
  ) :(
    <>
      <Container>
        <CSV>
          <Title as="h3" $size="18px" $color="#323130" $weight="400">
            CSV Preview
          </Title>
        </CSV>
        <SpanHolder>
          <p>
            {" "}
          </p>
        </SpanHolder>
        <CategoryListing>
          <TableWrapper>
            <table  ref={ref}>  
            <tbody >
              <tr>
                <th>#</th>

                <th>Fullname</th>
                <th>Username</th>
                <th>Email</th>
                <th>Department</th>
                <th className="hidden">Department_id</th>
                <th className="hidden">Org_id</th>
                <th className="hidden">is_exist</th>
                <th><Checkbox type="checkbox" onChange={(e)=>handleChange()}/></th>
              </tr>
              {CsvData
              ? CsvData.map((data, index) => {
                const { fullname, email, username,department_id=deptid, department=deptname, org_id, is_exist} = data;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{fullname}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{department}</td>
                    <td className="hidden">{department_id}</td>
                    <td className="hidden">{org_id}</td>
                    <td className="hidden">{is_exist ? true : false}</td>
                    <td>
                      <Checkbox type="checkbox" onChange={(e)=>{
                        handleCounter(e);
                      }}/>
                    </td>
                  </tr>
                );
              }): ""}
            </tbody>
            </table>     
          </TableWrapper>
          
        </CategoryListing>
        <ButtonWrapper>
          <Wrapper>
            <Button
              type="button"
              border={"1px solid #2667FF"}
              w={"117px"}
              h={"48px"}
              text={"#2667FF"}
              bg={"transparent"}
              rounded={"4px"}
              m={" 6px"}
              className="cancel"
              onClick={()=>{
                navigate("/employees/add-employee");
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              border={"1px solid #2667FF"}
              w={"117px"}
              h={"48px"}
              text={"#fff"}
              bg={"#2667FF"}
              rounded={"4px"}
              m={" 6px"}
              onClick={() => handleClick()}
            >
              Submit
            </Button>
          </Wrapper>
        </ButtonWrapper>
      </Container>
    </>
  );
}

export default EmployeeCsvPreview;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c7e0f4;
  padding: 15px;
  border-radius: 16px;

  table {
    width:100%;
    border: none!important;
  border-spacing: 0px!important;
  }

  table tr:first-of-type {
    background:transparent;
    padding: 0;
    margin: 0;
  }

  table tr {
    background:#f8fbfd;
    padding:10px 0;
    display:table-row;
    margin: 20px 0;
    width:100%
  }

  th:first-child, td:first-child{
    position:sticky!important;
    left:0px!important;
    border: ;
    width: 10px!important;
    z-index: 1;
  }

  td:first-child{
    background-color:#f8fbfd!important;
  }

  th:first-child{
    background-color:#c7e0f4!important;
  }
  
  td,th {
    text-align:left;
    border-bottom: 15px solid #c7e0f4;
  }

  td:last-of-type {
    display:table-cell;
  }
  
  .hidden {
    display:none;
  }

  th,
  td {
    padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(1.5)};
    position: relative;
  }

    th,td {
      font-size: 16px;
      font-weight: 600;
      color: #605e5c;
    }
`;
export const CSV = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

export const SpanHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  p {
    font-weight: 600;
    font-size: 16px;
    color: #605e5c;
  }

  span {
    color: #2667ff;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  color: #323130;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;

  .cancel:hover {
    background-color:transparent!important;
    color:#2667FF!important;
  }
`;

const TableWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow-x: auto;
`;
export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100vh
`;
