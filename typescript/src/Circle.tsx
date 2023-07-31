import React from 'react';
import { styled } from 'styled-components';

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: ${(props) => props.bgColor};
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

export default function Circle({ bgColor, borderColor }: CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}
