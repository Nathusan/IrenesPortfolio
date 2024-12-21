import React, { useEffect, useState } from 'react';
import '../style/main.less';
import { Image, Text, Stack, Group, Center, Grid, Title, Space, Container, Chip } from '@mantine/core';
import '@mantine/core/styles.css';
import { hyphenateWithSpace } from '../helpers/textHelpers';
import { PhotoCollage } from '../components/PhotoCollage';
import { ColourPalette } from '../components/ColourPalette';
import { fetchSubfoldersWithImages } from '../helpers/imageHelpers';

interface Brief {
    briefText: string,
    task: string,
    duration: string,
    tools: string[],
}

interface MoodBoard {
    moodBoardDescription?: string,
}

export interface ProjectProps {
    projectName: string;
    directive: string[];
    brief: Brief;
    moodBoard: MoodBoard;
    colourPalette?: string[],
    logoBackgroundColour?: string,
    logoExplanation?: string,
}

enum ImageDirectory {
    banners = 'banners',
    moodBoard = 'moodBoard',
    heroShots = "heroShots",
    logos = 'logos'
}

interface data {
    data : ProjectProps;
}

const ProjectPage: React.FC<data>  = (props): React.ReactElement => {
    const [projectImages, setProjectImages] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {

            const data = await fetchSubfoldersWithImages(`/projects/${props.data.projectName}/`);
            setProjectImages(data);

            } catch (error) {
                console.error("Error fetching subfolders or images:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [setProjectImages]);

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
            {!loading && <Image src={projectImages[ImageDirectory.banners]['page_banner.png']?? ''}/>}
            <Stack justify="center" gap="md">
                <Container mt={'50px'} mb={'50px'} fluid  styles={{root: {paddingInline: 0}}}>
                    <Center>
                        <Title size='xl'>
                            Brief
                        </Title>
                    </Center>
                    <Text styles={{root: {textAlign: "center"}}}>
                        {props.data.brief.briefText}
                    </Text>
                </Container>
                <Group justify="center" gap="xl" grow align='none'>
                    <Stack>
                        <Container fluid styles={{root: {paddingInline: 0}}}>
                            <Title styles={{root: {textAlign: 'center'}}} size='md'>Task</Title>
                            <Space h='md'/>
                            <Text styles={{root: {textAlign: "center"}}}>{props.data.brief.task}</Text>
                        </Container>
                    </Stack>
                    <Stack>
                        <Container fluid styles={{root: {paddingInline: 0}}}>
                            <Title styles={{root: {textAlign: "center"}}} size='md'>Duration</Title>
                            <Space h='md'/>
                            <Text styles={{root: {textAlign: "center"}}}>{props.data.brief.duration}</Text>
                        </Container>
                    </Stack>
                    <Stack>
                        <Container fluid styles={{root: {paddingInline: 0}}}>
                            <Title styles={{root: {textAlign: "center"}}} size='md'>Tools</Title>
                            <Space h='md'/>
                            {props.data.brief.tools.map((d, index) => (<Chip key={index} defaultChecked >{d}</Chip>) )}
                        </Container>
                    </Stack>
                </Group>
            </Stack>
            <Space h="xl" />
            {
                props.data.moodBoard?.moodBoardDescription &&
                <Group justify='centre' gap='xs' grow wrap="nowrap" className='mood-board' mt="xl" align='none'>
                    <Container fluid w='4rem' styles={{root: {paddingInline: 0}}}>
                        <Title size='md'>Mood Board</Title>
                        <Text>{props.data?.moodBoard.moodBoardDescription}</Text>
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
                    {!loading && <PhotoCollage images={Object.values(projectImages[ImageDirectory.moodBoard])}/>}
                </Group>
            }
            {
                !props.data?.moodBoard.moodBoardDescription &&
                <Stack justify='centre' gap='xs'>
                    <div>
                        <Text>{props.data?.moodBoard.moodBoardDescription}</Text>
                    </div>
                    <Space/>
                    <div>
                        <Grid gutter="xs">
                          {!loading &&  <PhotoCollage images={ Object.values(projectImages[ImageDirectory.moodBoard])}/>}
                        </Grid>
                    </div>
                </Stack>
            }
            {props.data.colourPalette && <ColourPalette colours={props.data.colourPalette}/>}
            {!loading && <Image src={projectImages[ImageDirectory.banners]['logo-banner.png']}/>}
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

                    { !loading && projectImages[ImageDirectory.logos] &&
                     Object.values(projectImages[ImageDirectory.logos]).sort().map((imgPath, index) =>
                        (<Grid.Col span={3} key={index}>
                            <Image src={imgPath} key={index}/>
                        </Grid.Col>))
                    }
                </Grid>
                <Text mt={10} mb={10}>{props.data.logoExplanation}</Text>
            </Stack>
            {projectImages[ImageDirectory.heroShots] &&
                <Stack className='hero-shots' justify='centre' gap='0'>
                    <div>
                        <Stack gap='0'>
                            {
                                Object.values(projectImages[ImageDirectory.heroShots]).map((imgPath, index) =>
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