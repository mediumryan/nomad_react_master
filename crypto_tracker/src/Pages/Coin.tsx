import { useParams, useLocation, Outlet, useMatch } from 'react-router-dom';
import { styled } from 'styled-components';
import { StyledLink } from './Coins';
import { useQuery } from 'react-query';
import { fetchCoinInfo, fetchCoinTickers } from './api';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface infoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface priceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}

const CoinWrapper = styled.div<{ isActive: boolean }>`
    background-color: ${(props) => props.theme.bgColor};
    height: ${(props) => (props.isActive ? '100%' : '100vh')};
    padding: 24px 48px;
`;

const TitleContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme.accentColor};
`;

const TitleImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 12px;
`;

const OverViewBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const OverView = styled.div`
    background-color: ${(props) => props.theme.boxColor};
    color: ${(props) => props.theme.textColor};

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 12px;
    margin: 12px;
    text-align: center;
    border-radius: 20px;
    width: 50%;
`;

const OverViewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    span:first-child {
        margin-bottom: 12px;
        font-size: 18px;
    }
`;

const Description = styled.div`
    color: ${(props) => props.theme.textColor};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 12px;
    margin: 12px;
    font-size: 20px;
    line-height: 1.5;
    width: 50%;
`;

const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px 0;
    width: 50%;
`;

const LinkTo = styled(StyledLink)<{ isActive: boolean }>`
    display: block;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.theme.boxColor};
    color: ${(props) =>
        props.isActive ? props.theme.accentColor : props.theme.textColor};
    border-radius: 20px;
    padding: 12px 24px;
    margin: 4px;
`;

export default function Coin() {
    const { coinId } = useParams();
    const { state } = useLocation();
    const priceMatch = useMatch(`${coinId}/price`);
    const chartMatch = useMatch(`${coinId}/chart`);

    const { isLoading: infoLoading, data: infoData } = useQuery<infoData>(
        ['info', coinId],
        () => fetchCoinInfo(coinId!)
    );
    const { isLoading: tickersLoading, data: tickersData } =
        useQuery<priceData>(
            ['tickers', coinId],
            () => fetchCoinTickers(coinId!),
            { refetchInterval: 5000 }
        );

    if (infoLoading || tickersLoading) {
        return <div>Loading...</div>;
    }

    const loading = infoLoading || tickersLoading;

    return (
        <CoinWrapper
            isActive={priceMatch || chartMatch !== null ? true : false}
        >
            <HelmetProvider>
                <Helmet>
                    <title>
                        {state?.name
                            ? state.name
                            : loading
                            ? 'Loading...'
                            : infoData?.name}
                    </title>
                </Helmet>
            </HelmetProvider>
            <OverViewBox>
                <TitleContainer>
                    <TitleImg
                        src={`https://coinicons-api.vercel.app/api/icon/${infoData?.symbol.toLowerCase()}`}
                    />
                    <Title>
                        {state?.name
                            ? state.name
                            : loading
                            ? 'Loading...'
                            : infoData?.name}
                    </Title>
                </TitleContainer>
                <OverView>
                    <OverViewItem>
                        <span>Rank : </span>
                        <span>{infoData?.rank}</span>
                    </OverViewItem>
                    <OverViewItem>
                        <span>Symbol : </span>
                        <span>{infoData?.symbol}</span>
                    </OverViewItem>
                    <OverViewItem>
                        <span>Price : </span>
                        <span>{tickersData?.quotes.USD.price.toFixed(3)}</span>
                    </OverViewItem>
                </OverView>
                <Description>{infoData?.description}</Description>
                <OverView>
                    <OverViewItem>
                        <span>Total Supply : </span>
                        <span>{tickersData?.total_supply}</span>
                    </OverViewItem>
                    <OverViewItem>
                        <span>Max Supply : </span>
                        <span>{tickersData?.max_supply}</span>
                    </OverViewItem>
                </OverView>
                <LinkBox>
                    <LinkTo
                        to="price"
                        isActive={priceMatch !== null ? true : false}
                    >
                        Price
                    </LinkTo>
                    <LinkTo
                        to="chart"
                        isActive={chartMatch !== null ? true : false}
                    >
                        Chart
                    </LinkTo>
                </LinkBox>
                <Outlet context={{ coinId }}></Outlet>
            </OverViewBox>
        </CoinWrapper>
    );
}
