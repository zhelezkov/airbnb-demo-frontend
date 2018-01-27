import React from 'react';
import styled from 'styled-components';
import Toggle from '../../UI/Toggle/index';
import { Row, SectionWrapper, Title } from './styled';

const Description = styled.p`
  font-weight: 100;
  font-size: 1.125rem;
  margin: 0;
`;

const SubDescription = Description.extend`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 100;
  color: #0F7276;
`;

export default ({ onToggle, on }) => (
  <SectionWrapper>
    <Title>More options</Title>
    <Row>
      <div>
        <Description>Superhost</Description>
        <SubDescription>Stay with recognized hosts.</SubDescription>
        <Link href="#">Learn more</Link>
      </div>
      <Toggle onClick={onToggle} on={on} />
    </Row>
  </SectionWrapper>
);
