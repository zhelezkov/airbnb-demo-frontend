import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

const Wrapper = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const Filters = styled(Row)`
  flex-wrap: nowrap;
`;

const Button = styled.button`
  margin: 0.75rem;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  appearance: none;
  color: #383838;
  padding: 0.4375rem 1rem 0.4375rem 1rem;
  font-size: 0.875rem;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Filters>
        <Button>Dates</Button>
        <Button>Guests</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Room type</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Price</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Instant book</Button>
        <Button>More filters</Button>
      </Filters>
    </Grid>
  </Wrapper>
);
