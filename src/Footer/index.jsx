import React from 'react';
import styled from 'styled-components';

import Selectors from './Selectors';
import { Grid, Row } from 'react-flexbox-grid';
import Navigation from './Navigation';

export default () => (
  <Grid>
    <Row>
      <Selectors />
      <Navigation />
    </Row>
  </Grid>
);
