import React from 'react';
import styled from 'styled-components';
import chunk from 'lodash/chunk';
import { Row, Col } from 'react-flexbox-grid';
import Card from './Card';

const HomesRow = styled(Row)`
  margin-bottom: 2.5rem;
`;

const PageNumbers = styled(Row)`
  justify-content: center;
`;

const PageNumber = styled.button`
  width: 2rem;
  border-radius: 50%;
  text-align: center;
  margin-right: 1rem;
  line-height: 2rem;
  appearance: none;
  border: none;

  ${({ selected }) => {
    if (selected) {
      return `
        background: #008489;
        color: white;
        `;
    }
  }};
`;

const NextPage = styled.button`
  display: inline-block;
  width: 2em;
  height: 2em;
  border: 1px solid #008489;
  border-radius: 50%;

  ::after {
    content: '';
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    border-top: 1px solid #008489;
    border-right: 1px solid #008489;
    transform: rotate(45deg);
  }
`;

const Page = ({ homes, rowSize = 2 }) =>
  chunk(homes, rowSize).map((row, index) => (
    <HomesRow key={index}>
      {row.map(home => (
        <Col xs={12} md={6} key={home.id}>
          <Card {...home} />
        </Col>
      ))}
    </HomesRow>
  ));

const Pagination = ({ pages }) => (
  <PageNumbers>
    <PageNumber selected>1</PageNumber>
    <PageNumber>2</PageNumber>
    <PageNumber>3</PageNumber>
    <PageNumber>...</PageNumber>
    <PageNumber>17</PageNumber>
    <NextPage />
  </PageNumbers>
);

const Pages = props => (
  <React.Fragment>
    <Page {...props} />
    <Pagination pages={props.pages} />
  </React.Fragment>
);

export default Pages;
