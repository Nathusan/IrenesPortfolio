import React from 'react';
import '../style/main.less';
import { Grid, Image, Paper } from '@mantine/core';
import '@mantine/core/styles.css';

const IMAGES = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
]

export default class GraphicDesignPage extends React.Component {
  public render() {
    return (
      <div className='graphic-design-page'>
        <div id='container' className='container'>
          <div className='codrops-top clearfix'>
            <span className='right' />
          </div>
            <div id='me' className='me'>
              <div id='page-title'>Graphic Design Projects</div>
            </div>
        </div>
        <div id='about' className='containers'>
          <p>
          Hi! I’m an aspiring Graphic Designer with a dash of User-Centric design flair paired alongside a foundation in Product Design.
          </p>
        </div>
        <div className='image-grid'>
          <Grid grow>
            {IMAGES.map((imgUrl, index) => (
              <Grid.Col span={4} key={index}>
                <Paper
                  shadow="sm"
                  radius="md"
                  withBorder
                  // onClick={() => handleSelect(url)}
                >
                  <Image
                    src={imgUrl}
                  />
                </Paper>
              </Grid.Col>
            )
            )}
          </Grid>
        </div>
      </div>
    );
  }
}
