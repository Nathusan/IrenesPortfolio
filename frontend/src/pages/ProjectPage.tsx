import React from 'react';
import '../style/main.less';
import { Image, Text, Stack, Group, Center, Grid, Paper, Title, Space, Container, Chip } from '@mantine/core';
import '@mantine/core/styles.css';
import { hyphenateWithSpace } from '../helpers/textHelpers';
import { PhotoCollage } from '../components/PhotoCollage';
import { ColourPalette } from '../components/ColourPalette';

interface Brief {
    briefText: string,
    task: string,
    duration: string,
    tools: string[],
}

interface MoodBoard {
    moodBoardDescription?: string,
    moodBoardImg: string[],
}

export interface ProjectProps {
    projectName: string;
    directive: string[];
    brief: Brief;
    imgUrl: string;
    moodBoard: MoodBoard;
    colourPalette?: string[],
    bannerLogo?: string,
    logos: string[]
    logoBackgroundColour?: string,
    logoExplanation?: string,
    heroShots?: string[];
}

interface data {
    data : ProjectProps;
}

const ProjectPage: React.FC<data>  = (props): React.ReactElement => {
    return (
        <div className='project-page'>
            <div id='container' className='container'>
                <div className='codrops-top clearfix'>
                <span className='right' />
            </div>
            <div id='project' className='project'>
                <Stack>
                    <Center>
                        <Text className='title' size='xl' fw={700} >{props.data.projectName}</Text>
                    </Center>
                    <Center>
                        <Text className='directives' size='md' id='directive'>{hyphenateWithSpace(props.data.directive)}</Text>
                    </Center>
                </Stack>
            </div>
            <Image src={props.data.imgUrl}/>
            <Stack justify="center" gap="md">
                <Container mt={'50px'} mb={'50px'} fluid  styles={{root: {paddingInline: 0}}}>
                    <Center>
                        <Title size='xl'>
                            Brief
                        </Title>
                    </Center>
                    <Text align="center">
                        {props.data.brief.briefText}
                    </Text>
                </Container>
                <Group justify="center" gap="xl" grow align='none'>
                    <Stack>
                        <Container fluid styles={{root: {paddingInline: 0}}}>
                            <Title align="center" size='md'>Task</Title>
                            <Space h='md'/>
                            <Text align="center">{props.data.brief.task}</Text>
                        </Container>
                    </Stack>
                    <Stack>
                        <Container fluid styles={{root: {paddingInline: 0}}}>
                            <Title align="center" size='md'>Duration</Title>
                            <Space h='md'/>
                            <Text align="center">{props.data.brief.duration}</Text>
                        </Container>
                    </Stack>
                    <Stack>
                        <Container fluid styles={{root: {paddingInline: 0}}}>
                            <Title align="center" size='md'>Tools</Title>
                            <Space h='md'/>
                            {props.data.brief.tools.map((d, index) => (<Chip key={index} defaultChecked >{d}</Chip>) )}
                        </Container>
                    </Stack>
                </Group>
            </Stack>
            <Space h="xl" />
            {
                props.data.moodBoard.moodBoardDescription &&
                <Group justify='centre' gap='xs' grow wrap="nowrap" className='mood-board' mt="xl" align='none'>
                    <Container fluid w='4rem' styles={{root: {paddingInline: 0}}}>
                        <Title size='md'>Mood Board</Title>
                        <Text>{props.data.moodBoard.moodBoardDescription}</Text>
                    </Container>
                    <Container styles={{root: {paddingInline: 0}}}>
                        <Grid
                            styles={{
                                inner: {
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                },
                            }}
                            grow
                            gutter="xs"
                        >
                        </Grid>
                    </Container>
                    <PhotoCollage images={ props.data.moodBoard.moodBoardImg}/>
                </Group>
            }
            {
                !props.data.moodBoard.moodBoardDescription &&
                <Stack justify='centre' gap='xs'>
                    <div>
                        <Text>{props.data.moodBoard.moodBoardDescription}</Text>
                    </div>
                    <Space/>
                    <div>
                        <Grid gutter="xs">
                            <PhotoCollage images={ props.data.moodBoard.moodBoardImg}/>
                        </Grid>
                    </div>
                </Stack>
            }
            {props.data.colourPalette && <ColourPalette colours={props.data.colourPalette}/>}
            <Image src={props.data.bannerLogo}/>
            <Stack className='logos' justify='centre' gap='xs'>
                <Grid
                    styles={{
                        inner: {
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        },
                    }}
                    grow
                    gutter="xs"
                    style={{backgroundColor: `${props.data.logoBackgroundColour}`}}
                >
                    {
                        props.data.logos.map((imgPath, index) => (
                                <Grid.Col span={3} key={index}>
                                    <Image src={imgPath} radius="md"/>
                                </Grid.Col>
                            )
                        )
                    }
                </Grid>
                <Text mt={10} mb={10}>{props.data.logoExplanation}</Text>
            </Stack>
            {props.data.heroShots &&
                <Stack className='hero-shots' justify='centre' gap='0'>
                    <div>
                        <Stack gap='0'>
                            {
                                props.data.heroShots.map((imgPath, index) =>
                                    <Image src={imgPath} key={index}/>
                                )
                            }
                        </Stack>
                    </div>
                </Stack>
            }
            </div>
        </div>
    );
}

export default ProjectPage