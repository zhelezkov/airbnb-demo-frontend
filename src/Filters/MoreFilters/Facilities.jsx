import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { CenterRow, SectionWrapper, SeeAll, Title } from './styled';
import BasicCheckbox from '../../UI/Checkbox';

const Description = styled.label`
  font-weight: 100;
  cursor: pointer;
`;

const Checkboxes = styled(Row)`
  margin-bottom: 1rem;
`;

const Checkbox = ({
  title, name, onChange, checked,
}) => (
  <Col lg={6}>
    <Description>
      <CenterRow>
        <BasicCheckbox name={name} onChange={onChange} checked={checked} />
        {title}
      </CenterRow>
    </Description>
  </Col>
);

export default ({ onCheck, values }) => {
  const {
    elebator, pool, freeParking, wheelchair,
  } = values;
  return (
    <SectionWrapper>
      <Title>Facilities</Title>
      <Grid>
        <Checkboxes>
          <Checkbox title="Elebator" name="elebator" onChange={onCheck} checked={elebator} />
          <Checkbox title="Pool" name="pool" onChange={onCheck} checked={pool} />
        </Checkboxes>
        <Checkboxes>
          <Checkbox
            title="Free parking on premises"
            name="freeParking"
            onChange={onCheck}
            checked={freeParking}
          />
          <Checkbox
            title="Wheelchair accessible"
            name="wheelchair"
            onChange={onCheck}
            checked={wheelchair}
          />
        </Checkboxes>
        <Row>
          <SeeAll>See all facilities</SeeAll>
        </Row>
      </Grid>
    </SectionWrapper>
  );
};
