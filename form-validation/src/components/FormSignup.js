import styled from "styled-components";

const StyledFormSignup = styled.div`
  background-color: green;
`;

function FormSignup() {
  return (
    <StyledFormSignup>
      <form className="form">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
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
          />
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
