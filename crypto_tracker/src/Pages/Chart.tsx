import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinHistory } from './api';
import ApexChart from 'react-apexcharts';
import { theme } from './theme';
import { styled } from 'styled-components';

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

const ChartContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Chart() {
    const { coinId } = useOutletContext<ChartProps>();

    const { isLoading, data } = useQuery<IHistorical[]>(
        ['ohlcv', coinId],
        () => {
            return fetchCoinHistory(coinId);
        },
        {
            refetchInterval: 10000,
        }
    );

    return (
        <ChartContainer>
            {isLoading ? (
                'Loading Chart...'
            ) : (
                <ApexChart
                    style={{ width: '50%' }}
                    type="line"
                    series={[
                        {
                            name: 'Close Price',
                            data:
                                data?.map((price) => parseFloat(price.close)) ??
                                [],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: 'light',
                        },
                        chart: {
                            height: 500,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                        },
                        grid: {
                            show: false,
                        },
                        xaxis: {
                            labels: {
                                show: false,
                            },
                            type: 'datetime',
                            categories: data?.map((price) =>
                                new Date(price.time_close * 1000).toISOString()
                            ),
                        },
                        yaxis: {
                            show: false,
                        },
                        stroke: {
                            curve: 'smooth',
                            width: 3,
                        },
                        fill: {
                            type: 'gradient',
                            gradient: {
                                gradientToColors: ['#8B5FBF'],
                                stops: [0, 100],
                            },
                        },
                        colors: ['#61398F'],
                        tooltip: {
                            y: {
                                formatter: (val) => `$${val.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </ChartContainer>
    );
}
