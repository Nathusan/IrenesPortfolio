/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useEffect, useState } from 'react';
import '../style/main.less';
import { Grid, Image, Paper } from '@mantine/core';
import '@mantine/core/styles.css';
import { ProjectProps } from './ProjectPage';
import { useNavigate } from 'react-router-dom';
import { fetchSubfoldersWithImages } from '../helpers/imageHelpers';

interface ProjectData {
  path?: string,
  data: ProjectProps
}

enum Project {
  extra = 'Extra',
  inAPickle = 'In A Pickle',
  gotAChew = 'Got a Chew',
  naiqua = 'Naiqua',
  eyeCare = 'ஐcare',
}

export enum ProjectTools {
  AdobeIllustrator = 'Adobe Illustrator',
  AdobePhotoShop = 'Adobe Photoshop',
  AdobeInDesign = 'Adobe Indesign',
}

const projects: ProjectData[] = [
  {
    path: "/project-page",
    data: {
        projectName: Project.inAPickle,
        directive: ['Branding' ,'Packaging Design','Passion Project'],
        brief: {
          briefText: 'In A Pickle sell fun flavoured pickles! They’re expanding their pickle jar range with some exciting new flavours and are looking for a complete overhaul of their branding & packaging.',
          task: 'Design an engaging visual identity and create packaging designs',
          duration: '1 week',
          tools: [ProjectTools.AdobeIllustrator, ProjectTools.AdobePhotoShop],
        },
        moodBoard: {
        },
        logoBackgroundColour: "#E3D6CB",
    }
  },
  {
    path: "/project-page",
    data: {
        projectName: Project.extra,
        directive: ['Rebranding' ,'Packaging Design','Brief Challenge'],
        brief: {
          briefText: 'Rebrand Extra’s logo to resonate with a younger, vibrant audience. Extra is looking to refresh its visual identity with a modern, fun and youthful approach, incorporating soft pastel colours.',
          task: 'Create a rebrand of their logo and packaging design',
          duration: '1 week',
          tools: [ProjectTools.AdobeIllustrator, ProjectTools.AdobePhotoShop, ProjectTools.AdobeInDesign],
        },
        typography: true,
        collage: true,
    }
  },
  {
    path: "/project-page",
    data: {
        projectName: Project.naiqua,
        directive: ['Branding' ,'Packaging Design','Passion Project'],
        brief: {
          briefText: 'Design a bright and bold sparkling water brand, create a brand identity and the packaging for it.',
          task: 'Design a visual identity and other deliverables',
          duration: '1 week',
          tools: [ProjectTools.AdobeIllustrator, ProjectTools.AdobePhotoShop],
        },
        typography: true,
    }
  },
  {
    path: "/project-page",
    data: {
        collage: true,
        projectName: 'ஐcare',
        directive: ['Brand Identity ','Packaging Design','Passion Project'],
        brief: {
          briefText: 'Create a visual identity for a new eye serum brand. The logo should convey elegance, appealing to a modern audience. The identity must communicate rejuvenation and self-care, resonating with consumers who value beauty and integrity in skincare.',
          task: 'Design the logo, packaging design and other relevant deliverables',
          duration: '1 week',
          tools: [ProjectTools.AdobeIllustrator, ProjectTools.AdobePhotoShop],
        },
        moodBoard: {
        },
        colourPalette: ['#E3D6CB','#C7AC9E','#F4EAE7','#C2967C'],
        logoBackgroundColour: "#E3D6CB",
        logoExplanation: 'The name is inspired by the Tamil letter "ஐ" (pronounced "I"), symbolising the commitment to nurturing and protecting your eyes. Pronounced as "eye care," it reflects both the dedication to skincare and the values it cherishes.Rooted in Tamil culture, ஐ represents the elegance and wisdom of an ancient script. By incorporating this unique letter into the brand, it celebrates diversity and cultural fusion.',

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
