import FormSignup from "./FormSignup";
import styled from "styled-components";

const StyledForm = styled.div`
  background-color: blue;
  min-height: 100vh;
`;

function Form() {
  return (
    <StyledForm>
      <FormSignup />
    </StyledForm>
  );
}

export default Form;
