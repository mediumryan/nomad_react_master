import './CSS/index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Coins from './Pages/Coins';
import Coin from './Pages/Coin';
import Price from './Pages/Price';
import Chart from './Pages/Chart';
import { styled } from 'styled-components';

const BackBtn = styled.button`
    position: absolute;
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: none;
    background-color: ${(props) => props.theme.accentColor};
    color: #fff;
    cursor: pointer;
`;

interface ChartProps {
    coinId: string;
}

function App() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <BackBtn onClick={() => navigate(-1)}>뒤로가기</BackBtn>
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
