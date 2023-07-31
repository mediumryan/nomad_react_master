import React from 'react';
import './index.css';
import { styled } from 'styled-components';

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
        </MainContainer>
    );
}

export default App;
