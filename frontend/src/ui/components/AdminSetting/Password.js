import styled from "styled-components";

const Password = () => {
  return (
    <PasswordSection>
      <form method="post">
        <hr />
        <div className="form__control">
          <label className="form__label" htmlFor="password">
            Current Password
          </label>
          <input
            placeholder="******"
            className="form__input form__password"
            type="password"
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
      </form>
    </PasswordSection>
  );
};

const PasswordSection = styled.section`
  display: grid;
  grid-template-columns: auto;

  hr {
    border: none;
    height: 2px;
    background: #edebe9;
  }

  .form__control {
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: auto auto;
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

  .form__password {
    background: #ffffff;
    border: 1px solid #8a8886;
    border-radius: 2px;
    color: #323130;
    max-width: 100%;
    margin-left: 220px;
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
      width: 80%;
    }

    .form__password {
      max-width: 100%;
      margin-left: 0;
    }
  }
`;

export default Password;
