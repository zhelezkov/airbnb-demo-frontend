import React from 'react';
import styled from 'styled-components';
import Toggle from '../../UI/Toggle/index';
import { SectionWrapper, Title } from './styled';

const Description = styled.p`
  font-weight: 100;
  font-size: 1.125rem;
  margin: 0;
`;

const SubDescription = Description.extend`
  font-size: 1rem;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 100;
  color: #008489;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
`;

export default ({ onToggle, values }) => {
  const lg = matchMedia('(min-width: 992px)').matches;

  const { superhost, instantBook } = values;

  return (
    <SectionWrapper>
      <Title>More options</Title>
      {!lg && (
        <Row>
          <div>
            <Description>Instant Book</Description>
            <SubDescription>Secure a reservation instantly.</SubDescription>
            <Link href="#">Learn more</Link>
          </div>
          <Toggle onClick={onToggle} on={instantBook} name="instantBook" />
        </Row>
      )}
      <Row>
        <div>
          <Description>Superhost</Description>
          <SubDescription>Stay with recognized hosts.</SubDescription>
          <Link href="#">Learn more</Link>
        </div>
        <Toggle onClick={onToggle} on={superhost} name="superhost" />
      </Row>
    </SectionWrapper>
  );
};
