/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useEffect, useState } from 'react';
import { Grid, Image, Group, Container } from '@mantine/core';
import { fetchImagesFromPath, fetchSubfoldersWithImages } from '../helpers/imageHelpers';
import '@mantine/core/styles.css';
import '../style/main.less';

const AboutPage: React.FC =() => {
  const [dp, setDp] = useState([]);
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const dpRequest = await fetchImagesFromPath('about');
        const iconsRequest = await fetchSubfoldersWithImages('about');
        const [dp, icons] = await Promise.all([dpRequest, iconsRequest]);

        setDp(dp);
        setIcons(icons);
      } catch (error) {
        console.error("Error fetching about page images", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setIcons, setDp])

  return (
    <div className='about-page'>
      <div id='container' className='container'>
        <div className='codrops-top clearfix'>
          <span className='right' />
        </div>
        <div id='me' className='me'>
          <div id='page-title'>About Me!</div>
        </div>
      </div>
      <Container>
        <Grid
          styles={{
            inner: {
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {!loading &&  Object.values(icons['icons']).map((img, index) => (
            <Grid.Col span={1.2} key={index}>
                <Image w="3rem" src={img} className='shaking-icons'/>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
      <Group justify='centre' gap='xs' grow wrap="nowrap">
        {!loading && <Image className='containers' h='auto' w={'auto'} src={dp} />}
        <div id='about' className='containers'>
          <p>
            Hey I’m Irene, an aspiring Graphic Designer based in London. I have a BA in Product and Industrial Design and I’m all about creating designs that make people smile and connect - whether it’s for a brand overhaul or a small creative project,  I aim to make a meaningful impact while learning something new along the way.
            I have a soft spot for illustrations, and as a proud South Asian, I’m passionate about making sure my work reflects inclusivity and representation.
            In my process, I draw inspiration from things around me -whether it’s something outside or browsing online - and channel it into fresh, imaginative concepts that fit each project’s unique goals.
            When I’m not designing, you’ll probably find me reading, climbing, sketching in my notebook where I aim to sketch daily. Oh, and I have a serious sweet tooth for desserts!
          </p>
        </div>
      </Group>
    </div>
  );
}

export default AboutPage;