import { MainContainer } from "../../../styles/reusableElements.styled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import classes from "./EmployeeProfile.module.css";

const EmployeeProfile = () => {

    const formSubmitHandler = (event) => {
        event.preventDefault()
    }
    
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        <main className={classes.employee_profile}>
          <h2>Employee Pofile</h2>
          <form onSubmit={formSubmitHandler}>
            <section className={classes.main_content}>
              <div className={classes.form_control}>
                <label className={classes.form_label} htmlFor="name">
                  Name
                </label>
                <input
                  className={classes.form_input}
                  placeholder="John Doe"
                  type="text"
                  name="name"
                />
              </div>

              <div className={classes.form_control}>
                <label className={classes.form_label} htmlFor="email">
                  Email Address
                </label>
                <input
                  className={classes.form_input}
                  placeholder="johndoe45@gmail.com"
                  type="email"
                  name="email"
                />
              </div>


              <div className={classes.form_control}>
                <label className={classes.form_label} htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className={classes.form_input}
                  placeholder="+22 345 678 88345"
                  type="number"
                  name="phoneNumber"
                />
              </div>


              <div className={classes.form_control}>
                <label className={classes.form_label} htmlFor="position">
                  Position
                </label>
                <input
                  className={classes.form_input}
                  placeholder="Software Engineer"
                  type="text"
                  name="position"
                />
              </div>


              <div className={classes.form_control}>
                <label className={classes.form_label} htmlFor="certification">
                  Certification
                </label>
                <input
                  className={classes.form_input}
                  placeholder="CMP professionals"
                  type="text"
                  name="certification"
                />
              </div>


              <div className={classes.form_control}>
                <label className={classes.form_label} htmlFor="employeeID">
                  Employee ID
                </label>
                <input
                  className={classes.form_input}
                  placeholder="E3450D"
                  type="text"
                  name="employeeID"
                />
              </div>

            
              <div className={classes.form_control}>
                <label className={classes.form_label} htmlFor="maritalStatus">
                Marital Status
                </label>
                <input
                  className={classes.form_input}
                  placeholder="Single"
                  type="text"
                  name="maritalStatus"
                />
              </div>


              <div className={classes.form_control}>
                <label className={classes.form_label} htmlFor="location">
                  Location
                </label>
                <input
                  className={classes.form_input}
                  placeholder="Nigeria"
                  type="text"
                  name="location"
                />
              </div>

              <button className={classes.submit_btn} type="submit">Send Request</button>

            </section>
          </form>
        </main>
      </MainContainer>
    </>
  );
};

export default EmployeeProfile;
