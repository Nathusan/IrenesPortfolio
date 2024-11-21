import React from 'react';
import '../style/main.less';
import { Grid, MantineProvider, Image, Paper } from '@mantine/core';
import '@mantine/core/styles.css';

const IMAGES = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
]

export default class ProductDesignPage extends React.Component {
  public render() {
    return (
      <div className='product-design-page'>
        <div id='container' className='container'>
          <div className='codrops-top clearfix'>
            <span className='right' />
          </div>
            <div id='me' className='me'>
              <div id='page-title'>Product Design Projects</div>
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