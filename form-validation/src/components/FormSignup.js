import styled from "styled-components";
import UseForm from "../services/UseForm";
import validate from "../services/ValidateInfo";

const StyledFormSignup = styled.div`
  background-color: green;
  width: fit-content;
  border-radius: 12px;
  padding: 16px;
  margin: 0 auto;
`;

function FormSignup() {
  const { handleChange, values, handleSubmit, errors } = UseForm(validate);

  return (
    <StyledFormSignup>
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today!
          <br></br>Create your account by<br></br>
          filling out the information below.
        </h1>
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
          />
          {errors.username && <p>{errors.username}</p>}
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
          />
          {errors.email && <p>{errors.email}</p>}
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
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form__inputs">
          <label htmlFor="password2" className="form__label">
            Confirm Password
          </label>
          <input
            id="password2"
            type="password2"
            name="password2"
            className="form__input"
            placeholder="Confirm your password"
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form__button" type="submit">
          Sign up
        </button>
        <span className="form__login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </StyledFormSignup>
  );
}

export default FormSignup;
