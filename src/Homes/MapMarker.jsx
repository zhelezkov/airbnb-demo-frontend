import React from 'react';
import styled from 'styled-components';

import star from './images/star.svg';

const MarkerWrapper = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  left: 1.5rem;
  top: 1.5rem;

  border-radius: 100%;
  background-color: #FBC02C;
  text-align: center;
  padding: 4px;
`;

const Star = styled.img.attrs({
  src: star,
  alt: 'Star icon',
})`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
`;

export default () => (
  <MarkerWrapper>
    <Star />
  </MarkerWrapper>
);
