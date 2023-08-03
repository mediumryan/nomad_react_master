import { styled } from 'styled-components';

interface ContainerProps {
    bg_color: string;
    border_color: string;
}

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: ${(props) => props.bg_color};
    border: 5px solid ${(props) => props.border_color};
`;

interface CircleProps {
    bg_color: string;
    border_color?: string;
}

export default function Circle({ bg_color, border_color }: CircleProps) {
    return (
        <Container
            bg_color={bg_color}
            border_color={border_color ?? bg_color}
        />
    );
}
