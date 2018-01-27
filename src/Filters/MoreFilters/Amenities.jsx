import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { SectionWrapper, Title } from './styled';
import BasicCheckbox from '../../UI/Checkbox';

const Description = styled.div`
  font-weight: 100;
  align-self: center;
`;

const Checkbox = ({ title }) => (
  <Col lg={6}>
    <Row>
      <BasicCheckbox />
      <Description>{title}</Description>
    </Row>
  </Col>
);

export default ({ onClick }) => (
  <SectionWrapper>
    <Title>Amenities</Title>
    <Grid>
      <Row>
        <Checkbox title="Heating" />
        <Checkbox title="Kitchen" />
      </Row>
      <Row>
        <Checkbox title="TV" />
        <Checkbox title="Wireless Internet" />
      </Row>
    </Grid>
  </SectionWrapper>
);