import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import { Link } from './styled';

import logo from './images/greyLogo.svg';
import facebookIcon from './images/facebook.svg';
import twitterIcon from './images/twitter.svg';
import instagramIcon from './images/instagram.svg';

const Icon = styled.img`
  margin-right: 0.75rem;
`;

const Wrapper = styled.div`
  padding-left: 1rem;
  display: flex;
  align-content: center;
  justify-content: space-between;

  border-top: rgba(72, 72, 72, 0.08) 1px solid;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CenteredRow = styled(Row)`
  align-items: center;
`;

const Copyright = () => <p>© Airbnb Inc.</p>;

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
      <Link href="#">
        <Icon src={facebookIcon} alt="Facebook" />
      </Link>
      <Link href="#">
        <Icon src={twitterIcon} alt="Twitter" />
      </Link>
      <Link href="#">
        <Icon src={instagramIcon} alt="Instagram" />
      </Link>
    </CenteredRow>
  </Wrapper>
);
