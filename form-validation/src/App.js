import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import Form from "./components/Form";

const StyledApp = styled.div`
  background-color: var(--white);
  width: 90%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Form />
    </StyledApp>
  );
}

export default App;
