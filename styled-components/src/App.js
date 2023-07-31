import "./CSS/index.css";
import styled from "styled-components";

const MainContainer = styled.main`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div {
    font-size: 48px;
  }
`;

function App() {
  return (
    <MainContainer>
      <div>hi</div>
    </MainContainer>
  );
}

export default App;
