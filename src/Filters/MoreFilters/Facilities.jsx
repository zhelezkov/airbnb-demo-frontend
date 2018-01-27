import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { CenterRow, SectionWrapper, Title } from './styled';
import BasicCheckbox from '../../UI/Checkbox';
import Collapsible from 'react-collapsible';

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
    elebator, pool, freeParking, wheelchair, garden, bathhouse,
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
        <Collapsible trigger="See all facilities" triggerWhenOpen="Close all facilities" transitionTime={100}>
          <Checkboxes>
            <Checkbox title="Bathhouse" name="bathhouse" onChange={onCheck} checked={bathhouse} />
            <Checkbox title="Garden" name="garden" onChange={onCheck} checked={garden} />
          </Checkboxes>
        </Collapsible>
      </Grid>
    </SectionWrapper>
  );
};
