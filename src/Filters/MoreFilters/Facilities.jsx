import React from 'react';
import { SectionWrapper, Title } from './styled';
import { Checkbox, Wrapper } from './Checkboxes';

export default ({ onCheck, values }) => {
  const {
    elebator, pool, freeParking, wheelchair, garden, bathhouse,
  } = values;

  return (
    <SectionWrapper>
      <Title>Facilities</Title>
      <Wrapper>
        <Checkbox title="Elebator" name="elebator" onChange={onCheck} checked={elebator} />
        <Checkbox title="Pool" name="pool" onChange={onCheck} checked={pool} />
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
        <Checkbox title="Bathhouse" name="bathhouse" onChange={onCheck} checked={bathhouse} />
        <Checkbox title="Garden" name="garden" onChange={onCheck} checked={garden} />
      </Wrapper>
    </SectionWrapper>
  );
};
