import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';
import logo from './images/greyLogo.svg';
import facebookIcon from './images/facebook.svg';
import twitterIcon from './images/twitter.svg';
import instagramIcon from './images/instagram.svg';

const Icon = styled.img`
  margin-right: 0.75rem;
`;

const Copyright = () => <p>© Airbnb Inc.</p>;

const BottomContainer = styled.div`
  width: 100%;
  min-height: 3.75rem;
  border-top: rgba(72, 72, 72, 0.08) 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #383838;
  font-weight: 300;
  margin-right: 1rem;
`;

export default () => (
  <React.Fragment>
    <BottomContainer>
      <ContentContainer>
        <Icon src={logo} alt="Logo" />
        <Copyright />
      </ContentContainer>
      <ContentContainer>
        <nav>
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Site map</Link>
        </nav>
        <Icon src={facebookIcon} alt="Facebook" />
        <Icon src={twitterIcon} alt="Twitter" />
        <Icon src={instagramIcon} alt="Instagram" />
      </ContentContainer>
    </BottomContainer>
  </React.Fragment>
);
