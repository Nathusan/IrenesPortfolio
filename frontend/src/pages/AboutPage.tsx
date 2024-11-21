import React from 'react';
import '../style/main.less';
import { Grid, Image, Paper, Group } from '@mantine/core';
import '@mantine/core/styles.css';

const IMAGES = [
    require('../img/drink.png'),
    require('../img/pencil.png'),
    require('../img/cookie.png'),
    require('../img/book.png'),
];

export default class AboutPage extends React.Component {
  public render() {
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
        <div className='image-grid'>
          <Grid styles={{inner: {
            'alignItems': 'center',
            'display': 'flex',
            'justifyContent': 'center',
              }}}>
              {IMAGES.map((img, index) => (
                <Grid.Col span={1.2} key={index}>
                  <Paper
                    shadow="sm"
                    radius="md"
                    withBorder
                    // onClick={() => handleSelect(url)}
                  >
                    <Image
                      w='3rem'
                      src={img}
                    />
                  </Paper>
                </Grid.Col>
              )
              )}
          </Grid>
        </div>
        <Group justify='centre' gap='xs' grow wrap="nowrap">
          <Image h='auto' w={'auto'} src={require('../img/IreneDP.png')} />
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
}
