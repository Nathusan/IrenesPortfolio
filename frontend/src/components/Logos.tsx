import { Container, Title, Space, Group, Image } from '@mantine/core';
import React from 'react';


interface LogosProps {
    logos: string[];
}

const Logos: React.FC<LogosProps> = ({ logos }) => {
    return (
         <Container fluid styles={{root: {paddingInline: 0}}}>
            <Title styles={{root: {textAlign: "center"}}} size='md'>Tools</Title>
            <Space h='md'/>
            <Group>
                {logos.map((logo: string) => {
                    return (
                        <Image src={logo} />
                    )
                })}
            </Group>
        </Container>
    );
};

export default Logos;