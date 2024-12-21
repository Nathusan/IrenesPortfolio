/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useEffect, useState } from 'react';
import '../style/main.less';
import { Grid, Image, Paper } from '@mantine/core';
import '@mantine/core/styles.css';
import { ProjectProps } from './ProjectPage';
import { useNavigate } from 'react-router-dom';
import { fetchSubfoldersWithImages } from '../helpers/imageHelpers';

interface Project {
  path?: string,
  data: ProjectProps
}

const projects: Project[] = [
  {
    path: "/project-page",
    data: {
        projectName: 'In a Pickle',
        directive: ['Branding' ,'Packaging Design','Passion Project'],
        brief: {
          briefText: 'In A Pickle sell fun flavoured pickles! They’re expanding their pickle jar range with some exciting new flavours and are looking for a complete overhaul of their branding & packaging.',
          task: 'Design an engaging visual identity and create packaging designs',
          duration: '1 week',
          tools: ['Adobe Illustrator', 'Photoshop'],
        },
        moodBoard: {
          moodBoardDescription: 'I have created a moodboard that  embraces a playful rubber hose style with a retro colour palette, which not only represents the pickle range but also ties together the overall aesthetic.',
        },
    }
  },
  {
    path: "/project-page",
    data: {
        projectName: 'ஐcare',
        directive: ['Brand Identity ','Packaging Design','Passion Project'],
        brief: {
          briefText: 'Create a visual identity for a new eye serum brand. The logo should convey elegance, appealing to a modern audience. The identity must communicate rejuvenation and self-care, resonating with consumers who value beauty and integrity in skincare.',
          task: 'Design the logo, packaging design and other relevant deliverables',
          duration: '1 week',
          tools: ['Adobe Illustrator', 'Photoshop'],
        },
        moodBoard: {
        },
        colourPalette: ['#E3D6CB','#C7AC9E','#F4EAE7','#C2967C'],
        logoBackgroundColour: "#E3D6CB",
        logoExplanation: 'The name is inspired by the Tamil letter "ஐ" (pronounced "I"), symbolising the commitment to nurturing and protecting your eyes. Pronounced as "eye care," it reflects both the dedication to skincare and the values it cherishes.Rooted in Tamil culture, ஐ represents the elegance and wisdom of an ancient script. By incorporating this unique letter into the brand, it celebrates diversity and cultural fusion.',

    }
  }
]

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [projectBanners, setProjectBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSubfoldersWithImages('/projects/');
        setProjectBanners(data);
      } catch (error) {
        console.error("Error fetch banner Image", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData()
  }, [setProjectBanners])

  return (
    <div className='home-page'>
      <div id='container' className='container'>
        <div className='codrops-top clearfix'>
          <span className='right' />
        </div>
          <div id='me' className='me'>
            <div id='page-title'>Irene Indiran</div>
          </div>
      </div>
      <div id='about' className='containers'>
        <p>
          Hi! I’m an aspiring Graphic Designer with a dash of User-Centric design flair paired alongside a foundation in Product Design.
        </p>
      </div>
      <div className='image-grid'>
        <Grid grow>
          {projects.map((project, index) => (
            <Grid.Col span={projects.length} key={index}>
              <Paper
                shadow="md"
                radius='lg'
                withBorder
                onClick={() => navigate(project.path, {state: {data: project.data}})}
              >
                {!loading
                  && projectBanners[project.data.projectName]
                  && <Image src={projectBanners[project.data.projectName]['project_banner.png']} radius="md"/>}
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default HomePage;
