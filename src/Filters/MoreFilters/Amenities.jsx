import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { SectionWrapper, SeeAll, Title } from './styled';
import BasicCheckbox from '../../UI/Checkbox';

const Description = styled.div`
  font-weight: 100;
  align-self: center;
`;

const Checkboxes = styled(Row)`
  margin-bottom: 1rem;
`;

const Checkbox = ({
  title, name, onChange, checked,
}) => (
  <Col lg={6}>
    <Row>
      <BasicCheckbox name={name} onChange={onChange} checked={checked} />
      <Description>{title}</Description>
    </Row>
  </Col>
);

export default ({ onCheck, values }) => {
  const {
    heating, kitchen, tv, wifi,
  } = values;
  return (
    <SectionWrapper>
      <Title>Amenities</Title>
      <Grid>
        <Checkboxes>
          <Checkbox title="Heating" name="heating" onChange={onCheck} checked={heating} />
          <Checkbox title="Kitchen" name="kitchen" onChange={onCheck} checked={kitchen} />
        </Checkboxes>
        <Checkboxes>
          <Checkbox title="TV" name="tv" onChange={onCheck} checked={tv} />
          <Checkbox title="Wireless Internet" name="wifi" onChange={onCheck} checked={wifi} />
        </Checkboxes>
        <Row>
          <SeeAll>See all amenities</SeeAll>
        </Row>
      </Grid>
    </SectionWrapper>
  );
};
