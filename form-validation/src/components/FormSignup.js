import styled from "styled-components";
import UseForm from "../services/UseForm";
import validate from "../services/ValidateInfo";

const StyledFormSignup = styled.div`
  background-color: var(--black);
  height: 100%;
  flex: 50%;
  border-radius: 0 8px 8px 0;
  padding: 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > .form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > .form__inputs {
      display: flex;
      flex-direction: column;
      gap: 4px;

      & > .form__label {
        font-size: 12px;
      }

      & > .form__input {
        height: 30px;
        color: var(--black);
        border: none;
        border-radius: 4px;
        padding: 4px;
      }

      & > .form__error {
        color: var(--red);
        font-size: 12px;
      }
    }

    & > .form__button {
      background: linear-gradient(
        90deg,
        rgba(1, 160, 191, 1) 0%,
        rgba(0, 205, 246, 1) 100%
      );
      height: 40px;
      border: none;
      border-radius: 4px;
      margin: 6px 0 0 0;
    }

    & > .form__login {
      font-size: 14px;
      text-align: center;

      & > a {
        color: var(--blue);
      }
    }
  }
`;

function FormSignup({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submitForm,
    validate
  );

  return (
    <StyledFormSignup>
      <h1>
        Get started with us today! Create your account by filling out the
        information below.
      </h1>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form__inputs">
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form__input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            autoComplete="username"
          />
          {errors.username && <p className="form__error">{errors.username}</p>}
        </div>
        <div className="form__inputs">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form__input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="form__error">{errors.email}</p>}
        </div>
        <div className="form__inputs">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form__input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          {errors.password && <p className="form__error">{errors.password}</p>}
        </div>
        <div className="form__inputs">
          <label htmlFor="password2" className="form__label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form__input"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
            autoComplete="new-password"
          />
          {errors.password2 && (
            <p className="form__error">{errors.password2}</p>
          )}
        </div>
        <button className="form__button" type="submit">
          Sign up
        </button>
        <span className="form__login">
          Already have an account? Login <a href="/">here</a>
        </span>
      </form>
    </StyledFormSignup>
  );
}

export default FormSignup;
