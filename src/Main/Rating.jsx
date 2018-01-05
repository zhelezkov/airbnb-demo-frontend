import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import starImage from './star.svg';

const Wrapper = styled.div`
  display: inline;
  margin-right: 0.5rem;
`;

export default ({ stars }) => (
  <Wrapper>{_.times(stars, id => <img src={starImage} alt="Star" key={id}/>)}</Wrapper>
);
