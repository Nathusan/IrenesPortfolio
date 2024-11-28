import React from 'react';
import { Image, Container, Grid  } from '@mantine/core';

interface PhotoCollageProps {
    images: string[],
}

export const PhotoCollage: React.FC<PhotoCollageProps> = ({ images }) =>  {
    return (
        <React.Fragment>
            <Container className='photo-collage-container'>
                <Grid >
                    {images.slice(0, 3).map((image, index) => (
                        <Grid.Col span={3} key={index} id={`img-${index}`}>
                                <Image src={image}/>
                        </Grid.Col>
                    ))}
                </Grid>
                <Grid >
                    {images.slice(3, 7).map((image, index) => (
                        <Grid.Col span={3} key={index} id={`img-${index + 3}`}>
                            <Image src={image}/>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
}