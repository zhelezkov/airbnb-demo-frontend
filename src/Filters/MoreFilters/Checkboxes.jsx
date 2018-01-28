import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';
import take from 'lodash/take';
import takeRight from 'lodash/takeRight';
import { Col as BasicCol, Grid, Row } from 'react-flexbox-grid';
import { CenterRow, SeeAll, Title } from './styled';
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

const TitleWrapper = styled(Row)`
  justify-content: space-between;
  margin-left: 0;
`;

const OpenTrigger = ({ title }) => (
  <TitleWrapper>
    <Title>{title}</Title>
    <SeeAll isOpen>Open all</SeeAll>
  </TitleWrapper>
);

const CloseTrigger = ({ title }) => (
  <TitleWrapper>
    <Title>{title}</Title>
    <SeeAll>Close all</SeeAll>
  </TitleWrapper>
);

const OpenTriggerBigScreen = () => (
  <SeeAll isOpen>Open all</SeeAll>
);

const CloseTriggerBigScreen = () => (
  <SeeAll>Close all</SeeAll>
);

const BasicWrapper = ({ className, children, title }) => {
  const md = matchMedia('(min-width: 768px)').matches;
  const lg = matchMedia('(min-width: 992px)').matches;

  const smallScreen = !md && !lg;

  const childrenVisible = take(children, 4);
  const othersChildren = takeRight(children, children.length - 4);

  return (
    <React.Fragment>
      {!smallScreen && <Title>{title}</Title>}
      <Grid className={className}>
        {!smallScreen && <Checkboxes>{childrenVisible}</Checkboxes>}
        <Collapsible
          trigger={smallScreen ? OpenTrigger({ title }) : OpenTriggerBigScreen()}
          triggerWhenOpen={smallScreen ? CloseTrigger({ title }) : CloseTriggerBigScreen()}
          transitionTime={100}
        >
          <Checkboxes>{smallScreen ? children : othersChildren}</Checkboxes>
        </Collapsible>
      </Grid>
    </React.Fragment>
  );
};

export const Wrapper = styled(BasicWrapper)`
  width: 100%;
`;
