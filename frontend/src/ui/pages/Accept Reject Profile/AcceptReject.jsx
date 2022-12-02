import styled from "styled-components";
import user_avater from "../../../assets/images/sophie.svg";

const AcceptReject = () => {
  return (
    <Form>
      <img className="avatar" src={user_avater} alt="sophie" />
      <h2 className="title">employee’s details</h2>

      <div className="form_control">
        <label className="form_label" htmlFor="name">
          Name
        </label>
        <input
          className="form_input"
          type="text"
          placeholder="John Doe"
          name="name"
          required
        />
      </div>

      <div className="form_control">
        <label className="form_label" htmlFor="name">
          Email Address
        </label>
        <input
          className="form_input"
          type="email"
          placeholder="johndoe45@gmail.com"
          name="email"
          required
        />
      </div>

      <div className="form_control">
        <label className="form_label" htmlFor="name">
          Phone Number
        </label>
        <input
          className="form_input"
          type="number"
          placeholder="+22 345 678 88345"
          name="name"
          required
        />
      </div>

      <div className="form_control">
        <label className="form_label" htmlFor="name">
          Position
        </label>
        <input
          className="form_input"
          type="text"
          placeholder="Software Engineer"
          name="position"
          required
        />
      </div>
      <button className="accept" arial-label="accept">
        Accept
      </button>
      <button className="reject" arial-label="reject">
        Reject
      </button>
    </Form>
  );
};

export default AcceptReject;

const Form = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 450px;

  .avatar {
    width: 180px;
    height: 180px;
    margin: auto auto;
  }

  .title {
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    text-transform: capitalize;
    color: #2667ff;
  }

  .form_control {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }

  .form_label {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;
    color: #323130;
  }

  .form_input {
    padding: 15px;
    border: 0.6px solid #b3b3b3;
  }

  .form_input:focus {
    outline: 1px solid #2667ff;
  }

  .accept {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    gap: 10px;

    background: #2667ff;

    border: 2px solid #f0f0f0;
    border-radius: 4px;
    color: #ffffff;
  }

  .accept:hover {
    background: #3f8efc;
  }

  .reject {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    border: 2px solid #2667ff;
    border-radius: 4px;
    color: #106ebe;
  }
  .reject:hover {
    background: #FAF9F8;
  }

  @media screen and (max-width: 769px) {
    width: auto;

    .title {
      font-size: 25px;
    }

    .form_label {
      font-size: 18px;
    }
  }
`;
