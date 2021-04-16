import styled from "styled-components";

const StyledFormSuccess = styled.div`
  background-color: var(--black);
  height: 100%;
  flex: 50%;
  padding: 24px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  text-align: center;

  & > p {
    font-size: 24px;
  }
`;

function FormSuccess() {
  return (
    <StyledFormSuccess>
      <p>We have received your request!</p>
    </StyledFormSuccess>
  );
}

export default FormSuccess;
