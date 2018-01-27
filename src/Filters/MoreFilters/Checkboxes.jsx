import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';
import take from 'lodash/take';
import takeRight from 'lodash/takeRight';
import { Col as BasicCol, Grid, Row } from 'react-flexbox-grid';
import { CenterRow } from './styled';
import BasicCheckbox from '../../UI/Checkbox';

const Description = styled.label`
  font-weight: 100;
  cursor: pointer;
`;

const Checkboxes = styled(Row)`
  margin-bottom: 1rem;
`;

const Col = styled(BasicCol)`
  margin-bottom: 1rem;
`;

export const Checkbox = ({
  title, name, onChange, checked,
}) => (
  <Col xs={12} md={6} lg={6}>
    <Description>
      <CenterRow>
        <BasicCheckbox name={name} onChange={onChange} checked={checked} />
        {title}
      </CenterRow>
    </Description>
  </Col>
);

export const BasicWrapper = ({ className, children }) => {
  const childrenVisible = take(children, 4);
  const othersChildren = takeRight(children, children.length - 4);

  return (
    <Grid className={className}>
      <Checkboxes>
        {childrenVisible}
      </Checkboxes>
      <Collapsible
        trigger="See all"
        triggerWhenOpen="Close all"
        transitionTime={100}
      >
        <Checkboxes>
          {othersChildren}
        </Checkboxes>
      </Collapsible>
    </Grid>
  );
};

export const Wrapper = styled(BasicWrapper)`
  width: 100%;
`;
