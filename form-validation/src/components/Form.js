import { useState } from "react";
import styled from "styled-components";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const StyledForm = styled.div`
  background-color: var(--white);
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <StyledForm>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </StyledForm>
  );
}

export default Form;
