import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import { Link as BasicLink } from './styled';

import logo from './images/greyLogo.svg';
import facebookIcon from './images/facebook.svg';
import twitterIcon from './images/twitter.svg';
import instagramIcon from './images/instagram.svg';

const Logo = styled.img`
  margin-right: 0.75rem;
`;

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  border-top: rgba(72, 72, 72, 0.08) 1px solid;
`;

const CenteredRow = styled(Row)`
  align-items: center;
`;

const Copyright = styled.p`
  margin-right: 1rem;
`;

const Link = BasicLink.extend`
  margin-right: 1rem;
  margin-bottom: 0;
`;

export default () => (
  <Wrapper>
    <CenteredRow>
      <Logo src={logo} alt="Logo" />
      <Copyright>© Airbnb Inc.</Copyright>
    </CenteredRow>
    <CenteredRow>
      <nav>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Site map</Link>
      </nav>
      <Link href="#">
        <img src={facebookIcon} alt="Facebook" />
      </Link>
      <Link href="#">
        <img src={twitterIcon} alt="Twitter" />
      </Link>
      <Link href="#">
        <img src={instagramIcon} alt="Instagram" />
      </Link>
    </CenteredRow>
  </Wrapper>
);
