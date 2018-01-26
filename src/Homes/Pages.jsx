import React from 'react';
import styled from 'styled-components';
import { Row, Col as BasicCol } from 'react-flexbox-grid';
import Card from './Card';

const CenterRow = styled(Row)`
  justify-content: center;
  margin-bottom: 1rem;
  color: #636363;
`;

const PageNumber = styled.a`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 50%;
  color: #008489;
  text-decoration: none;
  text-align: center;
  line-height: 2em;
  box-sizing: content-box;
  transition: 0.2s;

  &:hover {
    text-decoration: underline;
  }

  ${({ selected }) =>
    selected &&
    `
      background: #008489;
      color: #fff;
    `}};
`;

const NextPage = styled.button`
  display: inline-block;
  width: 2em;
  height: 2em;
  border: 1px solid #008489;
  border-radius: 50%;
  background: none;
  cursor: pointer;

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

const Col = styled(BasicCol)`
  margin-bottom: 2.5rem;
`;

const Page = ({ homes }) => (
  <Row>
    {homes.map(home => (
      <Col xs={12} md={6} key={home.id}>
        <Card {...home} />
      </Col>
    ))}
  </Row>
);

const Pagination = () => (
  <CenterRow>
    <PageNumber selected href="#">
      1
    </PageNumber>
    <PageNumber href="#">2</PageNumber>
    <PageNumber href="#">3</PageNumber>
    <PageNumber href="#">...</PageNumber>
    <PageNumber href="#">17</PageNumber>
    <NextPage />
  </CenterRow>
);

const Pages = props => (
  <React.Fragment>
    <Page {...props} />
    <Pagination pages={props.pages} />
    <CenterRow>1 – 18 of 300+ Rentals</CenterRow>
  </React.Fragment>
);

export default Pages;
