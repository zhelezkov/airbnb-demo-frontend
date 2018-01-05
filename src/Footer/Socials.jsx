import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import { Link } from './common';

import logo from './images/greyLogo.svg';
import facebookIcon from './images/facebook.svg';
import twitterIcon from './images/twitter.svg';
import instagramIcon from './images/instagram.svg';

const Icon = styled.img`
  margin-right: 0.75rem;
`;

const Copyright = () => <p>© Airbnb Inc.</p>;

const Wrapper = styled.div`
  width: 100%;
  min-height: 3.75rem;
  margin-left: 1rem;
  border-top: rgba(72, 72, 72, 0.08) 1px solid;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CenteredRow = styled(Row)`
  align-items: center;
`;

export default () => (
  <Wrapper>
    <CenteredRow>
      <Icon src={logo} alt="Logo" />
      <Copyright />
    </CenteredRow>
    <CenteredRow>
      <nav>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Site map</Link>
      </nav>
      <Icon src={facebookIcon} alt="Facebook" />
      <Icon src={twitterIcon} alt="Twitter" />
      <Icon src={instagramIcon} alt="Instagram" />
    </CenteredRow>
  </Wrapper>
);
