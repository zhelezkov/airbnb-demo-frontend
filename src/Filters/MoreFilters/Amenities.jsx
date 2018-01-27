import React from 'react';
import { SectionWrapper, Title } from './styled';
import { Checkbox, Wrapper } from './Checkboxes';

export default ({ onCheck, values }) => {
  const {
    heating, kitchen, tv, wifi, iron, washer,
  } = values;

  return (
    <SectionWrapper>
      <Wrapper title="Amenities">
        <Checkbox title="Heating" name="heating" onChange={onCheck} checked={heating} />
        <Checkbox title="Kitchen" name="kitchen" onChange={onCheck} checked={kitchen} />
        <Checkbox title="TV" name="tv" onChange={onCheck} checked={tv} />
        <Checkbox title="Wireless Internet" name="wifi" onChange={onCheck} checked={wifi} />
        <Checkbox title="Iron" name="iron" onChange={onCheck} checked={iron} />
        <Checkbox title="Washer" name="washer" onChange={onCheck} checked={washer} />
      </Wrapper>
    </SectionWrapper>
  );
};
