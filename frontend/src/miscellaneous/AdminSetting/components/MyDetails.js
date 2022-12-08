import styled from "styled-components"

const MyDetails = () => {
  return (
    <MyDetailsSection>
      <form method="post">
        <hr />
        <div className="form__control">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            placeholder="Mark James"
            className="form__input"
            type="text"
            name="name"
          />
        </div>
        <hr />
        <div className="form__control">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            placeholder="example@domain.com"
            className="form__input"
            type="email"
            name="email"
          />
        </div>
        <hr />
        <div className="form__control">
          <label className="form__label" htmlFor="name">
            Website/Portfolio
          </label>
          <input
            placeholder="https://www.markjilaga.com"
            className="form__input"
            type="text"
            name="website"
          />
        </div>
        <hr />
        <div className="form__control">
          <label className="form__label" htmlFor="name">
            Role
          </label>
          <input
            placeholder="Team lead II - Backend Engineer"
            className="form__input"
            type="text"
            name="role"
          />
        </div>
        <hr />
        <div className="form__control">
          <label className="form__label" htmlFor="name">
            Country
          </label>
          <input
            placeholder="Nigeria"
            className="form__input"
            type="text"
            name="country"
          />
        </div>
        <hr /> 
        <div className="form__control">
          <label className="form__label" htmlFor="name">
            Timezone
          </label>
          <input
            placeholder="West African Time"
            className="form__input"
            type="text"
            name="timezone"
          />
        </div>
        <hr />
      </form>
    </MyDetailsSection>
  )
}

const MyDetailsSection = styled.section`
display: grid;

hr {
  border:none;
height: 2px;
background: #EDEBE9;
}

.form__control {
display: grid;
justify-content: space-between;
align-items: center;
grid-template-columns: 1fr 1fr;
max-width: 50%;
padding: 20px 0;
}

.form__input {
width: 284px;
padding: 6px 12px;
background: #edebe9;
border-radius: 2px;
font-size: 14px;
line-height: 20px;
color: #a19f9d;
border: none;
}
.form__label {
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #323130;
width: 200px;
}


@media screen and (max-width: 769px) {
  margin: 25px 0;
  .form__control {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    max-width: 100%;
    }
    .form__label {
      margin-bottom: 10px;
    }
    .form__input {
      width: 80%
    }
}

`


export default MyDetails
