import { useState } from "react";
import styled from "styled-components";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import FormImage from "../assets/rocket.svg";

const StyledForm = styled.div`
  background: linear-gradient(
    90deg,
    rgba(1, 160, 191, 1) 0%,
    rgba(0, 205, 246, 1) 100%
  );
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 0 auto;
  position: relative;
  box-shadow: -2px 3px 14px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 3px 14px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 3px 14px -5px rgba(0, 0, 0, 0.75);

  & > .form__content--left {
    height: 100%;
    flex: 50%;
    display: grid;
    place-items: center;

    & > .form__image {
      height: 350px;
    }
  }
`;

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <StyledForm>
      <div className="form__content--left">
        <img src={FormImage} alt="Spaceship" className="form__image" />
      </div>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </StyledForm>
  );
}

export default Form;
