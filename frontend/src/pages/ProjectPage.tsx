import React, { useEffect, useState } from 'react';
import '../style/main.less';
import { Image, Text, Stack, Group, Center, Grid, Title, Space, Container } from '@mantine/core';
import '@mantine/core/styles.css';
import { hyphenateWithSpace } from '../helpers/textHelpers';
import { PhotoCollage } from '../components/PhotoCollage';
import { ColourPalette } from '../components/ColourPalette';
import { fetchSubfoldersWithImages } from '../helpers/imageHelpers';
import InfiniteScrollImage from '../components/scrollImage';
import { ProjectTools } from './HomePage';

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
    moodBoard?: MoodBoard;
    colourPalette?: string[],
    logoBackgroundColour?: string,
    logoExplanation?: string,
    typography?: boolean,
    collage?: boolean,
}

enum ImageDirectory {
    banners = 'banners',
    moodBoard = 'moodBoard',
    heroShots = "heroShots",
    logos = 'logos',
    typography = 'typography',
    tools = 'tools',
}

enum Banner {
    logo ='logo_banner.png',
    subLogo ='sub_logo_banner.png',
    page = 'page_banner.png',
    typoGraphy = "typoGraphy.png",
    moodBoard = 'mood_board_banner.png',
}

const TOOLS_MAPPING  = {
    [ProjectTools.AdobeIllustrator]:'adobe_illustrator.png',
    [ProjectTools.AdobeInDesign]: 'adobe_indesign.png',
    [ProjectTools.AdobePhotoShop] : 'adobe_photoshop.png',
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
            {!loading && !props.data.collage && <Image src={projectImages[ImageDirectory.banners][Banner.page] ?? ''}/>}
            <Stack justify="center" gap="md">
                <Container mt={'50px'} mb={'50px'} fluid  styles={{root: {paddingInline: 0}}}>
                    <Center>
                        <Title size='xl' mb={'1rem'}>
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
                            <Group>
                                {props.data.brief.tools.map((logo: string, index: number) => {
                                    return (
                                        <div key={index}>
                                            {!loading && projectImages[ImageDirectory.tools]&& <Image h={'3rem'} src={projectImages[ImageDirectory.tools][TOOLS_MAPPING[logo]]} key={index} />}
                                        </div>
                                    )
                                })}
                            </Group>
                        </Container>
                    </Stack>
                </Group>
            </Stack>
            <Space h={'xl'}/>

            {!loading && props.data.moodBoard && <Image src={projectImages[ImageDirectory.moodBoard][Banner.moodBoard] ?? ''}/>}
            {!loading && projectImages[ImageDirectory.typography] &&
                <Stack justify="center" gap={0}>
                    <Image src={projectImages[ImageDirectory.typography]['typography.png']?? ''}/>
                </Stack>
            }
            { props.data.moodBoard &&
                <div>
                    {
                        props.data.moodBoard?.moodBoardDescription &&
                        <Group justify='centre' gap='xs' grow wrap="nowrap" className='mood-board' align='none'>
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
                            {!loading && projectImages[ImageDirectory.moodBoard] && <PhotoCollage images={Object.values(projectImages[ImageDirectory.moodBoard])}/>}
                        </Group>
                    }
                    {
                        !props.data?.moodBoard?.moodBoardDescription &&
                        <Stack justify='centre' gap='xs'>
                            <div>
                                <Text>{props.data?.moodBoard.moodBoardDescription}</Text>
                            </div>
                            <Space/>
                            <div>
                                <Grid gutter="xs">
                                {!loading && props.data.moodBoard && <Image src={projectImages[ImageDirectory.moodBoard][Banner.moodBoard] ?? ''}/>}
                                </Grid>
                            </div>
                        </Stack>
                    }
                </div>
            }
            {props.data.colourPalette && <ColourPalette colours={props.data.colourPalette}/>}
            {!loading && <Image src={projectImages[ImageDirectory.banners][Banner.logo]}/>}
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
                {props.data.logoExplanation && <Text mt={10} mb={10}>{props.data.logoExplanation}</Text>}
            </Stack>
            { !loading && projectImages[ImageDirectory.banners][Banner.subLogo] &&
                <div className="scroll-container">
                    <div className="scroll-content">
                        {!loading && <InfiniteScrollImage image={projectImages[ImageDirectory.banners][Banner.subLogo]}/>}
                    </div>
                </div>
            }
            {projectImages[ImageDirectory.heroShots] &&
                <Stack className='hero-shots' justify='centre' gap='0'>
                    <Stack gap='0'>
                        {
                            Object.values(projectImages[ImageDirectory.heroShots]).sort().map((imgPath, index) =>
                                <Image src={imgPath} key={index}/>
                            )
                        }
                    </Stack>
                </Stack>
            }
            </div>
        </div>
    );
}

export default ProjectPage