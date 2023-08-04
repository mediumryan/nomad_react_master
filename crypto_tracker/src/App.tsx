import './CSS/index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Coins from './Pages/Coins';
import Coin from './Pages/Coin';
import Price from './Pages/Price';
import Chart from './Pages/Chart';
import { keyframes, styled } from 'styled-components';
import { FaBackward } from 'react-icons/fa';

const backBtnAnimation = keyframes`
    from {
        transform: translate(0);
    }
    to {
        transform: translateX(-10px);
    }
`;

const BackBtn = styled.button`
    position: absolute;
    top: 50px;
    left: 50px;
    border-radius: 50%;
    font-size: 18px;
    padding: 12px;
    border: none;
    background-color: ${(props) => props.theme.accentColor};
    color: #fff;
    cursor: pointer;
    &:hover {
        animation: ${backBtnAnimation} 700ms linear infinite;
    }
`;

function App() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <BackBtn onClick={() => navigate('')}>
                <FaBackward />
            </BackBtn>
            <Routes>
                <Route path="/" element={<Coins />} />
                <Route path="/:coinId" element={<Coin />}>
                    <Route path="price" element={<Price />} />
                    <Route path="chart" element={<Chart />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
