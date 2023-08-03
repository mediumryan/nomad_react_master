import './index.css';
import { styled } from 'styled-components';
import Forms from './Forms';
import Circle from './Circle';

const MainContainer = styled.div`
    height: 100vh;
    background-color: ${(props) => props.theme.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

function App() {
    return (
        <MainContainer>
            <Text>hihihi</Text>
            <Forms />
            <Circle bg_color="red" border_color="green" />
        </MainContainer>
    );
}

export default App;
