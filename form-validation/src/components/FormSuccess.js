import styled from "styled-components";

const StyledFormSuccess = styled.div`
  flex: 50%;
  padding: 24px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  text-align: center;

  & > p {
    font-size: 32px;
    font-weight: 900;
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
