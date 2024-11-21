import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiLinkedin } from 'react-icons/si';
import '../style/main.less';
import { navToExternalWebsite, Websites } from '../helpers/externalLinkHelpers';
import '@mantine/core/styles.css';

export default class Footer extends React.Component {
    public render() {
        return (
            <div
          className='footer'
        >
          <div className='footer-container'>
            <p>Find me here!</p>
            <div
              onClick={() => navToExternalWebsite(Websites.instagram)}
              role='presentation'
              className='presentation'
            >
              <AiOutlineInstagram />
              <div>Instagram</div>
            </div>
            <div
              onClick={() => navToExternalWebsite(Websites.linkedIn)}
              role='presentation'
              className='presentation'
            >
              <SiLinkedin />
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
        )
    }
}