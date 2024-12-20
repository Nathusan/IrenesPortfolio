import React from 'react';
import { Group, Text } from '@mantine/core';

export interface ColourPaletteProps {
    colours?: string[];
}

export const ColourPalette: React.FC<ColourPaletteProps> = ({colours}) => {
    return (
        <React.Fragment>
            <Group className='colourPalette' gap={0}>
                {colours.map((colour) => {
                    return (
                        <div className='box' style={{backgroundColor: colour}} key={colour}>
                            <Text fw={500} size='lg' className='colour-hex'>{colour}</Text>
                        </div>
                    )
                })}
            </Group>
        </React.Fragment>
    )
}