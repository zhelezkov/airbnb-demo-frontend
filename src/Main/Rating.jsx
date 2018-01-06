import React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';

import starImage from './star.svg';

const Wrapper = styled.span`
  margin-right: 0.5rem;
`;

export default ({ stars }) => (
  <Wrapper>{times(stars, id => <img src={starImage} alt="Star" key={id} />)}</Wrapper>
);
